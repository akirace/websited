"use client";

import Image from "next/image";
import { Mail, MapPin, MessageCircle, Send, Phone, Clock, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function Contacts() {
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
            {/* SECTION 1: Hero */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a4d8c]/5 via-white to-[#00a8b5]/5">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-80 h-80 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00a8b5]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d4a24c]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a4d8c]/10 to-[#00a8b5]/10 rounded-full mb-8 border border-[#1a4d8c]/20">
                                <MessageCircle className="w-4 h-4 text-[#1a4d8c]" />
                                <span className="text-sm font-semibold text-[#1a4d8c]">Get In Touch</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black mb-6">
                                Let's{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5]">
                                    Connect
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                                Whether you're looking for top talent to drive your business forward or seeking your next career opportunity, we're here to help create value for you.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-8">
                                {/* Email Card */}
                                <a
                                    href="mailto:talentvyra.recuitment@gmail.com"
                                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#1a4d8c]/20 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 mb-1">Email Us</p>
                                        <p className="text-base font-semibold text-gray-900 group-hover:text-[#1a4d8c] transition-colors">talentvyra.recuitment@gmail.com</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1a4d8c] group-hover:translate-x-1 transition-all" />
                                </a>

                                {/* Address Card */}
                                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Visit Our Office</p>
                                        <p className="text-base font-medium text-gray-900 leading-relaxed">
                                            Latinos Business District, Jl. Raya Rawa Buntu Blk. C8 No.18, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Info Pills */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                    <Clock className="w-4 h-4 text-[#1a4d8c]" />
                                    <span className="text-sm font-medium text-gray-700">Mon - Fri: 9AM - 6PM</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                    <Send className="w-4 h-4 text-[#6db33f]" />
                                    <span className="text-sm font-medium text-gray-700">Quick Response</span>
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
                                        src="https://strapi.ackerlabs.my.id/uploads/office_desktop_with_laptop_business_man_123fbe14fd.jpg"
                                        alt="Contact Talenvyra"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d8c]/20 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Card - Bottom Left */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                    style={{ transform: "translateZ(40px)" }}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center">
                                            <MessageCircle className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-gray-900">Let's Talk</div>
                                            <div className="text-sm text-gray-500">We're ready to help</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card - Top Right */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] px-5 py-3 rounded-xl shadow-xl hidden md:block"
                                    style={{ transform: "translateZ(30px)" }}>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-white">Available Now</span>
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
