"use client";

import Image from "next/image";
import { Users, Target, Link, Globe } from "lucide-react";
import { useState, useRef } from "react";

export default function Home() {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero - Centered Layout */}
            <section className="w-full px-8 md:px-24 pt-20 pb-16 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl mb-6">
                        Strategic Partner for{" "}
                        <span className="text-[#1a4d8c]">Talent Development</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Talenvyra positions itself as a strategic partner for talent development rather than a traditional outsourcing vendor. We build sustainable careers and intelligent connections.
                    </p>
                </div>

                {/* Hero Image with Parallax Hover Effect */}
                <div className="max-w-5xl mx-auto" style={{ perspective: "1000px" }}>
                    <div
                        ref={imageRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                        style={{
                            transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                            transition: "transform 0.1s ease-out",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <Image
                            src="https://strapi.ackerlabs.my.id/uploads/business_executives_discussing_with_their_colleagues_whiteboa_00d53ce4ca.jpg"
                            alt="Talenvyra - Strategic Partner for Talent Development"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 80vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Core Pillars */}
            <section className="w-full px-8 md:px-24 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Our Foundation</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-black">Four Core Pillars</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Pillar 1 */}
                        <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#1a4d8c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a4d8c]/20 transition-colors">
                                <Users className="w-6 h-6 text-[#1a4d8c]" />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#1a4d8c] transition-colors">Human-Centric Intelligence</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Focuses on human potential, character, and job readiness rather than just CV experience.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#00a8b5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a8b5]/20 transition-colors">
                                <Target className="w-6 h-6 text-[#00a8b5]" />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#00a8b5] transition-colors">Talent-Driven Value</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Provides relevant, high-value talent to improve client productivity and efficiency.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#d4a24c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a24c]/20 transition-colors">
                                <Link className="w-6 h-6 text-[#d4a24c]" />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#d4a24c] transition-colors">Smart Talent Connection</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Acts as an intelligent link between talent and organizations through systematic processes and technology.
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-[#6db33f]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6db33f]/20 transition-colors">
                                <Globe className="w-6 h-6 text-[#6db33f]" />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#6db33f] transition-colors">Sustainable Career Ecosystem</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Facilitates long-term growth for both talent and companies in a thriving ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
