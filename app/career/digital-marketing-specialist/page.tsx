"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Users, Briefcase, CheckCircle2, Mail, ArrowRight, Building2, Calendar, TrendingUp } from "lucide-react";

export default function DigitalMarketingSpecialistPage() {
    return (
        <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#d4a24c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-16">
                    {/* Back Button */}
                    <Link
                        href="/career"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1a4d8c] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to All Positions</span>
                    </Link>

                    {/* Job Header */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-4 py-2 bg-[#d4a24c]/10 text-[#d4a24c] text-sm font-bold rounded-full">Contract</span>
                            <span className="px-4 py-2 bg-[#1a4d8c]/10 text-[#1a4d8c] text-sm font-bold rounded-full">Marketing</span>
                            <span className="px-4 py-2 bg-[#00a8b5]/10 text-[#00a8b5] text-sm font-bold rounded-full">Hybrid</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Digital Marketing Specialist
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                            Drive digital marketing strategies across multiple channels. Manage campaigns,
                            analyze performance, and optimize ROI to help grow our brand presence.
                        </p>

                        {/* Quick Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <MapPin className="w-5 h-5 text-[#1a4d8c]" />
                                <div>
                                    <div className="text-xs text-gray-500">Location</div>
                                    <div className="text-sm font-semibold text-gray-900">Hybrid / Jakarta</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Clock className="w-5 h-5 text-[#d4a24c]" />
                                <div>
                                    <div className="text-xs text-gray-500">Job Type</div>
                                    <div className="text-sm font-semibold text-gray-900">Contract</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Building2 className="w-5 h-5 text-[#00a8b5]" />
                                <div>
                                    <div className="text-xs text-gray-500">Department</div>
                                    <div className="text-sm font-semibold text-gray-900">Marketing</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Calendar className="w-5 h-5 text-[#6db33f]" />
                                <div>
                                    <div className="text-xs text-gray-500">Posted</div>
                                    <div className="text-sm font-semibold text-gray-900">1 week ago</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Job Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Job Description */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-[#d4a24c]" />
                                    Job Description
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We are looking for a results-driven Digital Marketing Specialist to join our marketing team.
                                        You will be responsible for developing, implementing, and managing marketing campaigns that
                                        promote our company and its services.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Your role will involve analyzing digital data to draw key insights and developing strategies
                                        to drive traffic and engagement. You'll work across various digital channels including social
                                        media, search engines, email, and content marketing.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        This is an excellent opportunity for a creative marketer who loves data and wants to make
                                        a real impact on business growth.
                                    </p>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-[#6db33f]" />
                                    Key Responsibilities
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        "Plan and execute digital marketing campaigns across SEO/SEM, email, social media, and display advertising",
                                        "Measure and report performance of all digital marketing campaigns and assess against goals (ROI and KPIs)",
                                        "Identify trends and insights, and optimize spend and performance based on the insights",
                                        "Brainstorm new and creative growth strategies",
                                        "Manage and maintain the company's social media presence",
                                        "Create compelling content for various digital platforms",
                                        "Collaborate with internal teams to create landing pages and optimize user experience",
                                        "Stay up-to-date with digital marketing trends and best practices"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#6db33f] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#00a8b5]" />
                                    Requirements
                                </h2>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Must Have:</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "2+ years of experience in digital marketing",
                                        "Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns",
                                        "Experience with Google Analytics, Google Ads, and social media analytics",
                                        "Strong understanding of current online marketing concepts, strategy and best practices",
                                        "Excellent analytical skills and data-driven thinking",
                                        "Strong written and verbal communication skills in English and Bahasa Indonesia",
                                        "Bachelor's degree in Marketing, Communications, or related field"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#1a4d8c] rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nice to Have:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Experience with marketing automation platforms (HubSpot, Mailchimp)",
                                        "Knowledge of video editing and content creation tools",
                                        "Experience with A/B testing and conversion rate optimization",
                                        "Google Ads or Facebook Blueprint certification",
                                        "Experience in B2B marketing"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#00a8b5] rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools & Platforms */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Platforms</h2>
                                <div className="flex flex-wrap gap-3">
                                    {["Google Analytics", "Google Ads", "Facebook Ads", "Instagram", "LinkedIn", "TikTok", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Canva", "Hootsuite", "Meta Business Suite", "Google Tag Manager"].map((tool, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#d4a24c]/30 hover:shadow-sm transition-all"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Apply Card */}
                            <div className="bg-gradient-to-br from-[#d4a24c] to-[#1a4d8c] rounded-2xl p-8 text-white sticky top-8">
                                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                                <p className="text-white/80 text-sm mb-6">
                                    Join our marketing team and help us grow!
                                </p>
                                <a
                                    href="https://bit.ly/TalenvyraRecruitment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#d4a24c] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    Apply Now
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-white/60 text-xs mt-4 text-center">
                                    or email to recruit@talenvyra.com
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">What We Offer</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Competitive contract rate",
                                        "Hybrid work arrangement",
                                        "Marketing tools & budget",
                                        "Training & certifications",
                                        "Flexible working hours",
                                        "Project bonuses",
                                        "Dynamic work environment",
                                        "Potential for full-time conversion"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#d4a24c]/10 rounded-lg flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-[#d4a24c]" />
                                            </div>
                                            <span className="text-sm text-gray-600">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Share */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Job</h3>
                                <p className="text-sm text-gray-500 mb-4">Know someone perfect for this role?</p>
                                <button
                                    onClick={() => {
                                        if (typeof window !== 'undefined' && navigator.clipboard) {
                                            navigator.clipboard.writeText(window.location.href);
                                        }
                                    }}
                                    className="w-full px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
