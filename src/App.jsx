import React, { useState } from 'react';
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
    Globe
} from 'lucide-react';

const CV = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [language, setLanguage] = useState('vi'); // Default to Vietnamese

    // Content Dictionary
    const content = {
        en: {
            header: {
                role: "FINANCIAL TECHNOLOGY | INVESTOR RELATIONS SPECIALIST",
                location: "Ho Chi Minh City, Vietnam"
            },
            nav: {
                overview: "Executive Summary",
                experience: "Experience & Projects",
                skills: "Skills & Tech"
            },
            overview: {
                profileTitle: "Professional Profile",
                profileText: "Finance Technology student proficient in integrating advanced financial analysis with AI and automation to enhance operational efficiency. Successfully developed an automated data collection system that <span class='font-bold text-blue-700'>reduced manual processing time by 40%</span>. Experienced in producing detailed investment reports analyzing global UAV companies. Aspiring to advance expertise in Investor Relations (IR) and financial analysis leveraging Web3 technology and data-driven approaches.",
                highlightsTitle: "Key Highlights",
                efficiency: "Efficiency",
                efficiencyDesc: "Reduced manual data processing time by 40% via Python automation.",
                dataIntel: "Data Intelligence",
                dataIntelDesc: "Analyzed value chains of 8 global listed UAV companies using AI.",
                educationTitle: "Education",
                university: "Ho Chi Minh City University of Food Industry (HUIT)",
                degree: "Financial Technology (3rd Year Student)",
                certsTitle: "Certifications",
                googleCert: "Google Data Analytics"
            },
            experience: {
                title: "Professional Experience",
                job1: {
                    title: "Finance Intern, Investor Relations Dept",
                    time: "Oct 2025 - Present",
                    company: "CT GROUP JOINT STOCK COMPANY",
                    bullets: [
                        "Spearheaded <strong>AI-driven market intelligence</strong> leveraging Gemini Deep Research to deconstruct value chains of 12 global listed UAV companies.",
                        "Developed and optimized a <strong>50-page investment report structure</strong>, ensuring consistency and visualization of complex financial metrics.",
                        "Engineered <strong>Python scripts</strong> to automate data collection, reducing manual processing time by <strong>40%</strong>."
                    ]
                },
                projectsTitle: "Key Projects",
                project1: {
                    title: "Stock Market Data Automation",
                    role: "Python / Fullstack",
                    desc: "Developing tools for automating the collection and visualization of stock market data from CafeF using AI-assisted coding.",
                    bullets: [
                        "Deployed Ichimoku technical analysis model.",
                        "Delivered actionable trading evaluations based on real-time data."
                    ]
                },
                project2: {
                    title: "DApp for Rental Management",
                    role: "Blockchain / AI",
                    desc: "Engineered decentralized storage solutions leveraging IPFS to ensure secure and distributed data management.",
                    bullets: [
                        "Simulated API scenarios for digital signatures.",
                        "Overcame technical barriers during testing phase."
                    ]
                },
                researchTitle: "Scientific Research",
                research1: {
                    title: "Impact of Fintech on Financial Inclusion",
                    role: "Oct 2023 - Apr 2024 | Analyst",
                    desc: "Analyzed Fintech impact across Vietnam's top 20 GDP-leading provinces using Stata 17.",
                    quote: "\"Identified the Fintech ecosystem as the primary influence on financial inclusion with a statistically significant GLS regression coefficient of 7.56.\""
                }
            },
            skills: {
                title: "Technical Competencies",
                cat1: "Financial Analysis & Data",
                cat2: "Technology & AI",
                cat3: "Soft Skills & Languages",
                core: "Core Competencies",
                langs: "Languages",
                langItems: [
                    { name: "Vietnamese", level: "Native" },
                    { name: "English", level: "Upper Intermediate" }
                ],
                certVerify: "Coursera Certifications Verification",
                status: "Verified"
            }
        },
        vi: {
            header: {
                role: "CÔNG NGHỆ TÀI CHÍNH | CHUYÊN VIÊN QUAN HỆ NHÀ ĐẦU TƯ (IR)",
                location: "TP. Hồ Chí Minh, Việt Nam"
            },
            nav: {
                overview: "Tóm tắt & Hồ sơ",
                experience: "Kinh nghiệm & Dự án",
                skills: "Kỹ năng & Công nghệ"
            },
            overview: {
                profileTitle: "Hồ sơ Chuyên môn",
                profileText: "Sinh viên chuyên ngành Công nghệ Tài chính với năng lực tích hợp phân tích tài chính chuyên sâu cùng AI và tự động hóa nhằm tối ưu hiệu quả vận hành. Đã xây dựng thành công hệ thống thu thập dữ liệu tự động giúp <span class='font-bold text-blue-700'>giảm 40% thời gian xử lý thủ công</span>. Có kinh nghiệm thực tế trong việc lập báo cáo đầu tư và phân tích 12 doanh nghiệp UAV toàn cầu. Định hướng phát triển chuyên sâu trong lĩnh vực Quan hệ Nhà đầu tư (IR) và phân tích tài chính dựa trên nền tảng Web3 và dữ liệu lớn.",
                highlightsTitle: "Điểm nhấn Quan trọng",
                efficiency: "Hiệu suất Vận hành",
                efficiencyDesc: "Giảm 40% thời gian xử lý dữ liệu thủ công thông qua tự động hóa bằng Python.",
                dataIntel: "Trí tuệ Dữ liệu",
                dataIntelDesc: "Phân tích chuỗi giá trị của 8 công ty UAV niêm yết toàn cầu với công cụ AI.",
                educationTitle: "Học vấn",
                university: "Trường Đại học Công Thương TP.HCM (HUIT)",
                degree: "Công nghệ Tài chính (Sinh viên Năm 3)",
                certsTitle: "Chứng chỉ Chuyên môn",
                googleCert: "Phân tích Dữ liệu Google (Google Data Analytics)"
            },
            experience: {
                title: "Kinh nghiệm Làm việc",
                job1: {
                    title: "Thực tập sinh Tài chính, Ban Quan hệ Nhà đầu tư",
                    time: "10/2025 - Hiện tại",
                    company: "CÔNG TY CỔ PHẦN TẬP ĐOÀN CT GROUP",
                    bullets: [
                        "Tiên phong ứng dụng <strong>Trí tuệ thị trường (Market Intelligence)</strong> dựa trên AI (Gemini Deep Research) để giải mã chuỗi giá trị của 12 công ty UAV niêm yết toàn cầu.",
                        "Phát triển và tối ưu hóa cấu trúc <strong>báo cáo đầu tư dài 50 trang</strong>, đảm bảo tính nhất quán và trực quan hóa các chỉ số tài chính phức tạp.",
                        "Xây dựng các <strong>tập lệnh Python</strong> để tự động hóa việc thu thập dữ liệu báo cáo ngành, giúp tập trung nguồn lực vào phân tích định lượng."
                    ]
                },
                projectsTitle: "Dự án Tiêu biểu",
                project1: {
                    title: "Tự động hóa Dữ liệu Chứng khoán",
                    role: "Python / Fullstack",
                    desc: "Phát triển công cụ tự động hóa thu thập và trực quan hóa dữ liệu thị trường từ CafeF sử dụng kỹ thuật lập trình hỗ trợ bởi AI.",
                    bullets: [
                        "Triển khai mô hình phân tích kỹ thuật Ichimoku.",
                        "Cung cấp các đánh giá và khuyến nghị giao dịch dựa trên dữ liệu thị trường thực."
                    ]
                },
                project2: {
                    title: "DApp Quản lý Cho thuê (Blockchain)",
                    role: "Blockchain / AI",
                    desc: "Thiết kế giải pháp lưu trữ phi tập trung tận dụng IPFS để đảm bảo quản lý dữ liệu an toàn và phân tán.",
                    bullets: [
                        "Mô phỏng các kịch bản API cho chữ ký số và giao dịch ngân hàng.",
                        "Khắc phục các rào cản hạ tầng kỹ thuật trong giai đoạn thử nghiệm."
                    ]
                },
                researchTitle: "Nghiên cứu Khoa học",
                research1: {
                    title: "Tác động của Fintech đến Tài chính Toàn diện",
                    role: "10/2023 - 04/2024 | Chuyên viên Phân tích",
                    desc: "Phân tích tác động của Fintech tại 20 tỉnh thành dẫn đầu GDP Việt Nam sử dụng phần mềm Stata 17.",
                    quote: "\"Xác định hệ sinh thái Fintech là yếu tố chính ảnh hưởng đến tài chính toàn diện với hệ số hồi quy GLS có ý nghĩa thống kê là 7.56.\""
                }
            },
            skills: {
                title: "Năng lực Kỹ thuật",
                cat1: "Phân tích Tài chính & Dữ liệu",
                cat2: "Công nghệ & AI",
                cat3: "Kỹ năng Mềm & Ngôn ngữ",
                core: "Năng lực Cốt lõi",
                langs: "Ngôn ngữ",
                langItems: [
                    { name: "Tiếng Việt", level: "Bản ngữ" },
                    { name: "Tiếng Anh", level: "Upper Intermediate" }
                ],
                certVerify: "Xác thực Chứng chỉ Coursera",
                status: "Đã xác thực"
            }
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
            {/* Header */}
            <header className="bg-slate-900 text-white shadow-lg border-b-4 border-blue-600 relative">
                <div className="max-w-5xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">NGUYEN TRUNG HIEU</h1>
                            <p className="text-blue-300 font-medium text-lg mt-1 tracking-wide uppercase">
                                {t.header.role}
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                            {/* Language Switcher */}
                            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                                <button
                                    onClick={() => setLanguage('vi')}
                                    className={`px-3 py-1 text-sm font-bold rounded transition-colors ${language === 'vi' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    VN
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-3 py-1 text-sm font-bold rounded transition-colors ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    EN
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-slate-300 items-end">
                                <a href="mailto:trunghieuwane@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    trunghieuwane@gmail.com <Mail size={16} />
                                </a>
                                <a href="tel:+84812339125" className="flex items-center gap-2 hover:text-white transition-colors">
                                    (+84) 812-339-125 <Phone size={16} />
                                </a>
                                <div className="flex items-center gap-2">
                                    {t.header.location} <MapPin size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 text-sm font-semibold tracking-wide uppercase border-b-2 transition-all whitespace-nowrap ${activeTab === 'overview'
                                    ? 'border-blue-600 text-blue-800'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {t.nav.overview}
                        </button>
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`py-4 text-sm font-semibold tracking-wide uppercase border-b-2 transition-all whitespace-nowrap ${activeTab === 'experience'
                                    ? 'border-blue-600 text-blue-800'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {t.nav.experience}
                        </button>
                        <button
                            onClick={() => setActiveTab('skills')}
                            className={`py-4 text-sm font-semibold tracking-wide uppercase border-b-2 transition-all whitespace-nowrap ${activeTab === 'skills'
                                    ? 'border-blue-600 text-blue-800'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {t.nav.skills}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-5xl mx-auto px-6 py-10">

                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Left Column: Summary */}
                        <div className="md:col-span-2 space-y-6">
                            <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                    <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
                                    {t.overview.profileTitle}
                                </h2>
                                <p
                                    className="text-slate-600 leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: t.overview.profileText }}
                                />
                            </section>

                            <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                    <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
                                    {t.overview.highlightsTitle}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded border border-blue-100">
                                        <div className="flex items-center gap-2 text-blue-800 font-bold mb-1">
                                            <TrendingUp size={18} />
                                            {t.overview.efficiency}
                                        </div>
                                        <p className="text-sm text-slate-700">{t.overview.efficiencyDesc}</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded border border-green-100">
                                        <div className="flex items-center gap-2 text-green-800 font-bold mb-1">
                                            <Database size={18} />
                                            {t.overview.dataIntel}
                                        </div>
                                        <p className="text-sm text-slate-700">{t.overview.dataIntelDesc}</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Education & Certs */}
                        <div className="space-y-6">
                            <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                    <GraduationCap size={20} className="text-slate-500" />
                                    {t.overview.educationTitle}
                                </h2>
                                <div className="mb-4">
                                    <h3 className="font-bold text-slate-800">{t.overview.university}</h3>
                                    <p className="text-sm text-slate-500">{t.overview.degree}</p>
                                    <div className="mt-2 inline-block px-3 py-1 bg-slate-100 text-slate-800 text-sm font-bold rounded">
                                        GPA: 7.4/10
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                    <Award size={20} className="text-slate-500" />
                                    {t.overview.certsTitle}
                                </h2>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex flex-col border-l-2 border-green-500 pl-3">
                                        <span className="font-semibold text-slate-800">{t.overview.googleCert}</span>
                                        <span className="text-xs text-slate-500">Coursera (Series of 4 Certs)</span>
                                        <span className="text-xs text-slate-400">01/2025 - 04/2025</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}

                {/* EXPERIENCE & PROJECTS TAB */}
                {activeTab === 'experience' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Work Experience */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <Briefcase className="text-blue-600" /> {t.experience.title}
                            </h2>

                            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
                                {/* Job 1 */}
                                <div className="ml-6 relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                                            <h3 className="text-xl font-bold text-slate-900">{t.experience.job1.title}</h3>
                                            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{t.experience.job1.time}</span>
                                        </div>
                                        <div className="text-blue-700 font-medium mb-4">{t.experience.job1.company}</div>
                                        <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-blue-500">
                                            {t.experience.job1.bullets.map((bullet, idx) => (
                                                <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <Code className="text-blue-600" /> {t.experience.projectsTitle}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Project 1 */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-bold text-lg text-slate-900">{t.experience.project1.title}</h3>
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{t.experience.project1.role}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-4 flex-grow">
                                        {t.experience.project1.desc}
                                    </p>
                                    <div className="pt-4 border-t border-slate-100 mt-auto">
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            {t.experience.project1.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-center gap-2"><ChevronRight size={14} className="text-green-500" /> {bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Project 2 */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-bold text-lg text-slate-900">{t.experience.project2.title}</h3>
                                        <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">{t.experience.project2.role}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-4 flex-grow">
                                        {t.experience.project2.desc}
                                    </p>
                                    <div className="pt-4 border-t border-slate-100 mt-auto">
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            {t.experience.project2.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-center gap-2"><ChevronRight size={14} className="text-green-500" /> {bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Research */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-blue-600" /> {t.experience.researchTitle}
                            </h2>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{t.experience.research1.title}</h3>
                                <p className="text-slate-500 text-sm mb-3">{t.experience.research1.role}</p>
                                <p className="text-slate-600 mb-3 text-sm">
                                    {t.experience.research1.desc}
                                </p>
                                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                                    <p className="text-sm font-semibold text-slate-700 italic">
                                        {t.experience.research1.quote}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* SKILLS TAB */}
                {activeTab === 'skills' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <Cpu className="text-blue-600" /> {t.skills.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Skill Category 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{t.skills.cat1}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Financial Reporting', 'Market Intelligence', 'Data Cleaning', 'Data Visualization', 'SQL', 'Tableau', 'Spreadsheets', 'Stata 17'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Skill Category 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{t.skills.cat2}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Gemini AI', 'AI Strategy', 'Prompt Engineering', 'Fullstack Development', 'Blockchain/IPFS', 'Automation'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 md:col-span-2">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{t.skills.cat3}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">{t.skills.core}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Critical Thinking', 'Problem Solving', 'Project Management', 'Communication', 'Attention to Detail'].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded border border-slate-200">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">{t.skills.langs}</h4>
                                        <div className="flex flex-col gap-3">
                                            <div className="bg-slate-100 rounded-lg py-3 px-4 relative overflow-hidden flex justify-between items-center">
                                                <span className="relative z-10 text-sm font-bold text-slate-700">{t.skills.langItems[0].name}</span>
                                                <span className="relative z-10 text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.skills.langItems[0].level}</span>
                                            </div>
                                            <div className="bg-blue-50 rounded-lg py-3 px-4 relative overflow-hidden border border-blue-100 flex justify-between items-center">
                                                <div className="absolute left-0 top-0 h-full w-[75%] bg-blue-200 opacity-50"></div>
                                                <span className="relative z-10 text-sm font-bold text-blue-800">{t.skills.langItems[1].name}</span>
                                                <span className="relative z-10 text-xs font-semibold text-blue-700 uppercase tracking-wider">{t.skills.langItems[1].level}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Detailed View */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{t.skills.certVerify}</h3>
                            <div className="bg-slate-800 text-slate-300 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                                <div className="mb-2 text-green-400">$ verify_certs --user=nguyen_trung_hieu</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p>1. Ask Questions to Make Data-Driven Decisions</p>
                                        <p className="text-xs text-slate-500">ID: BKTV0G1OB2W7 | Mar 2025</p>
                                    </div>
                                    <div>
                                        <p>2. Prepare Data for Exploration</p>
                                        <p className="text-xs text-slate-500">ID: 1IM6N4SS8ZAW | Mar 2025</p>
                                    </div>
                                    <div>
                                        <p>3. Foundation: Data, Data, Everywhere</p>
                                        <p className="text-xs text-slate-500">ID: M20DV1BFH6MO | Jan 2025</p>
                                    </div>
                                    <div>
                                        <p>4. Process Data from Dirty to Clean</p>
                                        <p className="text-xs text-slate-500">ID: V1D6DCTX4B6G | Apr 2025</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-green-400">Status: {t.skills.status} <span className="animate-pulse">_</span></div>
                            </div>
                        </div>
                    </div>
                )}

            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-12">
                <div className="max-w-5xl mx-auto px-6 text-center text-sm">
                    <p className="mb-2">&copy; 2026 Nguyen Trung Hieu. All rights reserved.</p>
                    <p>Designed with Financial Clarity & Data Precision.</p>
                </div>
            </footer>
        </div>
    );
};

export default CV;
