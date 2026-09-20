import { useState } from 'react'
import { Terminal, Code2, Database, Smartphone, Languages, Mail, Cpu, Server, CheckCircle2 } from 'lucide-react'

export default function Portfolio() {
    const [lang, setLang] = useState<'fa' | 'en'>('fa')

    const toggleLang = () => setLang(prev => (prev === 'fa' ? 'en' : 'fa'))

    const dict = {
        fa: {
            dir: 'rtl',
            font: 'font-sans',
            nav: { stack: 'مهارت های فنی', architecture: 'معماری و تخصص', contact: 'ارتباط' },
            terminalTitle: 'bash - amirhossein@dev-node: ~',
            hero: {
                role: 'توسعه‌دهنده نرم‌افزار | Backend & Android',
                name: 'امیرحسین مرادی زاده',
                dobKey: 'تاریخ تولد',
                dobVal: '۱۳ خرداد ۱۳۸۲ (June 3, 2003)',
                bio: 'توسعه‌دهنده نرم‌افزار با تسلط بر زبان‌های پایتون (Python)، جاوااسکریپت (JavaScript) و جاوا (Java). متمرکز بر طراحی معماری‌های مقیاس‌پذیر سمت سرور با فریم‌ورک‌هایی نظیر FastAPI و Node.js، و همچنین توسعه اپلیکیشن‌های بومی و روان اندروید. علاقه‌مند به حل چالش‌های منطقی پیچیده و پژوهش در حوزه فناوری.',
                emailBtn: 'ارسال ایمیل (Initialize Contact)',
                status: 'آماده همکاری در پروژه‌های مقیاس‌پذیر و چالش‌برانگیز'
            },
            sections: {
                stack: 'tech_stack.json',
                architecture: 'system_architecture.log',
                contact: 'initiate_handshake()'
            },
            categories: {
                backend: 'سرویس‌های سمت سرور',
                mobile: 'توسعه اندروید',
                tools: 'زبان‌ها و زیرساخت'
            },
            archPoints: [
                {
                    title: 'توسعه بک‌اند (Python / JavaScript)',
                    desc: 'ساخت و توسعه اندپوینت‌های پرسرعت و غیرهمزمان (Async) با استفاده از فریم‌ورک‌های FastAPI در پایتون و Node.js در جاوااسکریپت، همراه با مستندسازی دقیق OpenAPI.'
                },
                {
                    title: 'طراحی پایگاه داده و منطق سرور',
                    desc: 'مدل‌سازی بهینه پایگاه‌های داده، مدیریت جریان اطلاعات (Data Flow)، بهینه‌سازی کوئری‌ها و پیاده‌سازی سرویس‌های توزیع‌شده.'
                },
                {
                    title: 'توسعه بومی اندروید (Java)',
                    desc: 'برنامه‌نویسی و توسعه اپلیکیشن‌های اندرویدی با زبان جاوا (Java)، تمرکز بر معماری استاندارد نرم‌افزار، مدیریت Stateها و ارتباط امن با API.'
                }
            ]
        },
        en: {
            dir: 'ltr',
            font: 'font-mono',
            nav: { stack: 'Tech Stack', architecture: 'Architecture', contact: 'Contact' },
            terminalTitle: 'bash - amirhossein@dev-node: ~',
            hero: {
                role: 'Software Engineer | Backend & Android',
                name: 'Amirhossein Moradizadeh',
                dobKey: 'Date of Birth',
                dobVal: 'June 3, 2003',
                bio: 'Software developer proficient in Python, JavaScript, and Java. Dedicated to building high-concurrency server-side architectures using FastAPI and Node.js, alongside developing native Android applications. Passionate about solving complex logical challenges and technology research.',
                emailBtn: 'Initialize Mail()',
                status: 'Available for high-scale software engineering roles'
            },
            sections: {
                stack: 'tech_stack.json',
                architecture: 'system_architecture.log',
                contact: 'initiate_handshake()'
            },
            categories: {
                backend: 'Server-Side Engineering',
                mobile: 'Android Development',
                tools: 'Languages & Infra'
            },
            archPoints: [
                {
                    title: 'Backend Engineering (Python / JS)',
                    desc: 'Building high-performance asynchronous API endpoints using FastAPI (Python) and Node.js (JavaScript) with automated documentation.'
                },
                {
                    title: 'Database & Server Logic',
                    desc: 'Architecting optimized database schemas, managing data flows, query optimization, and implementing distributed background tasks.'
                },
                {
                    title: 'Native Android Development (Java)',
                    desc: 'Developing robust Android applications using Java, emphasizing clean architecture, reactive state management, and secure API integration.'
                }
            ]
        }
    }

    const t = dict[lang]

    return (
        <div dir={t.dir} className={`min-h-screen bg-[#0a0f0d] text-emerald-100 ${t.font} selection:bg-emerald-500 selection:text-black`}>
            {/* Top Console Bar */}
            <header className="border-b border-emerald-950 bg-[#060a08]/90 backdrop-blur sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-emerald-400 font-semibold text-sm tracking-wider">
                        <Terminal className="w-4 h-4" />
                        <span>sys_id: amirhossein-dev</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                        <a href="#stack" className="text-emerald-500/80 hover:text-emerald-400 transition-colors hidden sm:inline tracking-wider">
                            ./{t.nav.stack}
                        </a>
                        <a href="#architecture" className="text-emerald-500/80 hover:text-emerald-400 transition-colors hidden sm:inline tracking-wider">
                            ./{t.nav.architecture}
                        </a>
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 hover:bg-emerald-900/60 transition-all cursor-pointer"
                        >
                            <Languages className="w-3.5 h-3.5" />
                            <span className="tracking-widest font-bold">{lang === 'fa' ? 'EN' : 'FA'}</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                {/* Terminal Window Hero */}
                <section className="rounded-xl border border-emerald-900/70 bg-[#0d1410] shadow-2xl shadow-emerald-950/50 overflow-hidden">
                    <div className="bg-[#080d0a] px-4 py-3 border-b border-emerald-950 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-red-700/50"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-700/50"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-700/50"></div>
                        </div>
                        <span className="text-xs font-mono text-emerald-600/80 tracking-widest">{t.terminalTitle}</span>
                        <div className="w-12"></div>
                    </div>

                    <div className="p-6 md:p-10 space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-3 py-1.5 rounded">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>{t.hero.role}</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                                {t.hero.name}
                            </h1>
                            <p className="text-sm font-mono text-emerald-500/80">
                                <span className="text-emerald-700">&gt;</span> {t.hero.dobKey}: <span className="text-emerald-300">{t.hero.dobVal}</span>
                            </p>
                        </div>

                        <p className="text-base md:text-lg text-emerald-100/90 leading-loose max-w-3xl text-justify">
                            {t.hero.bio}
                        </p>

                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <a
                                href="mailto:amirhosseinmoradizadeh456@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20"
                            >
                                <Mail className="w-4 h-4" />
                                <span>{t.hero.emailBtn}</span>
                            </a>
                        </div>

                        <div className="pt-2 text-sm text-emerald-600 flex items-center gap-2 font-mono">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>{t.hero.status}</span>
                        </div>
                    </div>
                </section>

                {/* Tech Stack JSON Viewer */}
                <section id="stack" className="space-y-6">
                    <div className="flex items-center gap-2 font-mono text-emerald-400 text-xl font-bold">
                        <Database className="w-6 h-6" />
                        <h2>{t.sections.stack}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Languages & Core */}
                        <div className="p-6 rounded-xl border border-emerald-950 bg-[#0d1410] hover:border-emerald-700 transition-colors font-mono shadow-md">
                            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold mb-4 pb-3 border-b border-emerald-900/50">
                                <Code2 className="w-4 h-4 text-emerald-400" />
                                <h3 className="tracking-wide">{t.categories.tools}</h3>
                            </div>
                            <ul className="space-y-2.5 text-xs text-emerald-100/90">
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">Python</span>
                                    <span className="text-emerald-500 text-[10px]">Advanced</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">JavaScript</span>
                                    <span className="text-emerald-500 text-[10px]">Advanced</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">Java</span>
                                    <span className="text-emerald-500 text-[10px]">Core / SDK</span>
                                </li>
                            </ul>
                        </div>

                        {/* Backend Column */}
                        <div className="p-6 rounded-xl border border-emerald-950 bg-[#0d1410] hover:border-emerald-700 transition-colors font-mono shadow-md">
                            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold mb-4 pb-3 border-b border-emerald-900/50">
                                <Server className="w-4 h-4 text-emerald-400" />
                                <h3 className="tracking-wide">{t.categories.backend}</h3>
                            </div>
                            <ul className="space-y-2.5 text-xs text-emerald-100/90">
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">FastAPI</span>
                                    <span className="text-emerald-500 text-[10px]">Async APIs</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">Node.js</span>
                                    <span className="text-emerald-500 text-[10px]">Server Logic</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">RESTful</span>
                                    <span className="text-emerald-500 text-[10px]">Architecture</span>
                                </li>
                            </ul>
                        </div>

                        {/* Android Column */}
                        <div className="p-6 rounded-xl border border-emerald-950 bg-[#0d1410] hover:border-emerald-700 transition-colors font-mono shadow-md">
                            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold mb-4 pb-3 border-b border-emerald-900/50">
                                <Smartphone className="w-4 h-4 text-emerald-400" />
                                <h3 className="tracking-wide">{t.categories.mobile}</h3>
                            </div>
                            <ul className="space-y-2.5 text-xs text-emerald-100/90">
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">Android SDK</span>
                                    <span className="text-emerald-500 text-[10px]">Java Native</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">MVVM</span>
                                    <span className="text-emerald-500 text-[10px]">Clean Arch</span>
                                </li>
                                <li className="flex items-center justify-between bg-[#060a08] px-3 py-2.5 rounded border border-emerald-900/40">
                                    <span className="font-bold">API Sync</span>
                                    <span className="text-emerald-500 text-[10px]">Networking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* System Architecture Section */}
                <section id="architecture" className="space-y-6">
                    <div className="flex items-center gap-2 font-mono text-emerald-400 text-xl font-bold">
                        <Cpu className="w-6 h-6" />
                        <h2>{t.sections.architecture}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.archPoints.map((point, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-xl border border-emerald-950 bg-[#0d1410] hover:border-emerald-700 transition-all flex flex-col justify-between shadow-lg"
                            >
                                <div>
                                    <div className="text-xs font-mono text-emerald-600 mb-3 font-bold">// 0{index + 1}</div>
                                    <h3 className="text-lg font-bold text-white mb-4">{point.title}</h3>
                                    <p className="text-sm text-emerald-100/80 leading-loose text-justify">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Endpoint */}
                <section className="rounded-xl border border-emerald-900/60 bg-[#060a08] p-8 text-center space-y-5 font-mono shadow-inner">
                    <div className="text-sm text-emerald-600 font-bold">// {t.sections.contact}</div>
                    <div className="text-base md:text-xl text-emerald-200 tracking-wider">
                        amirhosseinmoradizadeh456@gmail.com
                    </div>
                    <div className="pt-3">
                        <a
                            href="mailto:amirhosseinmoradizadeh456@gmail.com"
                            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 border-b border-emerald-400/30 hover:border-emerald-300 pb-1 transition-all"
                        >
                            <Mail className="w-4 h-4" />
                            <span>send_packet()</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="border-t border-emerald-950 py-8 text-center text-xs font-mono text-emerald-700 font-bold tracking-widest">
                EOF -- exit code 0
            </footer>
        </div>
    )
}