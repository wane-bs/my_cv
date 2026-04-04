import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import HarvardCVTemplate from './components/HarvardCVTemplate';
import { cvContent } from './data/cvContent';
import {
    Briefcase,
    GraduationCap,
    Code,
    ClipboardCheck,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Database,
    Award,
    BookOpen,
    Cpu,
    ChevronRight,
    Globe,
    Heart,
    Users,
    Download
} from 'lucide-react';

const CV = () => {
    const [language, setLanguage] = useState('vi');
    const [activeSection, setActiveSection] = useState('summary');

    // Track active section on scroll
    useEffect(() => {
        const sectionIds = ['summary', 'experience', 'projects', 'research', 'certifications', 'skills'];
        const handleScroll = () => {
            const scrollY = window.scrollY + 120;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = cvContent[language];

    const navItems = [
        { id: 'summary', label: t.nav.summary },
        { id: 'experience', label: t.nav.experience },
        { id: 'projects', label: t.nav.projects },
        { id: 'research', label: t.nav.research },
        { id: 'certifications', label: t.nav.certifications },
        { id: 'skills', label: t.nav.skills },
    ];

    const SectionHeader = ({ icon: Icon, title, id }) => (
        <h2 id={id} className="section-anchor flex items-center gap-3 text-2xl font-bold text-[#212529] mb-6 pt-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 text-white">
                <Icon size={20} />
            </span>
            {title}
        </h2>
    );

    return (
        <div className="min-h-screen bg-[#F2F4F3] font-sans text-[#212529] selection:bg-gray-200">
            {/* ═══════════════════ HEADER ═══════════════════ */}
            <header className="bg-[#212529] text-white shadow-xl border-b-4 border-gray-900">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                {t.header.name.toUpperCase()}
                            </h1>
                            <p className="text-gray-300 font-medium text-base md:text-lg mt-2 tracking-wide uppercase">
                                {t.header.role}
                            </p>
                            <div className="mt-5">
                                <PDFDownloadLink 
                                    document={<HarvardCVTemplate data={t} language={language} />} 
                                    fileName={`CV_Nguyen_Trung_Hieu_${language.toUpperCase()}.pdf`}
                                    className="inline-flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-white text-gray-900 text-sm font-bold rounded-lg transition-colors shadow"
                                >
                                    {({ blob, url, loading, error }) => (
                                        <>
                                            <Download size={18} />
                                            {loading ? (language === 'vi' ? 'Đang tạo PDF...' : 'Generating PDF...') : (language === 'vi' ? 'Tải CV (Harvard Form)' : 'Download CV (Harvard Form)')}
                                        </>
                                    )}
                                </PDFDownloadLink>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4">
                            {/* Language Switcher */}
                            <div className="flex items-center bg-slate-700/60 rounded-lg p-1 border border-slate-600">
                                <button
                                    onClick={() => setLanguage('vi')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'vi' ? 'bg-gray-200 text-gray-900 shadow-md' : 'text-slate-400 hover:text-white'}`}
                                >
                                    VN
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'en' ? 'bg-gray-200 text-gray-900 shadow-md' : 'text-slate-400 hover:text-white'}`}
                                >
                                    EN
                                </button>
                            </div>

                            <div className="flex flex-col gap-1.5 text-sm text-slate-300">
                                <a href="mailto:trunghieuwane@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={15} /> trunghieuwane@gmail.com
                                </a>
                                <a href="tel:+84812339125" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Phone size={15} /> (+84) 812-339-125
                                </a>
                                <div className="flex items-center gap-2">
                                    <MapPin size={15} /> {t.header.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══════════════════ STICKY NAV ═══════════════════ */}
            <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#DEE2E6] shadow-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex gap-1 overflow-x-auto no-scrollbar py-1">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`px-4 py-3 text-xs font-semibold tracking-wide uppercase whitespace-nowrap rounded-md transition-all duration-200 ${activeSection === item.id
                                    ? 'text-gray-900 bg-gray-200'
                                    : 'text-slate-500 hover:text-[#212529] hover:bg-[#F2F4F3]'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
            <main className="max-w-6xl mx-auto px-6 py-10 space-y-14">

                {/* ─── SECTION 1: SUMMARY + EDUCATION ─── */}
                <section id="summary">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main: Profile + Highlights */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEE2E6]">
                                <h2 className="flex items-center gap-2 text-xl font-bold text-[#212529] mb-4">
                                    <span className="w-1 h-6 bg-gray-900 rounded-sm"></span>
                                    {t.summary.profileTitle}
                                </h2>
                                <p
                                    className="text-slate-600 leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: t.summary.profileText }}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-300 shadow-sm">
                                    <div className="flex items-center gap-2 text-gray-800 font-bold mb-1.5">
                                        <ClipboardCheck size={18} />
                                        {t.summary.efficiency}
                                    </div>
                                    <p className="text-sm text-slate-700">{t.summary.efficiencyDesc}</p>
                                </div>
                                <div className="p-5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-300 shadow-sm">
                                    <div className="flex items-center gap-2 text-gray-800 font-bold mb-1.5">
                                        <Database size={18} />
                                        {t.summary.dataIntel}
                                    </div>
                                    <p className="text-sm text-slate-700">{t.summary.dataIntelDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Education */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEE2E6]">
                                <h3 className="flex items-center gap-2 text-lg font-bold text-[#212529] mb-4">
                                    <GraduationCap size={20} className="text-gray-900" />
                                    {t.summary.educationTitle}
                                </h3>
                                <div>
                                    <h4 className="font-bold text-[#212529] leading-snug">{t.summary.university}</h4>
                                    <p className="text-sm text-slate-600 mt-1">{t.summary.degree}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{t.summary.timeEdu}</p>
                                    <div className="mt-3 inline-flex items-center px-3 py-1.5 bg-[#DEE2E6] text-[#212529] text-sm font-bold rounded-lg border border-gray-300">
                                        {t.summary.degreeStatus}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-[#DEE2E6]" />

                {/* ─── SECTION 2: EXPERIENCE ─── */}
                <section>
                    <SectionHeader icon={Briefcase} title={t.experience.title} id="experience" />

                    <div className="bg-[#DEE2E6] p-6 rounded-xl shadow-sm border border-[#DEE2E6] flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                            <h3 className="font-bold text-lg text-[#212529]">{t.experience.ctgroup.title}</h3>
                            <span className="text-xs font-semibold text-slate-600 bg-gray-300 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.experience.ctgroup.time}</span>
                        </div>
                        <p className="text-sm text-gray-800 font-medium mb-3">{t.experience.ctgroup.company}</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {t.experience.ctgroup.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <ChevronRight size={14} className="text-gray-900 mt-1 flex-shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: b }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <hr className="border-[#DEE2E6]" />

                {/* ─── SECTION 3: PROJECTS ─── */}
                <section>
                    <SectionHeader icon={Code} title={t.projects.title} id="projects" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="bg-[#DEE2E6] p-6 rounded-xl shadow-sm border border-[#DEE2E6] flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3 gap-2">
                                <h3 className="font-bold text-lg text-[#212529]">{t.projects.project1.title}</h3>
                                <span className="text-xs font-bold text-gray-800 bg-gray-300 px-2.5 py-1 rounded-lg whitespace-nowrap">{t.projects.project1.role}</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-2">{t.projects.project1.time}</p>
                            <p className="text-sm text-slate-700 mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: t.projects.project1.desc }} />
                            <div className="pt-3 border-t border-[#DEE2E6] mt-auto">
                                <ul className="text-sm text-slate-700 space-y-1.5">
                                    {t.projects.project1.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight size={14} className="text-gray-900 mt-1 flex-shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: b }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-[#DEE2E6] p-6 rounded-xl shadow-sm border border-[#DEE2E6] flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3 gap-2">
                                <h3 className="font-bold text-lg text-[#212529]">{t.projects.project2.title}</h3>
                                <span className="text-xs font-bold text-gray-800 bg-gray-300 px-2.5 py-1 rounded-lg whitespace-nowrap">{t.projects.project2.role}</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-2">{t.projects.project2.time}</p>
                            <p className="text-sm text-slate-700 mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: t.projects.project2.desc }} />
                            <div className="pt-3 border-t border-[#DEE2E6] mt-auto">
                                <ul className="text-sm text-slate-700 space-y-1.5">
                                    {t.projects.project2.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight size={14} className="text-gray-900 mt-1 flex-shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: b }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-[#DEE2E6]" />

                {/* ─── SECTION 4: RESEARCH & EXTRA-CURRICULAR ─── */}
                <section>
                    <SectionHeader icon={BookOpen} title={t.research.title} id="research" />

                    <div className="space-y-6">
                        {/* Fintech Research */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEE2E6]">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="font-bold text-lg text-[#212529]">{t.research.research1.title}</h3>
                                <span className="text-xs font-semibold text-slate-600 bg-gray-200 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.research.research1.time}</span>
                            </div>
                            <p className="text-sm text-gray-800 font-medium mb-3">{t.research.research1.role}</p>
                            <p className="text-sm text-slate-600 mb-4" dangerouslySetInnerHTML={{ __html: t.research.research1.desc }} />
                            <ul className="space-y-2 text-sm text-slate-600">
                                {t.research.research1.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-gray-600 mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: h }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Volunteer or CFA */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEE2E6]">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="font-bold text-lg text-[#212529] flex items-center gap-2">
                                    <Award size={18} className="text-gray-800" />
                                    {t.research.volunteer.title}
                                </h3>
                                <span className="text-xs font-semibold text-slate-600 bg-gray-200 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.research.volunteer.time}</span>
                            </div>
                            <p className="text-sm text-gray-800 font-medium mb-3">{t.research.volunteer.role}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                {t.research.volunteer.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-gray-600 mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: h }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="border-[#DEE2E6]" />

                {/* ─── SECTION 5: CERTIFICATIONS ─── */}
                <section>
                    <SectionHeader icon={Award} title={t.certifications.title} id="certifications" />

                    <p className="text-sm text-slate-600 mb-5 -mt-3 ml-12">{t.certifications.seriesLabel}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.certifications.certs.map((cert, i) => (
                            <a
                                key={i}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-5 rounded-xl shadow-sm border border-[#DEE2E6] flex items-start gap-4 hover:shadow-md hover:border-gray-500 transition-all"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-800 font-extrabold text-sm flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-[#212529] text-sm group-hover:text-black transition-colors leading-snug">{cert.name}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                                </div>
                                <ExternalLink size={14} className="text-slate-400 group-hover:text-black transition-colors flex-shrink-0 mt-0.5" />
                            </a>
                        ))}
                    </div>
                </section>

                <hr className="border-[#DEE2E6]" />

                {/* ─── SECTION 6: SKILLS & LANGUAGES ─── */}
                <section>
                    <SectionHeader icon={Cpu} title={t.skills.title} id="skills" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Financial / Cat 1 */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#DEE2E6]">
                            <h3 className="text-sm font-bold text-[#212529] mb-3 pb-2 border-b border-[#DEE2E6]">{t.skills.cat1}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t.skills.cat1List?.map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-300">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tech / Cat 2 */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#DEE2E6]">
                            <h3 className="text-sm font-bold text-[#212529] mb-3 pb-2 border-b border-[#DEE2E6]">{t.skills.cat2}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t.skills.cat2List?.map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-300">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Professional / Cat 3 */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#DEE2E6]">
                            <h3 className="text-sm font-bold text-[#212529] mb-3 pb-2 border-b border-[#DEE2E6]">{t.skills.cat3}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {t.skills.cat3List?.map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-[#DEE2E6] text-slate-700 text-xs font-medium rounded border border-[#DEE2E6]">{s}</span>
                                ))}
                            </div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">{t.skills.langs}</h4>
                            <div className="space-y-2">
                                {t.skills.langItems?.map((lang, i) => (
                                    <div key={i} className={`rounded-lg py-2 px-3 flex justify-between items-center text-sm ${i === 0 ? 'bg-[#DEE2E6] text-slate-700' : 'bg-gray-100 border border-gray-200 text-gray-800'}`}>
                                        <span className="font-bold">{lang.name}</span>
                                        <span className="text-xs font-semibold uppercase tracking-wider opacity-70">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* ═══════════════════ FOOTER ═══════════════════ */}
            <footer className="bg-[#212529] text-slate-400 py-8 border-t border-gray-800 mt-4">
                <div className="max-w-6xl mx-auto px-6 text-center text-sm">
                    <p className="mb-2 text-slate-300">{language === 'vi' ? 'Cảm ơn bạn đã đọc đến đây!' : 'Thank you for reading this far!'}</p>
                    <p className="text-slate-500">&copy; 2026 {t.header.name}</p>
                </div>
            </footer>
        </div>
    );
};

export default CV;
