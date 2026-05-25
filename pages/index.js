import { useState } from "react";
import Base from "@layouts/Baseof";
import { getSinglePage, getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { cvContent } from "@lib/cvContent";

const PDFDownloadButton = dynamic(
  () => import('@layouts/components/PDFDownloadButton'),
  { ssr: false }
);

const Home = ({
  aboutEn, aboutVi,
  projectsEn, projectsVi,
  experiencesEn, experiencesVi,
  educationEn, educationVi,
  cvDataEn, cvDataVi
}) => {
  const [lang, setLang] = useState("vi"); // Default to Vietnamese

  const about = lang === "vi" ? aboutVi : aboutEn;
  const projects = lang === "vi" ? projectsVi : projectsEn;
  const experiences = lang === "vi" ? experiencesVi : experiencesEn;
  const education = lang === "vi" ? educationVi : educationEn;
  const cvData = lang === "vi" ? cvContent.vi : cvContent.en;

  const toggleLanguage = () => {
    setLang(lang === "vi" ? "en" : "vi");
  };

  return (
    <Base title={about.frontmatter.title}>
      {/* Header / Hero Section */}
      <section className="section bg-theme-light dark:bg-darkmode-theme-light">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4">{about.frontmatter.title}</h1>
            <p className="mb-8 text-lg">{about.frontmatter.description || (lang === 'vi' ? 'Chuyên gia Phân tích Dữ liệu' : 'Data Analyst')}</p>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="btn btn-outline-primary"
              >
                {lang === 'vi' ? 'Switch to English' : 'Đổi sang Tiếng Việt'}
              </button>
              
              {/* PDF Download Button */}
              <PDFDownloadButton data={cvData} language={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section pb-0">
        <div className="container">
          <h2 className="mb-8 text-center">{lang === 'vi' ? 'Về Tôi' : 'About Me'}</h2>
          <div className="content prose mx-auto dark:prose-invert" dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section pb-0">
        <div className="container">
          <h2 className="mb-8 text-center flex items-center justify-center gap-2">
            <FaBriefcase /> {lang === 'vi' ? 'Kinh Nghiệm' : 'Experience'}
          </h2>
          <div className="relative border-l border-border dark:border-darkmode-border ml-3 md:ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6 md:ml-10">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-white dark:ring-darkmode-body"></span>
                <h3 className="mb-1 text-xl">{exp.frontmatter.title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-light dark:text-darkmode-light">
                  {exp.frontmatter.date ? new Date(exp.frontmatter.date).toLocaleDateString() : exp.frontmatter.timeframe}
                </time>
                <div className="content prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: exp.content }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pb-0">
        <div className="container">
          <h2 className="mb-8 text-center flex items-center justify-center gap-2">
            <FaCode /> {lang === 'vi' ? 'Dự Án' : 'Projects'}
          </h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="mb-8 md:col-6 lg:col-4">
                <div className="card shadow-md p-5 rounded-lg h-full border border-border dark:border-darkmode-border bg-theme-light dark:bg-darkmode-theme-light">
                  <h3 className="h4 mb-2">
                    <Link href={`/projects/${project.slug}`} className="block hover:text-primary">
                      {project.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-sm text-light dark:text-darkmode-light">{project.frontmatter.role}</p>
                  <div className="content prose dark:prose-invert line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: project.content }} />
                  <Link href={`/projects/${project.slug}`} className="btn btn-outline-primary btn-sm">
                    {lang === 'vi' ? 'Chi tiết' : 'Details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center flex items-center justify-center gap-2">
            <FaGraduationCap /> {lang === 'vi' ? 'Học Vấn & Chứng Chỉ' : 'Education & Certifications'}
          </h2>
          <div className="row justify-center">
            {education.map((edu, index) => (
              <div key={index} className="mb-6 md:col-6">
                <div className="card shadow p-5 rounded border border-border dark:border-darkmode-border">
                  <h3 className="h5 mb-2">{edu.frontmatter.title}</h3>
                  <p className="text-sm mb-2 text-light dark:text-darkmode-light">{edu.frontmatter.university || edu.frontmatter.issuer}</p>
                  <div className="content prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: edu.content }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
  // Read About
  const aboutEnRes = await getListPage("content/about.en.md");
  const aboutViRes = await getListPage("content/about.vi.md");

  // Read Projects
  const allProjects = getSinglePage("content/projects");
  const projectsEn = allProjects.filter(p => p.slug.endsWith(".en"));
  const projectsVi = allProjects.filter(p => p.slug.endsWith(".vi"));

  // Read Experiences
  const allExperiences = getSinglePage("content/experiences");
  const experiencesEn = allExperiences.filter(p => p.slug.endsWith(".en"));
  const experiencesVi = allExperiences.filter(p => p.slug.endsWith(".vi"));

  // Read Education
  const allEducation = getSinglePage("content/education_certs");
  const educationEn = allEducation.filter(p => p.slug.endsWith(".en"));
  const educationVi = allEducation.filter(p => p.slug.endsWith(".vi"));

  return {
    props: {
      aboutEn: { frontmatter: aboutEnRes.frontmatter, content: aboutEnRes.content },
      aboutVi: { frontmatter: aboutViRes.frontmatter, content: aboutViRes.content },
      projectsEn,
      projectsVi,
      experiencesEn,
      experiencesVi,
      educationEn,
      educationVi,
      // For CV PDF generation, we may need to prepare a structured JSON or let PDFDownloadButton fetch it.
      cvDataEn: {}, 
      cvDataVi: {}
    },
  };
};
