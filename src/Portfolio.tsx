import { useState } from 'react'
import { 
    BookOpen, 
    Code2, 
    GraduationCap, 
    Github, 
    Linkedin, 
    FileText, 
    Mail, 
    Layers, 
    Smartphone, 
    Server,
    ExternalLink,
    ChevronLeft,
    Languages
} from 'lucide-react'

export default function Portfolio() {
    const [lang, setLang] = useState<'fa' | 'en'>('fa')
    const toggleLang = () => setLang(prev => (prev === 'fa' ? 'en' : 'fa'))

    const dict = {
        fa: {
            dir: 'rtl',
            font: 'font-sans',
            nav: { about: 'درباره من', skills: 'تخصص‌ها', articles: 'مقاله‌ها', contact: 'ارتباط' },
            hero: {
                badge: 'آموزگار ابتدایی و توسعه‌دهنده نرم‌افزار',
                name: 'امیرحسین مرادی زاده',
                bio: 'من یک آموزگار ابتدایی هستم که به دنیای برنامه‌نویسی و تکنولوژی‌های آموزشی (EdTech) عشق می‌ورزم. تلاش می‌کنم با ترکیب تجربه حضور در کلاس درس و مهارت‌های توسعه وب و بک‌اند، ابزارهای نوینی برای یادگیری بسازم. از توسعه سرویس‌های سمت سرور تا طراحی رابط‌های کاربری جذاب، هدف من خلق ارزش در آموزش است.',
                resumeBtn: 'دانلود رزومه',
                githubBtn: 'گیت‌هاب',
                linkedinBtn: 'لینکدین'
            },
            sections: {
                skills: 'مهارت‌ها و تخصص‌های من',
                articles: 'مقاله‌ها و پژوهش‌ها',
                contact: 'راه‌های ارتباطی'
            },
            skills: [
                {
                    title: 'توسعه بک‌اند (Backend)',
                    desc: 'طراحی معماری سرور، پیاده‌سازی APIهای پرسرعت با FastAPI و Node.js همراه با مدیریت پایگاه‌داده.',
                    icon: <Server className="w-6 h-6 text-indigo-400" />
                },
                {
                    title: 'توسعه اندروید (Android)',
                    desc: 'برنامه‌نویسی و توسعه اپلیکیشن‌های بومی و روان موبایل با تمرکز بر تجربه کاربری و معماری استاندارد.',
                    icon: <Smartphone className="w-6 h-6 text-indigo-400" />
                },
                {
                    title: 'تکنولوژی آموزشی (EdTech)',
                    desc: 'ترکیب اصول پداگوژی و فناوری برای ساخت نرم‌افزارهای دستیار معلم و پلتفرم‌های تعاملی دانش‌آموزان.',
                    icon: <GraduationCap className="w-6 h-6 text-indigo-400" />
                }
            ],
            articles: [
                {
                    title: 'تاثیر هوش مصنوعی مولد بر یادگیری در تکنولوژی آموزشی',
                    date: 'شهریور ۱۴۰۵',
                    readTime: 'مقاله پژوهشی (APA)',
                    tag: 'EdTech'
                },
                {
                    title: 'چرا معلمان باید با تفکر الگوریتمی آشنا شوند؟',
                    date: 'به زودی',
                    readTime: '۵ دقیقه مطالعه',
                    tag: 'توسعه فردی'
                }
            ]
        },
        en: {
            dir: 'ltr',
            font: 'font-mono',
            nav: { about: 'About', skills: 'Skills', articles: 'Articles', contact: 'Contact' },
            hero: {
                badge: 'Primary Teacher & Software Developer',
                name: 'Amirhossein Moradizadeh',
                bio: 'I am a 6th-grade teacher (Shahid Salahkar School) with a deep passion for programming and Educational Technology (EdTech). By combining my classroom experience with web and backend development skills, I strive to build innovative learning tools. From server-side architectures to engaging UIs, my goal is to create value in education.',
                resumeBtn: 'Download CV',
                githubBtn: 'GitHub',
                linkedinBtn: 'LinkedIn'
            },
            sections: {
                skills: 'My Expertise',
                articles: 'Articles & Research',
                contact: 'Get In Touch'
            },
            skills: [
                {
                    title: 'Backend Development',
                    desc: 'Server architecture and high-speed API implementation using FastAPI and Node.js with efficient database management.',
                    icon: <Server className="w-6 h-6 text-indigo-400" />
                },
                {
                    title: 'Android Development',
                    desc: 'Native mobile application development focusing on smooth user experience and clean software architecture.',
                    icon: <Smartphone className="w-6 h-6 text-indigo-400" />
                },
                {
                    title: 'Educational Tech (EdTech)',
                    desc: 'Bridging pedagogy and technology to build teacher-assistant software and interactive student platforms.',
                    icon: <GraduationCap className="w-6 h-6 text-indigo-400" />
                }
            ],
            articles: [
                {
                    title: 'Impact of Generative AI on Learning in EdTech',
                    date: 'Sept 2026',
                    readTime: 'Academic Paper (APA)',
                    tag: 'EdTech'
                },
                {
                    title: 'Why Teachers Should Learn Algorithmic Thinking?',
                    date: 'Coming Soon',
                    readTime: '5 min read',
                    tag: 'Self-Dev'
                }
            ]
        }
    }

    const t = dict[lang]

    return (
        <div dir={t.dir} className={`min-h-screen bg-slate-950 text-slate-200 ${t.font} selection:bg-indigo-500/30`}>
            {/* Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg">
                        <BookOpen className="w-5 h-5" />
                        <span>EduDev</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <nav className="hidden md:flex gap-6 text-slate-400">
                            <a href="#skills" className="hover:text-indigo-300 transition-colors">{t.nav.skills}</a>
                            <a href="#articles" className="hover:text-indigo-300 transition-colors">{t.nav.articles}</a>
                            <a href="#contact" className="hover:text-indigo-300 transition-colors">{t.nav.contact}</a>
                        </nav>
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-all cursor-pointer text-slate-300"
                        >
                            <Languages className="w-4 h-4" />
                            <span className="font-bold">{lang === 'fa' ? 'EN' : 'FA'}</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
                {/* Hero Section with Photo */}
                <section className="flex flex-col-reverse md:flex-row items-center gap-12 justify-between">
                    <div className="flex-1 space-y-6 text-center md:text-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                            <Code2 className="w-4 h-4" />
                            <span>{t.hero.badge}</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            {t.hero.name}
                        </h1>
                        
                        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl text-justify md:text-start">
                            {t.hero.bio}
                        </p>

                        {/* Social & Resume Links */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20">
                                <FileText className="w-4 h-4" />
                                <span>{t.hero.resumeBtn}</span>
                            </a>
                            <a href="https://github.com/Priest1400" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-all border border-slate-700">
                                <Github className="w-4 h-4" />
                                <span>{t.hero.githubBtn}</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-all border border-slate-700">
                                <Linkedin className="w-4 h-4" />
                                <span>{t.hero.linkedinBtn}</span>
                            </a>
                        </div>
                    </div>

                    {/* Profile Photo Area */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 flex items-center justify-center shadow-2xl">
                            {/* جایگذاری عکس شما: */}
                            {/* <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            
                            {/* آیکون موقت تا زمانی که عکس بگذارید */}
                            <Layers className="w-16 h-16 text-slate-700" />
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise */}
                <section id="skills" className="space-y-8">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                        {t.sections.skills}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.skills.map((skill, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-200 mb-3">{skill.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Articles Section */}
                <section id="articles" className="space-y-8">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                        {t.sections.articles}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.articles.map((article, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-medium">
                                            {article.tag}
                                        </span>
                                        <span className="text-xs text-slate-500 font-mono">{article.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                                    <span>{article.readTime}</span>
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 border-t border-slate-800 flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{t.sections.contact}</h2>
                    <p className="text-slate-400 max-w-md">
                        {lang === 'fa' 
                            ? 'برای همکاری در پروژه‌های توسعه نرم‌افزار، تکنولوژی آموزشی یا ارتباط دوستانه، خوشحال میشم با من در تماس باشید.'
                            : 'Feel free to reach out for software development projects, EdTech collaborations, or just a friendly chat.'}
                    </p>
                    <a href="mailto:amirhosseinmoradizadeh456@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/25 mt-4">
                        <Mail className="w-5 h-5" />
                        <span>amirhosseinmoradizadeh456@gmail.com</span>
                    </a>
                </section>
            </main>

            <footer className="py-8 text-center text-sm text-slate-600 border-t border-slate-900 bg-slate-950">
                <p>© 2026 Amirhossein Moradizadeh. Combining Education & Code.</p>
            </footer>
        </div>
    )
}