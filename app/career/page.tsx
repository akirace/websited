"use client";

import Image from "next/image";
import { Sparkles, TrendingUp, Users, Target, Heart, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";

export default function Career() {
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
            {/* SECTION 1: Hero + CTA Combined */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#6db33f]/5 via-white to-[#1a4d8c]/5">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#6db33f]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#00a8b5]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#d4a24c]/10 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6db33f]/10 to-[#00a8b5]/10 rounded-full mb-8 border border-[#6db33f]/20">
                                <Sparkles className="w-4 h-4 text-[#6db33f]" />
                                <span className="text-sm font-semibold text-[#6db33f]">Join Our Team</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black mb-6">
                                Build a{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6db33f] via-[#00a8b5] to-[#1a4d8c]">
                                    Sustainable Career
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                                At Talenvyra, we facilitate long-term growth for both talent and companies. Our ecosystem is designed to focus on human potential, ensuring your career aligns with your goals.
                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <div className="w-10 h-10 bg-[#6db33f]/10 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-[#6db33f]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Career Growth</div>
                                        <div className="text-xs text-gray-500">Clear progression paths</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <div className="w-10 h-10 bg-[#1a4d8c]/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#1a4d8c]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Great Team</div>
                                        <div className="text-xs text-gray-500">Collaborative culture</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <div className="w-10 h-10 bg-[#00a8b5]/10 rounded-lg flex items-center justify-center">
                                        <Target className="w-5 h-5 text-[#00a8b5]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Skill Development</div>
                                        <div className="text-xs text-gray-500">Continuous learning</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <div className="w-10 h-10 bg-[#d4a24c]/10 rounded-lg flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-[#d4a24c]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Work-Life Balance</div>
                                        <div className="text-xs text-gray-500">Flexible environment</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] p-6 rounded-2xl shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-2">Start Your Journey Today</h3>
                                <p className="text-sm text-white/80 mb-4">Ready to accelerate your career? Join our ecosystem.</p>
                                <div className="flex flex-col gap-4">
                                    <a
                                        href="mailto:talentvyra.recuitment@gmail.com"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1a4d8c] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Submit Your Resume
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
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
                                <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://strapi.ackerlabs.my.id/uploads/portrait_man_smiling_camera_while_colleagues_working_ba_e7bc4d50d4.jpg"
                                        alt="Join Talenvyra Career"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#6db33f]/30 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Card - Bottom Left */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(40px)" }}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-gray-900">500+</div>
                                            <div className="text-sm text-gray-500">Careers Launched</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card - Top Right */}
                                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#6db33f] rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-gray-700">We're Hiring!</span>
                                    </div>
                                </div>

                                {/* Floating Benefits - Middle Right */}
                                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block"
                                    style={{ transform: "translateZ(20px) translateY(-50%)" }}>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#6db33f]" />
                                            <span className="text-xs font-medium text-gray-600">Growth Opportunities</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#6db33f]" />
                                            <span className="text-xs font-medium text-gray-600">Mentorship Programs</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#6db33f]" />
                                            <span className="text-xs font-medium text-gray-600">Flexible Work</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
