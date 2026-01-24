"use client";

import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, Sparkles, Target, Heart } from "lucide-react";
import { useState, useRef } from "react";

export default function About() {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero - Eye-catching Design */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a4d8c]/5 via-white to-[#6db33f]/5">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a24c]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a8b5]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a4d8c]/10 rounded-full mb-8">
                                <Sparkles className="w-4 h-4 text-[#1a4d8c]" />
                                <span className="text-sm font-semibold text-[#1a4d8c]">About Talenvyra</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black mb-6">
                                Redefining{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5]">
                                    Talent Partnership
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                                Talenvyra goes beyond traditional recruitment. We are a strategic partner committed to unlocking human potential and driving organizational excellence through intelligent talent solutions.
                            </p>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-2xl md:text-3xl font-bold text-[#1a4d8c]">10K+</div>
                                    <div className="text-xs text-gray-500 mt-1">Curated CVs</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-2xl md:text-3xl font-bold text-[#00a8b5]">500+</div>
                                    <div className="text-xs text-gray-500 mt-1">Placements</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-2xl md:text-3xl font-bold text-[#6db33f]">50+</div>
                                    <div className="text-xs text-gray-500 mt-1">Partners</div>
                                </div>
                            </div>

                            {/* Key Points */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                    <Target className="w-4 h-4 text-[#1a4d8c]" />
                                    <span className="text-sm font-medium text-gray-700">Human-Centric</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                    <Heart className="w-4 h-4 text-[#d4a24c]" />
                                    <span className="text-sm font-medium text-gray-700">Sustainable Growth</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Image with Parallax Effect */}
                        <div className="order-1 lg:order-2" style={{ perspective: "1000px" }}>
                            <div
                                ref={imageRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative cursor-pointer"
                                style={{
                                    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                                    transition: "transform 0.15s ease-out",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Main Image */}
                                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://strapi.ackerlabs.my.id/uploads/happy_young_asia_businessmen_businesswoman_meeting_brainstorming_some_new_ideas_about_project_e6a8350942.jpg"
                                        alt="Talenvyra Team Collaboration"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d8c]/20 to-transparent"></div>
                                </div>

                                {/* Floating Card - Bottom Left */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(40px)" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">Strategic Partner</div>
                                            <div className="text-xs text-gray-500">For Talent Development</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card - Top Right */}
                                <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#6db33f] rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold text-gray-700">Building Careers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Value Proposition */}
            <section className="w-full px-8 md:px-24 py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* For Clients */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-[#1a4d8c]" />
                                For Clients
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#1a4d8c] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Access to a database of over <strong>10,000+ curated CVs</strong>.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#1a4d8c] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Efficient, adaptive, and structured workforce management.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#1a4d8c] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Long-term strategic partnership for sustainable growth.</p>
                                </li>
                            </ul>
                        </div>

                        {/* For Talent */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-[#6db33f]" />
                                For Talent
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#6db33f] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Clear, sustainable career paths and placement in meaningful roles.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#6db33f] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Opportunities to develop competencies based on individual potential.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#6db33f] mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Supportive ecosystem for long-term professional growth.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
