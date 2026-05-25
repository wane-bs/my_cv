import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link
} from '@react-pdf/renderer';

// Register the Tinos font for full Vietnamese support
const baseUrl = import.meta.env.BASE_URL || '/';

Font.register({
  family: 'Tinos',
  fonts: [
    { src: `${baseUrl}fonts/Tinos-Regular.ttf` },
    { src: `${baseUrl}fonts/Tinos-Bold.ttf`, fontWeight: 'bold' },
    { src: `${baseUrl}fonts/Tinos-Italic.ttf`, fontStyle: 'italic' },
  ]
});

// Harvard CV standard styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 48,
    paddingRight: 48,
    fontFamily: 'Tinos',
    fontSize: 9.5,
    color: '#111111',
    lineHeight: 1.35,
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    color: '#111111',
  },
  contactInfo: {
    fontSize: 8.5,
    color: '#4D4D4D',
    marginBottom: 4,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1.5,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 2,
    marginBottom: 6,
    color: '#111111',
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  entryTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#111111',
  },
  entryLocation: {
    fontStyle: 'italic',
    fontSize: 9.5,
    color: '#4D4D4D',
  },
  entrySubtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  entryRole: {
    fontStyle: 'italic',
    fontSize: 9.5,
    color: '#111111',
  },
  entryDate: {
    fontStyle: 'normal',
    fontSize: 9.5,
    color: '#4D4D4D',
  },
  bulletList: {
    paddingLeft: 10,
    marginBottom: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 9.5,
    color: '#111111',
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: '#111111',
  },
  bold: {
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: 6,
    fontSize: 9.5,
    color: '#111111',
    textAlign: 'justify',
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  skillCategory: {
    fontWeight: 'bold',
    width: 120,
    fontSize: 9.5,
    color: '#111111',
  },
  skillList: {
    flex: 1,
    fontSize: 9.5,
    color: '#111111',
  }
});

/**
 * Utility to parse out <strong> tags from the rich text used in web and return an array of Text nodes for react-pdf
 */
const renderRichText = (htmlString) => {
  if (!htmlString) return null;
  
  // A naive parser to split string by <strong> tags
  const parts = htmlString.split(/(<strong>.*?<\/strong>)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      const text = part.substring(8, part.length - 9);
      return <Text key={index} style={styles.bold}>{text}</Text>;
    }
    // Clean any other tags just in case
    const cleanText = part.replace(/<[^>]+>/g, '');
    return <Text key={index}>{cleanText}</Text>;
  });
};

const HarvardCVTemplate = ({ data, language }) => {
  const t = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{t.header.name}</Text>
          <Text style={styles.contactInfo}>
            (+84) 812-339-125   |   trunghieuwane@gmail.com   |   github.com/wane-bs   |   {t.header.location}
          </Text>
        </View>

        {/* Summary (if any, optional in Harvard, but included as per data) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.summary.profileTitle}</Text>
          <Text style={styles.paragraph}>
            {renderRichText(t.summary.profileText)}
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience.title}</Text>
          
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.experience.ctgroup.company}</Text>
            <Text style={styles.entryLocation}>HCMC, Vietnam</Text>
          </View>
          <View style={styles.entrySubtitleRow}>
            <Text style={styles.entryRole}>{t.experience.ctgroup.title}</Text>
            <Text style={styles.entryDate}>{t.experience.ctgroup.time}</Text>
          </View>
          <View style={styles.bulletList}>
            {t.experience.ctgroup.bullets.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.projects.title}</Text>
          
          {/* Project 1 */}
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.projects.project1.title}</Text>
            <Text style={styles.entryDate}>{t.projects.project1.time}</Text>
          </View>
          <Text style={styles.paragraph}>
            {t.projects.project1.role}: {renderRichText(t.projects.project1.desc)}
          </Text>
          <View style={styles.bulletList}>
            {t.projects.project1.bullets.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>
          
          {/* Project 2 */}
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.projects.project2.title}</Text>
            <Text style={styles.entryDate}>{t.projects.project2.time}</Text>
          </View>
          <Text style={styles.paragraph}>
            {t.projects.project2.role}: {renderRichText(t.projects.project2.desc)}
          </Text>
          <View style={styles.bulletList}>
            {t.projects.project2.bullets.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>
          
          {/* Project 3 */}
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.projects.project3.title}</Text>
            <Text style={styles.entryDate}>{t.projects.project3.time}</Text>
          </View>
          <Text style={styles.paragraph}>
            {t.projects.project3.role}: {renderRichText(t.projects.project3.desc)}
          </Text>
          <View style={styles.bulletList}>
            {t.projects.project3.bullets.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Research & Extra-curricular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.research.title}</Text>
          
          {/* Research 1 */}
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.research.research1.title}</Text>
            <Text style={styles.entryDate}>{t.research.research1.time}</Text>
          </View>
          <View style={styles.entrySubtitleRow}>
            <Text style={styles.entryRole}>{t.research.research1.role}</Text>
          </View>
          <Text style={styles.paragraph}>
            {renderRichText(t.research.research1.desc)}
          </Text>
          <View style={styles.bulletList}>
            {t.research.research1.highlights.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>

          {/* Volunteer */}
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.research.volunteer.title}</Text>
            <Text style={styles.entryDate}>{t.research.volunteer.time}</Text>
          </View>
          <View style={styles.entrySubtitleRow}>
            <Text style={styles.entryRole}>{t.research.volunteer.role}</Text>
          </View>
          <View style={styles.bulletList}>
            {t.research.volunteer.highlights.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{renderRichText(bullet)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.summary.educationTitle}</Text>
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{t.summary.university}</Text>
            <Text style={styles.entryLocation}>{t.header.location}</Text>
          </View>
          <View style={styles.entrySubtitleRow}>
            <Text style={styles.entryRole}>{t.summary.degree}</Text>
            <Text style={styles.entryDate}>{t.summary.timeEdu}</Text>
          </View>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>GPA: 2.9 (7.4) - {t.summary.degreeStatus}</Text>
            </View>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.certifications.title}</Text>
          <View style={styles.bulletList}>
            {t.certifications.certs.map((cert, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.bold}>{cert.name}</Text>
                  {cert.id && cert.id !== 'Self-studying' && cert.id !== 'Đang tự học' ? ` (ID: ${cert.id})` : ''} - {cert.date}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.skills.title}</Text>
          
          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>{t.skills.cat1}:</Text>
            <Text style={styles.skillList}>{t.skills.cat1List?.join(', ')}</Text>
          </View>
          
          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>{t.skills.cat2}:</Text>
            <Text style={styles.skillList}>{t.skills.cat2List?.join(', ')}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>{t.skills.cat3}:</Text>
            <Text style={styles.skillList}>{t.skills.cat3List?.join(', ')}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>{t.skills.langs}:</Text>
            <Text style={styles.skillList}>
              {t.skills.langItems.map(l => `${l.name} (${l.level})`).join(', ')}
            </Text>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default HarvardCVTemplate;
