"use client";

import Image from "next/image";
import {
    Users, Code, Database, Layout, Settings, Monitor, Layers, Smartphone, Apple,
    GitBranch, Coffee, Triangle, ClipboardCheck, Bot, Activity, FileText,
    BarChart, Lightbulb, Network, Briefcase, UserCog, MoreHorizontal,
    Globe, Clock, UserCheck, Briefcase as BriefcaseIcon, Search, Zap, Shield, Rocket
} from "lucide-react";


export default function Service() {


    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero - Eye-catching Design */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a4d8c]/5 via-white to-[#00a8b5]/5">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-20 w-80 h-80 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#6db33f]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-[#d4a24c]/10 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-12 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a4d8c]/10 to-[#00a8b5]/10 rounded-full mb-8 border border-[#1a4d8c]/20">
                                <Zap className="w-4 h-4 text-[#1a4d8c]" />
                                <span className="text-sm font-semibold text-[#1a4d8c]">Our Services</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black mb-4 md:mb-6">
                                Core Services &{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4d8c] via-[#00a8b5] to-[#6db33f]">
                                    Delivery Models
                                </span>
                            </h1>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-lg">
                                We offer specialized IT staffing and dedicated teams with a focus on speed and quality. Our models are designed to adapt to your specific business needs.
                            </p>

                            {/* Feature Pills */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#1a4d8c]/10 rounded-lg flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#1a4d8c]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">48-Hour TAT</div>
                                        <div className="text-xs text-gray-500">Fast Turnaround</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#6db33f]/10 rounded-lg flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-[#6db33f]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Quality First</div>
                                        <div className="text-xs text-gray-500">Curated Talent</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#00a8b5]/10 rounded-lg flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-[#00a8b5]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Global Reach</div>
                                        <div className="text-xs text-gray-500">On/Offshore</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#d4a24c]/10 rounded-lg flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-[#d4a24c]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Scalable</div>
                                        <div className="text-xs text-gray-500">Flexible Teams</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Image with Parallax Effect */}
                        <div className="order-1 lg:order-2">
                            <div
                                className="relative cursor-pointer"
                            >
                                {/* Main Image */}
                                <div className="relative w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://strapi.ackerlabs.my.id/uploads/millennial_group_young_asia_businesspeople_small_modern_office_japanese_male_boss_supervisor_teaching_intern_new_employee_chinese_young_guy_helping_with_difficult_assignment_meeting_room_f8f972717d.jpg"
                                        alt="Talenvyra Services - IT Staffing and Delivery"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d8c]/30 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Card - Bottom Left */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(40px)" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-xl flex items-center justify-center">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">5+ Service Models</div>
                                            <div className="text-xs text-gray-500">Tailored Solutions</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card - Top Right */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] px-5 py-3 rounded-xl shadow-xl hidden md:block"
                                    style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-white" />
                                        <span className="text-sm font-bold text-white">Premium Talent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Augmentation & Staffing Models */}
            <section className="w-full px-5 sm:px-8 md:px-16 py-12 md:py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 md:mb-12">Augmentation & Staffing Models</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                        {/* IT Staff Augmentation */}
                        <div className="p-5 md:p-8 border border-gray-100 rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 bg-white">
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
            <section className="w-full px-5 sm:px-8 md:px-16 py-12 md:py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 md:mb-12">Delivery Methods</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm">
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
            <section className="w-full px-5 sm:px-8 md:px-16 py-12 md:py-20 bg-white">
                <div className="w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 md:mb-12">Technical Expertise & Industry Focus</h2>
                    <p className="text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
                        Talenvyra maintains a broad pipeline across various technology stacks including Java, .NET, Python, Data Science, AI/ML, Cloud (AWS/Azure), and more.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
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
                                    className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-[#1a4d8c]/30 cursor-pointer bg-white group"
                                >
                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-[#1a4d8c] transition-colors" strokeWidth={1.5} />
                                    <span className="text-xs md:text-sm font-medium text-gray-800 text-center leading-tight">{role.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Partners - Infinite Scroll */}
            <section className="w-full py-20 bg-gradient-to-r from-[#1a4d8c]/5 via-white to-[#00a8b5]/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Partners</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We collaborate with leading organizations to deliver exceptional talent solutions
                        </p>
                    </div>
                </div>

                {/* Infinite Scroll Container */}
                <div className="relative w-full">
                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Scrolling Track */}
                    <div className="flex animate-scroll hover:pause-animation">
                        {/* First Set */}
                        {[
                            { src: "https://strapi.ackerlabs.my.id/uploads/partner_mandiri_01f338132b7fdca83c06_f4d113ecfc.jpg", name: "Bank Mandiri" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/ats_b66c02c5e6.jpg", name: "Asian Technology Solutions" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/sifang_7204400dd5.jpg", name: "PT Sifang" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/indocyber_2cd96ab486.png", name: "Indocyber" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/LOGO_BG_TERANG_74e806bec3.png", name: "Raxsa.co" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/maxy_8ba6692a5e.png", name: "Maxy Academy" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/komparase_59c79a6059.png", name: "Komparase" },
                        ].map((partner, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 mx-6 group"
                            >
                                <div className="w-64 h-40 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-[#1a4d8c]/20">
                                    <div className="relative w-full h-20 mb-3">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            fill
                                            sizes="200px"
                                            className="object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-[#1a4d8c] transition-colors">{partner.name}</p>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {[
                            { src: "https://strapi.ackerlabs.my.id/uploads/partner_mandiri_01f338132b7fdca83c06_f4d113ecfc.jpg", name: "Bank Mandiri" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/ats_b66c02c5e6.jpg", name: "Asian Technology Solutions" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/sifang_7204400dd5.jpg", name: "PT Sifang" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/indocyber_2cd96ab486.png", name: "Indocyber" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/LOGO_BG_TERANG_74e806bec3.png", name: "Raxsa.co" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/maxy_8ba6692a5e.png", name: "Maxy Academy" },
                            { src: "https://strapi.ackerlabs.my.id/uploads/komparase_59c79a6059.png", name: "Komparase" },
                        ].map((partner, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 mx-6 group"
                            >
                                <div className="w-64 h-40 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-[#1a4d8c]/20">
                                    <div className="relative w-full h-20 mb-3">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            fill
                                            sizes="200px"
                                            className="object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-[#1a4d8c] transition-colors">{partner.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS Animation */}
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>
        </main>
    );
}
