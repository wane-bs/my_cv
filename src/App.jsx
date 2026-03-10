import React, { useState, useEffect } from 'react';
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
    Users
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

    const content = {
        en: {
            header: {
                role: "FINANCE ANALYST & CONTROL (INTERN/FRESHER) | CFA LEVEL 1 CANDIDATE",
                name: "Nguyen Trung Hieu",
                location: "Ho Chi Minh City, Vietnam"
            },
            nav: {
                summary: "Summary",
                experience: "Experience",
                projects: "Projects",
                research: "Research",
                certifications: "Certifications",
                skills: "Skills"
            },
            summary: {
                profileTitle: "Introduction",
                profileText: "3rd-year Fintech student with a strong foundation in <strong>Finance Operations</strong> and a solid <strong>Accounting</strong> background. Aspiring <strong>Finance Analyst & Controller (Intern/Fresher)</strong> capable of leveraging <strong>Python</strong> and <strong>SQL</strong> to control data and optimize financial efficiency. Experienced in ensuring data accuracy in investment reports and building tools that reduce manual processing time by 40%.",
                highlightsTitle: "Key Highlights",
                efficiency: "Financial Automation",
                efficiencyDesc: "Developed Python tools to automate financial data extraction, reducing manual processing time by 40%.",
                dataIntel: "Analytical Rigor",
                dataIntelDesc: "Ensured absolute data accuracy in financial reports; established data anomaly detection workflows.",
                educationTitle: "Education",
                university: "Ho Chi Minh City University of Industry and Trade (HUIT)",
                degree: "B.Sc. Financial Technology",
                degreeStatus: "3rd Year Student",
                timeEdu: "Sep 2023 – Present"
            },
            experience: {
                title: "Work Experience",
                ctgroup: {
                    title: "Investor Relations Intern",
                    company: "Technology Enterprise",
                    time: "Nov 2025 – Present",
                    bullets: [
                        "<strong>Analytical Rigor:</strong> Ensured absolute accuracy of financial data in 50-page investment reports; controlled financial variables and established workflows for data anomaly detection.",
                        "<strong>Financial Automation:</strong> Developed Python tools with a focus on <strong>Data Integrity</strong> to automate the extraction and normalization of financial data, reducing manual processing time by 40% (applicable to AP/AR reconciliation).",
                        "<strong>Due Diligence Support:</strong> Analyzed business models to identify key financial variables, serving as inputs for cash flow forecasting and financial modeling."
                    ]
                }
            },
            projects: {
                title: "Key Projects",
                project1: {
                    title: "Financial Control Automation Tool",
                    role: "Python / Financial Control",
                    time: "Sep – Oct 2024",
                    desc: "Developed a Python-based system for real-time financial data processing, <strong>Error Detection</strong>, and <strong>Data Reconciliation</strong>.",
                    bullets: [
                        "Built <strong>real-time data processing</strong> capabilities, highly applicable for tracking Corporate Opt-out fee revenues instantaneously.",
                        "Optimized API usage costs for AI LLM models to maintain positive Unit Economics and steady Gross Margins."
                    ]
                },
                project2: {
                    title: "Secure Asset Management DApp",
                    role: "Smart Contract & Compliance",
                    time: "Sep 2025 – Present",
                    desc: "Engineered a decentralized solution emphasizing security, data transparency, and smart financial controls.",
                    bullets: [
                        "Designed <strong>Smart Contract & Reconciliation</strong> logic to manage distributed cash flows autonomously.",
                        "Ensured financial data security compliance aligning with <strong>Singapore standards (PDPA)</strong> and <strong>Singapore GAAP</strong> tax exemption models."
                    ]
                }
            },
            research: {
                title: "Research & Extra-curricular",
                research1: {
                    title: "Impact of Fintech on Financial Inclusion",
                    role: "Analyst",
                    time: "Oct 2023 – Apr 2024",
                    desc: "Analyzed the impact of Fintech on financial inclusion across Vietnam's top 20 GDP-leading provinces using Stata 17.",
                    highlights: [
                        "Identified the Fintech ecosystem as the primary influence on financial inclusion — GLS regression coefficient of <strong>7.56</strong> (significant at 1% level).",
                        "Examined key obstacles: insufficient R&D investment (<0.5% of GDP), uneven infrastructure, partially restricted business environment.",
                        "Projected that by 2026, two international economic centers (HCMC & Da Nang) will alleviate two-thirds of barriers.",
                        "Demonstrated alignment of findings with national development policies."
                    ]
                },
                volunteer: {
                    title: "Xuân Tình Nguyện — Charity Trip",
                    role: "Event Collaborator",
                    time: "Feb 2023",
                    highlights: [
                        "Coordinated a charity trip to Tây Ninh, organizing a festive event for primary school children.",
                        "Served as master of ceremonies and program coordinator.",
                        "Delivered over <strong>200 gifts</strong> and <strong>500 meals</strong> to children.",
                        "Achieved <strong>90% positive feedback</strong> from teachers and local authorities."
                    ]
                }
            },
            certifications: {
                title: "Certifications",
                seriesLabel: "Data-Driven Decision Making (Coursera)",
                certs: [
                    { name: "CFA Level 1 Candidate", date: "May 2026", id: "Registered", link: "#" },
                    { name: "Foundation: Data, Data, Everywhere", date: "Jan 2025", id: "M20DV1BFH6MO", link: "https://www.coursera.org/account/accomplishments/verify/M20DV1BFH6MO" },
                    { name: "Ask Questions to Make Data-Driven Decisions", date: "Mar 2025", id: "BKTV0G1OB2W7", link: "https://www.coursera.org/account/accomplishments/verify/BKTV0G1OB2W7" }
                ]
            },
            skills: {
                title: "Skills & Keywords",
                cat1: "Accounting Ops",
                cat2: "Tech-Finance Integration",
                cat3: "Compliance & YC Keywords",
                langs: "Languages",
                langItems: [
                    { name: "Vietnamese", level: "Native" },
                    { name: "English", level: "Upper Intermediate" }
                ]
            }
        },
        vi: {
            header: {
                role: "PHÂN TÍCH & KIỂM SOÁT TÀI CHÍNH (INTERN/FRESHER) | CFA LEVEL 1 CANDIDATE",
                name: "Nguyễn Trung Hiếu",
                location: "TP. Hồ Chí Minh, Việt Nam"
            },
            nav: {
                summary: "Tổng quan",
                experience: "Kinh nghiệm",
                projects: "Dự án",
                research: "Nghiên cứu",
                certifications: "Chứng chỉ",
                skills: "Kỹ năng"
            },
            summary: {
                profileTitle: "Giới thiệu",
                profileText: "Sinh viên năm 3 chuyên ngành Fintech với nền tảng vững chắc về <strong>Finance Operations</strong> và kiến thức <strong>Kế toán</strong> nền tảng. Định hướng trở thành <strong>Chuyên viên Phân tích & Kiểm soát Tài chính (Intern/Fresher)</strong>, có khả năng ứng dụng <strong>Python</strong> và <strong>SQL</strong> để kiểm soát dữ liệu và tối ưu hóa hiệu suất tài chính. Đã đảm bảo tính chính xác dữ liệu trong báo cáo đầu tư và phát triển công cụ thực tế giúp giảm 40% thời gian xử lý thủ công.",
                highlightsTitle: "Điểm nhấn Quan trọng",
                efficiency: "Tự động hóa Tài chính",
                efficiencyDesc: "Phát triển công cụ Python tự động hóa trích xuất và chuẩn hóa dữ liệu tài chính, giảm 40% thời gian xử lý thủ công.",
                dataIntel: "Đảm bảo Chính xác",
                dataIntelDesc: "Đảm bảo tính chính xác tuyệt đối của dữ liệu tài chính trong báo cáo; thiết lập quy trình kiểm soát sai lệch.",
                educationTitle: "Học vấn",
                university: "Trường Đại học Công Thương TP.HCM (HUIT)",
                degree: "Cử nhân Công nghệ Tài chính",
                degreeStatus: "Sinh viên Năm 3",
                timeEdu: "09/2023 – Hiện tại"
            },
            experience: {
                title: "Kinh nghiệm Làm việc",
                ctgroup: {
                    title: "Thực tập sinh Quan hệ Đầu tư",
                    company: "Technology Enterprise",
                    time: "11/2025 – Hiện tại",
                    bullets: [
                        "<strong>Analytical Rigor:</strong> Đảm bảo tính chính xác tuyệt đối của dữ liệu tài chính trong báo cáo đầu tư 50 trang; kiểm soát các biến số tài chính và thiết lập quy trình phát hiện sai lệch dữ liệu (Anomalies detection).",
                        "<strong>Financial Automation:</strong> Phát triển công cụ Python tập trung vào <strong>Data Integrity</strong> (Tính toàn vẹn dữ liệu) để tự động hóa trích xuất và chuẩn hóa dữ liệu tài chính, giảm 40% thời gian thủ công (Áp dụng cho đối soát AP/AR).",
                        "<strong>Due Diligence Support:</strong> Phân tích mô hình kinh doanh để xác định các biến số tài chính then chốt, phục vụ việc lập mô hình dự báo dòng tiền (Financial Modeling)."
                    ]
                }
            },
            projects: {
                title: "Dự án Tiêu biểu",
                project1: {
                    title: "Financial Control Automation Tool",
                    role: "Python / Khảo sát & Đối soát",
                    time: "09 – 10/2024",
                    desc: "Hệ thống tự động hóa xử lý dữ liệu tài chính thời gian thực bằng Python, tập trung vào <strong>Error Detection</strong> (Phát hiện lỗi) và <strong>Data Reconciliation</strong> (Đối soát dữ liệu).",
                    bullets: [
                        "Xây dựng tính năng <strong>xử lý dữ liệu thời gian thực (Real-time data)</strong>, ứng dụng cho việc theo dõi doanh thu phí Corporate Opt-out.",
                        "Quản lý và tối ưu hóa chi phí API gọi các mô hình LLM từ Google Cloud nhằm duy trì biên lợi nhuận gộp (Unit Economics)."
                    ]
                },
                project2: {
                    title: "Secure Asset Management DApp",
                    role: "Smart Contract & Bảo mật",
                    time: "09/2025 – Hiện tại",
                    desc: "Thiết kế giải pháp quản lý tài sản an toàn phi tập trung, định hướng minh bạch dữ liệu.",
                    bullets: [
                        "Phát triển logic <strong>Smart Contract & Reconciliation</strong> để tự động hóa quản lý các dòng tiền phân tán.",
                        "Đảm bảo luồng dữ liệu tài chính tuân thủ chuẩn mực bảo mật <strong>Singapore (PDPA)</strong>."
                    ]
                }
            },
            research: {
                title: "Nghiên cứu & Hoạt động Ngoại khóa",
                research1: {
                    title: "Tác động của Fintech đến Tài chính Toàn diện",
                    role: "Chuyên viên Phân tích",
                    time: "10/2023 – 04/2024",
                    desc: "Phân tích tác động của Fintech tại 20 tỉnh thành dẫn đầu GDP Việt Nam sử dụng Stata 17.",
                    highlights: [
                        "Xác định hệ sinh thái Fintech là yếu tố chính ảnh hưởng đến tài chính toàn diện — hệ số hồi quy GLS <strong>7.56</strong> (có ý nghĩa thống kê ở mức 1%).",
                        "Phân tích rào cản: đầu tư R&D dưới 0.5% GDP, hạ tầng phát triển không đồng đều, môi trường kinh doanh còn hạn chế.",
                        "Dự báo đến 2026, hai trung tâm kinh tế quốc tế (TP.HCM & Đà Nẵng) sẽ giảm 2/3 rào cản.",
                        "Kết quả nghiên cứu phù hợp với chính sách phát triển quốc gia."
                    ]
                },
                volunteer: {
                    title: "Xuân Tình Nguyện — Chuyến từ thiện",
                    role: "Cộng tác viên Sự kiện",
                    time: "02/2023",
                    highlights: [
                        "Tổ chức chuyến từ thiện tại Tây Ninh, phối hợp sự kiện lễ hội cho trẻ em tiểu học.",
                        "Đảm nhiệm vai trò MC và điều phối chương trình.",
                        "Trao tặng hơn <strong>200 phần quà</strong> và <strong>500 suất ăn</strong> cho các em.",
                        "Nhận <strong>90% phản hồi tích cực</strong> từ giáo viên và chính quyền địa phương."
                    ]
                }
            },
            certifications: {
                title: "Chứng chỉ Chuyên môn",
                seriesLabel: "Data-Driven Decision Making (Coursera)",
                certs: [
                    { name: "CFA Level 1 Candidate", date: "05/2026", id: "Đã đăng ký", link: "#" },
                    { name: "Foundation: Data, Data, Everywhere", date: "01/2025", id: "M20DV1BFH6MO", link: "https://www.coursera.org/account/accomplishments/verify/M20DV1BFH6MO" },
                    { name: "Ask Questions to Make Data-Driven Decisions", date: "03/2025", id: "BKTV0G1OB2W7", link: "https://www.coursera.org/account/accomplishments/verify/BKTV0G1OB2W7" }
                ]
            },
            skills: {
                title: "Kỹ năng & Ngôn ngữ",
                cat1: "Phân tích Tài chính & Dữ liệu",
                cat2: "Công nghệ & AI",
                cat3: "Năng lực Cốt lõi",
                langs: "Ngôn ngữ",
                langItems: [
                    { name: "Tiếng Việt", level: "Bản ngữ" },
                    { name: "Tiếng Anh", level: "Upper Intermediate" }
                ]
            }
        }
    };

    const t = content[language];

    const navItems = [
        { id: 'summary', label: t.nav.summary },
        { id: 'experience', label: t.nav.experience },
        { id: 'projects', label: t.nav.projects },
        { id: 'research', label: t.nav.research },
        { id: 'certifications', label: t.nav.certifications },
        { id: 'skills', label: t.nav.skills },
    ];

    const SectionHeader = ({ icon: Icon, title, id }) => (
        <h2 id={id} className="section-anchor flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 pt-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#FF6600] text-white">
                <Icon size={20} />
            </span>
            {title}
        </h2>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#FFF0E6]">
            {/* ═══════════════════ HEADER ═══════════════════ */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border-b-4 border-[#FF6600]">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                {t.header.name.toUpperCase()}
                            </h1>
                            <p className="text-[#FF6600] font-medium text-base md:text-lg mt-2 tracking-wide uppercase">
                                {t.header.role}
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4">
                            {/* Language Switcher */}
                            <div className="flex items-center bg-slate-700/60 rounded-lg p-1 border border-slate-600">
                                <button
                                    onClick={() => setLanguage('vi')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'vi' ? 'bg-[#FF6600] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                                >
                                    VN
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'en' ? 'bg-[#FF6600] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
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
            <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex gap-1 overflow-x-auto no-scrollbar py-1">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`px-4 py-3 text-xs font-semibold tracking-wide uppercase whitespace-nowrap rounded-md transition-all duration-200 ${activeSection === item.id
                                    ? 'text-[#FF6600] bg-[#FFF0E6]'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
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
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                    <span className="w-1 h-6 bg-[#FF6600] rounded-sm"></span>
                                    {t.summary.profileTitle}
                                </h2>
                                <p
                                    className="text-slate-600 leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: t.summary.profileText }}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-gradient-to-br from-[#FFF0E6] to-orange-100/60 rounded-xl border border-orange-200/60 shadow-sm">
                                    <div className="flex items-center gap-2 text-[#FF6600] font-bold mb-1.5">
                                        <ClipboardCheck size={18} />
                                        {t.summary.efficiency}
                                    </div>
                                    <p className="text-sm text-slate-700">{t.summary.efficiencyDesc}</p>
                                </div>
                                <div className="p-5 bg-gradient-to-br from-emerald-50 to-emerald-100/60 rounded-xl border border-emerald-200/60 shadow-sm">
                                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1.5">
                                        <Database size={18} />
                                        {t.summary.dataIntel}
                                    </div>
                                    <p className="text-sm text-slate-700">{t.summary.dataIntelDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Education */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                    <GraduationCap size={20} className="text-[#FF6600]" />
                                    {t.summary.educationTitle}
                                </h3>
                                <div>
                                    <h4 className="font-bold text-slate-800 leading-snug">{t.summary.university}</h4>
                                    <p className="text-sm text-slate-600 mt-1">{t.summary.degree}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{t.summary.degreeStatus} • {t.summary.timeEdu}</p>
                                    <div className="mt-3 inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-800 text-sm font-bold rounded-lg">
                                        GPA: 2.9 (7.4)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200" />

                <hr className="border-slate-200" />

                {/* ─── SECTION 2: EXPERIENCE ─── */}
                <section>
                    <SectionHeader icon={Briefcase} title={t.experience.title} id="experience" />

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                            <h3 className="font-bold text-lg text-slate-900">{t.experience.ctgroup.title}</h3>
                            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.experience.ctgroup.time}</span>
                        </div>
                        <p className="text-sm text-[#FF6600] font-medium mb-3">{t.experience.ctgroup.company}</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            {t.experience.ctgroup.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <ChevronRight size={14} className="text-[#FF6600] mt-1 flex-shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: b }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <hr className="border-slate-200" />

                {/* ─── SECTION 3: PROJECTS ─── */}
                <section>
                    <SectionHeader icon={Code} title={t.projects.title} id="projects" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3 gap-2">
                                <h3 className="font-bold text-lg text-slate-900">{t.projects.project1.title}</h3>
                                <span className="text-xs font-bold text-[#FF6600] bg-[#FFF0E6] px-2.5 py-1 rounded-lg whitespace-nowrap">{t.projects.project1.role}</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">{t.projects.project1.time}</p>
                            <p className="text-sm text-slate-600 mb-4 flex-grow">{t.projects.project1.desc}</p>
                            <div className="pt-3 border-t border-slate-100 mt-auto">
                                <ul className="text-sm text-slate-600 space-y-1.5">
                                    {t.projects.project1.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: b }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3 gap-2">
                                <h3 className="font-bold text-lg text-slate-900">{t.projects.project2.title}</h3>
                                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg whitespace-nowrap">{t.projects.project2.role}</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">{t.projects.project2.time}</p>
                            <p className="text-sm text-slate-600 mb-4 flex-grow">{t.projects.project2.desc}</p>
                            <div className="pt-3 border-t border-slate-100 mt-auto">
                                <ul className="text-sm text-slate-600 space-y-1.5">
                                    {t.projects.project2.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: b }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200" />

                {/* ─── SECTION 4: RESEARCH & EXTRA-CURRICULAR ─── */}
                <section>
                    <SectionHeader icon={BookOpen} title={t.research.title} id="research" />

                    <div className="space-y-6">
                        {/* Fintech Research */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="font-bold text-lg text-slate-900">{t.research.research1.title}</h3>
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.research.research1.time}</span>
                            </div>
                            <p className="text-sm text-[#FF6600] font-medium mb-3">{t.research.research1.role}</p>
                            <p className="text-sm text-slate-600 mb-4">{t.research.research1.desc}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                {t.research.research1.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-[#FF6600] mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: h }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Volunteer */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                                    <Heart size={18} className="text-rose-500" />
                                    {t.research.volunteer.title}
                                </h3>
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.research.volunteer.time}</span>
                            </div>
                            <p className="text-sm text-[#FF6600] font-medium mb-3">{t.research.volunteer.role}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                {t.research.volunteer.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-rose-400 mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: h }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200" />

                {/* ─── SECTION 5: CERTIFICATIONS ─── */}
                <section>
                    <SectionHeader icon={Award} title={t.certifications.title} id="certifications" />

                    <p className="text-sm text-slate-500 mb-5 -mt-3 ml-12">{t.certifications.seriesLabel} — Coursera</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.certifications.certs.map((cert, i) => (
                            <a
                                key={i}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md hover:border-orange-200 transition-all"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold text-sm flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-slate-800 text-sm group-hover:text-[#FF6600] transition-colors leading-snug">{cert.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1">{cert.date} • ID: {cert.id}</p>
                                </div>
                                <ExternalLink size={14} className="text-slate-300 group-hover:text-[#FF6600] transition-colors flex-shrink-0 mt-0.5" />
                            </a>
                        ))}
                    </div>
                </section>

                <hr className="border-slate-200" />

                {/* ─── SECTION 6: SKILLS & LANGUAGES ─── */}
                <section>
                    <SectionHeader icon={Cpu} title={t.skills.title} id="skills" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Financial */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{t.skills.cat1}</h3>
                            <div className="flex flex-wrap gap-2">
                                {['AP/AR Management', 'Cash Flow Forecasting', 'Unit Economics', 'LTV/CAC', 'SaaS Metrics', 'Reconciliation', 'Spreadsheets'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-[#FFF0E6] text-[#FF6600] text-xs font-medium rounded-full border border-orange-100">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tech */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{t.skills.cat2}</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python for Finance', 'SQL (Large Datasets)', 'Advanced Excel (Power Query)', 'API Integration', 'Stripe/QuickBooks', 'Data Normalization'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Soft + Language */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{t.skills.cat3}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Relentlessly Resourceful', 'Micro-transactions', 'Default Alive', 'Financial Engineering', 'GAAP Standards', 'Data Integrity', 'PDPA'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded border border-slate-200">{s}</span>
                                ))}
                            </div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">{t.skills.langs}</h4>
                            <div className="space-y-2">
                                {t.skills.langItems.map((lang, i) => (
                                    <div key={i} className={`rounded-lg py-2 px-3 flex justify-between items-center text-sm ${i === 0 ? 'bg-slate-100 text-slate-700' : 'bg-[#FFF0E6] border border-orange-100 text-[#FF6600]'}`}>
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
            <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-4">
                <div className="max-w-6xl mx-auto px-6 text-center text-sm">
                    <p className="mb-2 text-slate-300">{language === 'vi' ? 'Cảm ơn bạn đã đọc đến đây!' : 'Thank you for reading this far!'}</p>
                    <p className="text-slate-500">&copy; 2026 {t.header.name}</p>
                </div>
            </footer>
        </div>
    );
};

export default CV;
