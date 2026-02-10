import React, { useState, useEffect } from 'react';
import {
    Briefcase,
    GraduationCap,
    Code,
    TrendingUp,
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
                role: "FINANCIAL TECHNOLOGY | INVESTOR RELATIONS SPECIALIST",
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
                profileTitle: "Professional Profile",
                profileText: "Finance Technology student proficient in integrating advanced financial analysis with AI and automation to enhance operational efficiency. Successfully developed an automated data collection system that <strong>reduced manual processing time by 40%</strong>. Experienced in producing detailed investment reports analyzing 8 global UAV enterprises. Aspiring to advance expertise in Investor Relations (IR) and financial analysis leveraging Web3 technology and data-driven approaches.",
                highlightsTitle: "Key Highlights",
                efficiency: "Efficiency",
                efficiencyDesc: "Reduced manual data processing time by 40% via Python automation.",
                dataIntel: "Data Intelligence",
                dataIntelDesc: "Analyzed value chains of 8 global UAV enterprises using AI.",
                educationTitle: "Education",
                university: "Ho Chi Minh City University of Food Industry (HUIT)",
                degree: "B.Sc. Financial Technology",
                degreeStatus: "3rd Year Student",
                timeEdu: "Sep 2023 – Present"
            },
            experience: {
                title: "Work Experience",
                job1: {
                    title: "Finance Intern — Investor Relations Dept.",
                    time: "Oct 2025 – Present (Part-time)",
                    company: "CT GROUP JOINT STOCK COMPANY",
                    bullets: [
                        "Spearheaded <strong>AI-driven market intelligence</strong> leveraging Gemini Deep Research to deconstruct value chains and business models of 8 global UAV enterprises.",
                        "Developed and optimized a <strong>50-page investment report structure</strong> utilizing AI to integrate multi-source data, ensuring consistency and clear visualization of complex financial metrics.",
                        "Engineered <strong>Python scripts</strong> to automate data collection and processing, reducing manual processing time by <strong>40%</strong> and enhancing focus on quantitative analysis."
                    ]
                }
            },
            projects: {
                title: "Key Projects",
                project1: {
                    title: "Stock Market Data Automation",
                    role: "Python / Fullstack",
                    time: "Sep – Oct 2024",
                    desc: "Developing tools for automating the collection and visualization of stock market data from CafeF using AI-assisted coding.",
                    bullets: [
                        "Deployed Ichimoku technical analysis model.",
                        "Delivered actionable trading evaluations based on real market data."
                    ]
                },
                project2: {
                    title: "DApp for Rental Management",
                    role: "Blockchain / AI",
                    time: "Sep 2025 – Present",
                    desc: "Engineered decentralized storage solutions leveraging IPFS to ensure secure and distributed data management.",
                    bullets: [
                        "Applied AI-driven system thinking to simulate API scenarios for digital signatures and banking transactions.",
                        "Overcame technical infrastructure barriers during the testing phase."
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
                seriesLabel: "Google Data Analytics Professional Certificate Series",
                certs: [
                    { name: "Foundation: Data, Data, Everywhere", date: "Jan 2025", id: "M20DV1BFH6MO", link: "https://www.coursera.org/account/accomplishments/verify/M20DV1BFH6MO" },
                    { name: "Ask Questions to Make Data-Driven Decisions", date: "Mar 2025", id: "BKTV0G1OB2W7", link: "https://www.coursera.org/account/accomplishments/verify/BKTV0G1OB2W7" },
                    { name: "Prepare Data for Exploration", date: "Mar 2025", id: "1IM6N4SS8ZAW", link: "https://www.coursera.org/account/accomplishments/verify/1IM6N4SS8ZAW" },
                    { name: "Process Data from Dirty to Clean", date: "Apr 2025", id: "V1D6DCTX4B6G", link: "https://www.coursera.org/account/accomplishments/verify/V1D6DCTX4B6G" }
                ]
            },
            skills: {
                title: "Skills & Languages",
                cat1: "Financial Analysis & Data",
                cat2: "Technology & AI",
                cat3: "Core Competencies",
                langs: "Languages",
                langItems: [
                    { name: "Vietnamese", level: "Native" },
                    { name: "English", level: "Upper Intermediate" }
                ]
            }
        },
        vi: {
            header: {
                role: "CÔNG NGHỆ TÀI CHÍNH | CHUYÊN VIÊN QUAN HỆ NHÀ ĐẦU TƯ (IR)",
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
                profileTitle: "Hồ sơ Chuyên môn",
                profileText: "Sinh viên chuyên ngành Công nghệ Tài chính với năng lực tích hợp phân tích tài chính chuyên sâu cùng AI và tự động hóa nhằm tối ưu hiệu quả vận hành. Đã xây dựng thành công hệ thống thu thập dữ liệu tự động giúp <strong>giảm 40% thời gian xử lý thủ công</strong>. Có kinh nghiệm thực tế trong việc lập báo cáo đầu tư và phân tích 8 doanh nghiệp UAV toàn cầu. Định hướng phát triển chuyên sâu trong lĩnh vực Quan hệ Nhà đầu tư (IR) và phân tích tài chính dựa trên nền tảng Web3 và dữ liệu lớn.",
                highlightsTitle: "Điểm nhấn Quan trọng",
                efficiency: "Hiệu suất Vận hành",
                efficiencyDesc: "Giảm 40% thời gian xử lý dữ liệu thủ công thông qua tự động hóa bằng Python.",
                dataIntel: "Trí tuệ Dữ liệu",
                dataIntelDesc: "Phân tích chuỗi giá trị của 8 doanh nghiệp UAV toàn cầu với công cụ AI.",
                educationTitle: "Học vấn",
                university: "Trường Đại học Công Thương TP.HCM (HUIT)",
                degree: "Cử nhân Công nghệ Tài chính",
                degreeStatus: "Sinh viên Năm 3",
                timeEdu: "09/2023 – Hiện tại"
            },
            experience: {
                title: "Kinh nghiệm Làm việc",
                job1: {
                    title: "Thực tập sinh Tài chính — Ban Quan hệ Nhà đầu tư",
                    time: "10/2025 – Hiện tại (Bán thời gian)",
                    company: "CÔNG TY CỔ PHẦN TẬP ĐOÀN CT GROUP",
                    bullets: [
                        "Tiên phong ứng dụng <strong>Trí tuệ thị trường (Market Intelligence)</strong> dựa trên AI (Gemini Deep Research) để giải mã chuỗi giá trị và mô hình kinh doanh của 8 doanh nghiệp UAV toàn cầu.",
                        "Phát triển và tối ưu hóa cấu trúc <strong>báo cáo đầu tư dài 50 trang</strong>, đảm bảo tính nhất quán và trực quan hóa các chỉ số tài chính phức tạp.",
                        "Xây dựng các <strong>tập lệnh Python</strong> để tự động hóa việc thu thập và xử lý dữ liệu báo cáo ngành, giảm <strong>40%</strong> thời gian xử lý thủ công."
                    ]
                }
            },
            projects: {
                title: "Dự án Tiêu biểu",
                project1: {
                    title: "Tự động hóa Dữ liệu Chứng khoán",
                    role: "Python / Fullstack",
                    time: "09 – 10/2024",
                    desc: "Phát triển công cụ tự động hóa thu thập và trực quan hóa dữ liệu thị trường từ CafeF sử dụng kỹ thuật lập trình hỗ trợ bởi AI.",
                    bullets: [
                        "Triển khai mô hình phân tích kỹ thuật Ichimoku.",
                        "Cung cấp các đánh giá và khuyến nghị giao dịch dựa trên dữ liệu thị trường thực."
                    ]
                },
                project2: {
                    title: "DApp Quản lý Cho thuê (Blockchain)",
                    role: "Blockchain / AI",
                    time: "09/2025 – Hiện tại",
                    desc: "Thiết kế giải pháp lưu trữ phi tập trung tận dụng IPFS để đảm bảo quản lý dữ liệu an toàn và phân tán.",
                    bullets: [
                        "Mô phỏng các kịch bản API cho chữ ký số và giao dịch ngân hàng bằng AI.",
                        "Khắc phục các rào cản hạ tầng kỹ thuật trong giai đoạn thử nghiệm."
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
                seriesLabel: "Chuỗi Chứng chỉ Google Data Analytics",
                certs: [
                    { name: "Foundation: Data, Data, Everywhere", date: "01/2025", id: "M20DV1BFH6MO", link: "https://www.coursera.org/account/accomplishments/verify/M20DV1BFH6MO" },
                    { name: "Ask Questions to Make Data-Driven Decisions", date: "03/2025", id: "BKTV0G1OB2W7", link: "https://www.coursera.org/account/accomplishments/verify/BKTV0G1OB2W7" },
                    { name: "Prepare Data for Exploration", date: "03/2025", id: "1IM6N4SS8ZAW", link: "https://www.coursera.org/account/accomplishments/verify/1IM6N4SS8ZAW" },
                    { name: "Process Data from Dirty to Clean", date: "04/2025", id: "V1D6DCTX4B6G", link: "https://www.coursera.org/account/accomplishments/verify/V1D6DCTX4B6G" }
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
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white">
                <Icon size={20} />
            </span>
            {title}
        </h2>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
            {/* ═══════════════════ HEADER ═══════════════════ */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border-b-4 border-blue-600">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                {t.header.name.toUpperCase()}
                            </h1>
                            <p className="text-blue-300 font-medium text-base md:text-lg mt-2 tracking-wide uppercase">
                                {t.header.role}
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4">
                            {/* Language Switcher */}
                            <div className="flex items-center bg-slate-700/60 rounded-lg p-1 border border-slate-600">
                                <button
                                    onClick={() => setLanguage('vi')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'vi' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                                >
                                    VN
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded transition-all duration-200 ${language === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
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
                                    ? 'text-blue-700 bg-blue-50'
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
                                    <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
                                    {t.summary.profileTitle}
                                </h2>
                                <p
                                    className="text-slate-600 leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: t.summary.profileText }}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-xl border border-blue-200/60 shadow-sm">
                                    <div className="flex items-center gap-2 text-blue-800 font-bold mb-1.5">
                                        <TrendingUp size={18} />
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
                                    <GraduationCap size={20} className="text-blue-600" />
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

                {/* ─── SECTION 2: WORK EXPERIENCE ─── */}
                <section>
                    <SectionHeader icon={Briefcase} title={t.experience.title} id="experience" />

                    <div className="relative border-l-2 border-blue-200 ml-4 pl-8 pb-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="text-lg font-bold text-slate-900">{t.experience.job1.title}</h3>
                                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-1 sm:mt-0">{t.experience.job1.time}</span>
                            </div>
                            <div className="text-blue-700 font-medium text-sm mb-4">{t.experience.job1.company}</div>
                            <ul className="space-y-2.5 text-slate-600 text-sm">
                                {t.experience.job1.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: b }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg whitespace-nowrap">{t.projects.project1.role}</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">{t.projects.project1.time}</p>
                            <p className="text-sm text-slate-600 mb-4 flex-grow">{t.projects.project1.desc}</p>
                            <div className="pt-3 border-t border-slate-100 mt-auto">
                                <ul className="text-sm text-slate-600 space-y-1.5">
                                    {t.projects.project1.bullets.map((b, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-emerald-500" /> {b}
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
                                        <li key={i} className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-emerald-500" /> {b}
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
                            <p className="text-sm text-blue-700 font-medium mb-3">{t.research.research1.role}</p>
                            <p className="text-sm text-slate-600 mb-4">{t.research.research1.desc}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                {t.research.research1.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
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
                            <p className="text-sm text-blue-700 font-medium mb-3">{t.research.volunteer.role}</p>
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
                                className="group bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md hover:border-blue-200 transition-all"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold text-sm flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-snug">{cert.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1">{cert.date} • ID: {cert.id}</p>
                                </div>
                                <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
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
                                {['Financial Reporting', 'Market Intelligence', 'Data Cleaning', 'Data Visualization', 'SQL', 'Tableau', 'Spreadsheets', 'Stata 17'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tech */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{t.skills.cat2}</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'Gemini AI', 'AI Strategy', 'Prompt Engineering', 'Fullstack Development', 'Blockchain/IPFS', 'Automation'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100">{s}</span>
                                ))}
                            </div>
                        </div>

                        {/* Soft + Language */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{t.skills.cat3}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Critical Thinking', 'Problem Solving', 'Project Management', 'Communication', 'Attention to Detail'].map(s => (
                                    <span key={s} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded border border-slate-200">{s}</span>
                                ))}
                            </div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">{t.skills.langs}</h4>
                            <div className="space-y-2">
                                {t.skills.langItems.map((lang, i) => (
                                    <div key={i} className={`rounded-lg py-2 px-3 flex justify-between items-center text-sm ${i === 0 ? 'bg-slate-100 text-slate-700' : 'bg-blue-50 border border-blue-100 text-blue-800'}`}>
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
