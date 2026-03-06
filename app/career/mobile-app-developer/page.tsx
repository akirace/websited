"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Users, Briefcase, CheckCircle2, Mail, ArrowRight, Building2, Calendar, Smartphone } from "lucide-react";

export default function MobileAppDeveloperPage() {
    return (
        <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#1a4d8c]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6db33f]/10 rounded-full blur-3xl"></div>

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
                            <span className="px-4 py-2 bg-[#1a4d8c]/10 text-[#1a4d8c] text-sm font-bold rounded-full">Full-Time</span>
                            <span className="px-4 py-2 bg-[#6db33f]/10 text-[#6db33f] text-sm font-bold rounded-full">Mobile</span>
                            <span className="px-4 py-2 bg-[#00a8b5]/10 text-[#00a8b5] text-sm font-bold rounded-full">Remote</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Mobile App Developer
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                            Develop high-quality mobile applications for iOS and Android platforms using
                            React Native or Flutter. Build apps that users love and scale to millions.
                        </p>

                        {/* Quick Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <MapPin className="w-5 h-5 text-[#1a4d8c]" />
                                <div>
                                    <div className="text-xs text-gray-500">Location</div>
                                    <div className="text-sm font-semibold text-gray-900">Remote / Indonesia</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Clock className="w-5 h-5 text-[#6db33f]" />
                                <div>
                                    <div className="text-xs text-gray-500">Job Type</div>
                                    <div className="text-sm font-semibold text-gray-900">Full-Time</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Building2 className="w-5 h-5 text-[#00a8b5]" />
                                <div>
                                    <div className="text-xs text-gray-500">Department</div>
                                    <div className="text-sm font-semibold text-gray-900">Mobile Team</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Calendar className="w-5 h-5 text-[#d4a24c]" />
                                <div>
                                    <div className="text-xs text-gray-500">Posted</div>
                                    <div className="text-sm font-semibold text-gray-900">3 days ago</div>
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
                                    <Smartphone className="w-6 h-6 text-[#1a4d8c]" />
                                    Job Description
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We are seeking a talented Mobile App Developer to join our mobile development team.
                                        You will be responsible for building high-performance, user-friendly mobile applications
                                        that work seamlessly across iOS and Android platforms.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        As a Mobile App Developer, you will work with cross-platform frameworks like React Native
                                        or Flutter to create native-like experiences. You'll collaborate with designers, backend
                                        developers, and product managers to deliver exceptional mobile products.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        This is an exciting opportunity for developers who are passionate about mobile technology
                                        and want to build apps that impact thousands of users daily.
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
                                        "Design and build advanced applications for iOS and Android platforms",
                                        "Collaborate with cross-functional teams to define, design, and ship new features",
                                        "Work with outside data sources and APIs to build seamless mobile experiences",
                                        "Ensure the performance, quality, and responsiveness of applications",
                                        "Identify and correct bottlenecks and fix bugs",
                                        "Help maintain code quality, organization, and automatization",
                                        "Publish apps to App Store and Google Play Store",
                                        "Stay up-to-date with new mobile development technologies and frameworks"
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
                                        "2+ years of experience in mobile app development",
                                        "Strong proficiency in React Native or Flutter",
                                        "Experience with mobile app lifecycle and deployment process",
                                        "Understanding of RESTful APIs and mobile backend integration",
                                        "Knowledge of mobile UI/UX design principles",
                                        "Experience with Git version control",
                                        "Strong problem-solving skills and attention to detail",
                                        "Bachelor's degree in Computer Science or related field (or equivalent experience)"
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
                                        "Experience with native iOS (Swift) or Android (Kotlin) development",
                                        "Knowledge of state management solutions (Redux, MobX, Riverpod)",
                                        "Experience with Firebase and cloud services",
                                        "Understanding of CI/CD for mobile apps",
                                        "Published apps on App Store or Google Play"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#00a8b5] rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
                                <div className="flex flex-wrap gap-3">
                                    {["React Native", "Flutter", "Dart", "TypeScript", "JavaScript", "Firebase", "Redux", "REST API", "GraphQL", "iOS", "Android", "Xcode", "Android Studio", "Git", "Jest", "Detox"].map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#1a4d8c]/30 hover:shadow-sm transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Apply Card */}
                            <div className="bg-gradient-to-br from-[#1a4d8c] to-[#6db33f] rounded-2xl p-8 text-white sticky top-8">
                                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                                <p className="text-white/80 text-sm mb-6">
                                    Build apps that millions of users will love!
                                </p>
                                <a
                                    href="https://bit.ly/TalenvyraRecruitment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#1a4d8c] font-bold rounded-xl hover:bg-gray-100 transition-colors"
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
                                        "Competitive salary package",
                                        "Remote work flexibility",
                                        "Health insurance",
                                        "Latest devices for development",
                                        "Apple Developer & Play Store accounts",
                                        "Learning & development budget",
                                        "Collaborative team culture",
                                        "Career growth opportunities"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#1a4d8c]/10 rounded-lg flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-[#1a4d8c]" />
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
