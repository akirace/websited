import Image from "next/image";
import {
    Users, Code, Database, Layout, Settings, Monitor, Layers, Smartphone, Apple,
    GitBranch, Coffee, Triangle, ClipboardCheck, Bot, Activity, FileText,
    BarChart, Lightbulb, Network, Briefcase, UserCog, MoreHorizontal,
    Globe, Clock, UserCheck, Briefcase as BriefcaseIcon, Search
} from "lucide-react";

export default function Service() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
                {/* Image Container - Right side */}
                <div className="absolute top-0 right-0 h-full w-[50%] z-0">
                    <Image
                        src="https://qb1.vc/static/media/bg-home-3.f19e57920cfa879a9f85.jpg"
                        alt="Core Services & Delivery Models"
                        fill
                        priority
                        sizes="50vw"
                        className="object-cover"
                    />
                </div>

                {/* Content Section - Left side */}
                <div className="relative z-10 flex w-full flex-col justify-center px-8 md:w-1/2 md:px-24 h-full">
                    <div className="max-w-xl py-24 md:py-0">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-3xl lg:text-4xl mb-6">
                            Core Services & Delivery Models
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                We offer specialized IT staffing and dedicated teams with a focus on speed and quality. Our models are designed to adapt to your specific business needs, ensuring you get the right talent at the right time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Augmentation & Staffing Models */}
            <section className="w-full px-8 md:px-16 py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Augmentation & Staffing Models</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* IT Staff Augmentation */}
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#1a4d8c]/10 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-[#1a4d8c]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">IT Staff Augmentation</h3>
                            <p className="text-sm text-gray-600">Includes onshore, offshore, and nearshore assignments with a 48-hour turnaround time (TAT) for top talent.</p>
                        </div>
                        {/* Mass Recruitment */}
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#6db33f]/10 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-[#6db33f]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mass Recruitment</h3>
                            <p className="text-sm text-gray-600">Targeted for high-volume hiring during seasonal peaks or large-scale launches.</p>
                        </div>
                        {/* Contract Staffing */}
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#d4a24c]/10 rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6 text-[#d4a24c]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Contract Staffing</h3>
                            <p className="text-sm text-gray-600">Designed for project-based or task-specific needs to save on manpower costs.</p>
                        </div>
                        {/* RPO */}
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#a83279]/10 rounded-xl flex items-center justify-center mb-6">
                                <Settings className="w-6 h-6 text-[#a83279]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">RPO</h3>
                            <p className="text-sm text-gray-600">Recruitment Process Outsourcing providing end-to-end or partial recruitment support for business expansion.</p>
                        </div>
                        {/* One-time Permanent Hiring */}
                        <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#00a8b5]/10 rounded-xl flex items-center justify-center mb-6">
                                <UserCheck className="w-6 h-6 text-[#00a8b5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Permanent Hiring</h3>
                            <p className="text-sm text-gray-600">Tailor-made searches for specialized expertise and executive positions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Delivery Methods */}
            <section className="w-full px-8 md:px-16 py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Delivery Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Globe className="w-8 h-8 text-[#1a4d8c] mb-4" />
                            <h3 className="text-lg font-bold mb-2">Offshore Managed</h3>
                            <p className="text-sm text-gray-600">Teams deployed offshore, managed by Talenvyra/Client partners with daily/weekly communication.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <BriefcaseIcon className="w-8 h-8 text-[#00a8b5] mb-4" />
                            <h3 className="text-lg font-bold mb-2">Onshore Managed</h3>
                            <p className="text-sm text-gray-600">Teams present at the client's office for projects requiring physical presence.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Search className="w-8 h-8 text-[#6db33f] mb-4" />
                            <h3 className="text-lg font-bold mb-2">Resource Augmentation</h3>
                            <p className="text-sm text-gray-600">Resources allocated based on technical expertise, managed directly by the client.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Technical Expertise (Previous Services Roles) */}
            <section className="w-full px-8 md:px-16 py-20 bg-white">
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Technical Expertise & Industry Focus</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Talenvyra maintains a broad pipeline across various technology stacks including Java, .NET, Python, Data Science, AI/ML, Cloud (AWS/Azure), and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Service Role Items */}
                        {[
                            { Icon: Users, name: "Scrum Master" },
                            { Icon: Code, name: "Software Engineer" },
                            { Icon: Database, name: "Backend Engineer" },
                            { Icon: Layout, name: "Front End Engineer" },
                            { Icon: Settings, name: "Back End Developer" },
                            { Icon: Monitor, name: "Front End Developer" },
                            { Icon: Layers, name: "Full Stack Developer" },
                            { Icon: Smartphone, name: "Android Developer" },
                            { Icon: Apple, name: "iOS Developer" },
                            { Icon: GitBranch, name: "DevOps" },
                            { Icon: Coffee, name: "Java Developer" },
                            { Icon: Triangle, name: "Laravel Developer" },
                            { Icon: ClipboardCheck, name: "Manual Testing" },
                            { Icon: Bot, name: "Automations Testing" },
                            { Icon: Activity, name: "Performance Testing" },
                            { Icon: FileText, name: "Technical Writer" },
                            { Icon: BarChart, name: "Business Analyst" },
                            { Icon: Lightbulb, name: "Solution Analyst" },
                            { Icon: Network, name: "Solution Architect" },
                            { Icon: Briefcase, name: "Project Manager" },
                            { Icon: UserCog, name: "Project Management Officer" },
                            { Icon: MoreHorizontal, name: "And More (etc)" },
                        ].map((role, index) => {
                            const IconComponent = role.Icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer bg-white"
                                >
                                    <IconComponent className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                                    <span className="text-sm font-medium text-gray-800">{role.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Partners */}
            <section className="w-full px-8 md:px-16 pt-8 pb-20 bg-white">
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Partners</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Bank Mandiri */}
                        <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
                            <div className="relative w-full h-24 mb-4">
                                <Image
                                    src="https://strapi.ackerlabs.my.id/uploads/partner_mandiri_01f338132b7fdca83c06_f4d113ecfc.jpg"
                                    alt="Bank Mandiri"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">Bank Mandiri</p>
                        </div>

                        {/* Asian Technology Solutions */}
                        <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
                            <div className="relative w-full h-24 mb-4">
                                <Image
                                    src="https://strapi.ackerlabs.my.id/uploads/ats_b66c02c5e6.jpg"
                                    alt="Asian Technology Solutions"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">Asian Technology Solutions</p>
                        </div>

                        {/* PT Sifang */}
                        <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
                            <div className="relative w-full h-24 mb-4">
                                <Image
                                    src="https://strapi.ackerlabs.my.id/uploads/sifang_7204400dd5.jpg"
                                    alt="PT Sifang"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">PT Sifang</p>
                        </div>

                        {/* Indocyber */}
                        <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
                            <div className="relative w-full h-24 mb-4">
                                <Image
                                    src="https://strapi.ackerlabs.my.id/uploads/indocyber_2cd96ab486.png"
                                    alt="Indocyber"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">Indocyber</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
