import Image from "next/image";
import {
    Users, Code, Database, Layout, Settings, Monitor, Layers, Smartphone, Apple,
    GitBranch, Coffee, Triangle, ClipboardCheck, Bot, Activity, FileText,
    BarChart, Lightbulb, Network, Briefcase, UserCog, MoreHorizontal
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
                        alt="IT Professional Resource Outsourcing"
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
                            IT Professional Resource Outsourcing
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                Our IT Professional Resource Outsourcing service delivers dependable, high quality IT talent designed to strengthen your organization's technological capabilities.
                            </p>
                            <p>
                                We provide thoroughly screened and industry certified professionals from analysts and developers to engineers and support specialists ensuring you receive the right expertise at the right time.
                            </p>
                            <p>
                                With a flexible engagement model, strict service standards, and ongoing performance monitoring, we help your company reduce hiring risks, accelerate project delivery, and maintain operational excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Our Services Roles */}
            <section className="w-full px-8 md:px-16 py-16 pb-8 bg-white">
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Our Services Roles</h2>

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

            {/* SECTION 3: Our Partners */}
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
