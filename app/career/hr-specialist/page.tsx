"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Users, Briefcase, CheckCircle2, Mail, ArrowRight, Building2, Calendar, Heart } from "lucide-react";

export default function HRSpecialistPage() {
    return (
        <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#6db33f]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#d4a24c]/10 rounded-full blur-3xl"></div>

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
                            <span className="px-4 py-2 bg-[#6db33f]/10 text-[#6db33f] text-sm font-bold rounded-full">Part-Time</span>
                            <span className="px-4 py-2 bg-[#d4a24c]/10 text-[#d4a24c] text-sm font-bold rounded-full">People & Culture</span>
                            <span className="px-4 py-2 bg-[#00a8b5]/10 text-[#00a8b5] text-sm font-bold rounded-full">Remote</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            HR Specialist
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                            Support recruitment, onboarding, and employee engagement initiatives.
                            Help build a positive workplace culture and support our growing team.
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
                                    <div className="text-sm font-semibold text-gray-900">Part-Time</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Building2 className="w-5 h-5 text-[#00a8b5]" />
                                <div>
                                    <div className="text-xs text-gray-500">Department</div>
                                    <div className="text-sm font-semibold text-gray-900">People & Culture</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <Calendar className="w-5 h-5 text-[#d4a24c]" />
                                <div>
                                    <div className="text-xs text-gray-500">Posted</div>
                                    <div className="text-sm font-semibold text-gray-900">1 day ago</div>
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
                                    <Heart className="w-6 h-6 text-[#6db33f]" />
                                    Job Description
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We are seeking a dedicated HR Specialist to join our People & Culture team on a
                                        part-time basis. You will play a key role in supporting our talent acquisition
                                        efforts and helping to create a positive, engaging work environment.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        As an HR Specialist, you will assist with the full recruitment lifecycle,
                                        coordinate onboarding for new hires, and contribute to employee engagement
                                        initiatives. You'll work closely with hiring managers and the leadership team
                                        to ensure we attract and retain top talent.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        This is a great opportunity for someone who is passionate about people and
                                        culture, and wants to make a meaningful impact in a growing organization.
                                    </p>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-[#d4a24c]" />
                                    Key Responsibilities
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        "Assist with end-to-end recruitment process including job posting, screening, and interview coordination",
                                        "Coordinate and facilitate new employee onboarding programs",
                                        "Support employee engagement initiatives and company culture activities",
                                        "Maintain accurate employee records and HR documentation",
                                        "Assist with HR administrative tasks and reporting",
                                        "Help organize company events, team building activities, and celebrations",
                                        "Respond to employee inquiries regarding HR policies and procedures",
                                        "Support performance management processes and employee development initiatives"
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
                                        "1+ years of experience in HR or recruitment",
                                        "Strong interpersonal and communication skills",
                                        "Excellent organizational skills and attention to detail",
                                        "Ability to handle confidential information with discretion",
                                        "Proficiency in Google Workspace or Microsoft Office",
                                        "Fluent in Bahasa Indonesia and English",
                                        "Bachelor's degree in Human Resources, Psychology, or related field"
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
                                        "Experience with HR software or applicant tracking systems (ATS)",
                                        "Knowledge of Indonesian labor laws and regulations",
                                        "Experience in employer branding or recruitment marketing",
                                        "Background in tech or startup environment",
                                        "HR certification or ongoing HR studies"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#00a8b5] rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skills & Competencies */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Competencies</h2>
                                <div className="flex flex-wrap gap-3">
                                    {["Recruitment", "Onboarding", "Employee Relations", "HRIS", "Communication", "Organization", "Problem Solving", "Event Planning", "Documentation", "Interviewing", "Culture Building", "Team Collaboration"].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#6db33f]/30 hover:shadow-sm transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Working Hours</h2>
                                <div className="bg-[#6db33f]/5 rounded-xl p-6 border border-[#6db33f]/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Clock className="w-6 h-6 text-[#6db33f]" />
                                        <span className="text-lg font-semibold text-gray-900">Part-Time Position</span>
                                    </div>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• 20-25 hours per week</li>
                                        <li>• Flexible schedule (can be discussed)</li>
                                        <li>• Remote work with occasional virtual meetings</li>
                                        <li>• Option for full-time conversion based on performance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Apply Card */}
                            <div className="bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-2xl p-8 text-white sticky top-8">
                                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                                <p className="text-white/80 text-sm mb-6">
                                    Help us build an amazing team and culture!
                                </p>
                                <a
                                    href="https://bit.ly/TalenvyraRecruitment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#6db33f] font-bold rounded-xl hover:bg-gray-100 transition-colors"
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
                                        "Competitive hourly rate",
                                        "Flexible working hours",
                                        "Fully remote position",
                                        "Learning & development support",
                                        "Collaborative team environment",
                                        "Insight into HR best practices",
                                        "Career growth potential",
                                        "Full-time conversion opportunity"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#6db33f]/10 rounded-lg flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-[#6db33f]" />
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
