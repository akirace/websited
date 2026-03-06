import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft, MapPin, Clock, Users, Briefcase,
    CheckCircle2, Mail, ArrowRight, Building2, Calendar, TrendingUp, Monitor, Tag
} from "lucide-react";
import CopyLinkButton from "./CopyLinkButton";

interface Job {
    id: string; title: string; slug: string; description: string;
    location: string; employment_type: string; department: string;
    work_mode: string; posted_at: string; is_active: string;
    job_description: string;
    responsibilities: string;
    requirements_must_have: string;
    requirements_nice_to_have: string;
    tech_stack: string;
    created_at: string; updated_at: string;
}

const API = "https://talenvyra.com/api/index.php/api/jobs";

async function fetchAllJobs(): Promise<Job[]> {
    try {
        const res = await fetch(`${API}?page=1&limit=100`, { headers: { Accept: "application/json" }, cache: "no-store" });
        if (!res.ok) return [];
        const data = await res.json();
        return data.status ? (data.data as Job[]) : [];
    } catch { return []; }
}

async function fetchJobById(id: string): Promise<Job | null> {
    try {
        const res = await fetch(`${API}/${id}`, { headers: { Accept: "application/json" }, cache: "no-store" });
        if (!res.ok) return null;
        const data = await res.json();
        return data.status ? (data.data as Job) : null;
    } catch { return null; }
}

export async function generateStaticParams() {
    const jobs = await fetchAllJobs();
    return jobs.map((job) => ({ slug: job.slug }));
}

function parseList(raw: string): string[] {
    if (!raw) return [];
    try { return JSON.parse(raw) as string[]; } catch { return []; }
}

function splitByComma(items: string[]): string[] {
    return items.flatMap((item) => item.split(",").map((s) => s.trim()).filter(Boolean));
}

function fmtType(t: string) {
    return ({ "full-time": "Full-Time", "part-time": "Part-Time", contract: "Contract", internship: "Internship", freelance: "Freelance" } as Record<string, string>)[t?.toLowerCase()] ?? t ?? "-";
}
function fmtMode(m: string) {
    return ({ remote: "Remote", onsite: "On-Site", hybrid: "Hybrid" } as Record<string, string>)[m?.toLowerCase()] ?? m ?? "-";
}
function fmtPosted(d: string) {
    if (!d) return "-";
    const diff = Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
    if (diff === 0) return "Today"; if (diff === 1) return "1 day ago";
    if (diff < 7) return `${diff} days ago`; if (diff < 30) return `${Math.floor(diff / 7)} week${Math.floor(diff / 7) > 1 ? "s" : ""} ago`;
    return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? "s" : ""} ago`;
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find job by slug
    const allJobs = await fetchAllJobs();
    const found = allJobs.find((j) => j.slug === slug);
    if (!found) notFound();

    // Fetch full details
    const job = (await fetchJobById(found.id)) ?? found;

    const responsibilities = splitByComma(parseList(job.responsibilities));
    const mustHave = splitByComma(parseList(job.requirements_must_have));
    const niceHave = splitByComma(parseList(job.requirements_nice_to_have));
    const techStack = parseList(job.tech_stack);

    const typeColorMap: Record<string, string> = {
        "full-time": "bg-[#6db33f]/10 text-[#6db33f]",
        "part-time": "bg-[#00a8b5]/10 text-[#00a8b5]",
        contract: "bg-[#d4a24c]/10 text-[#d4a24c]",
        internship: "bg-[#a83279]/10 text-[#a83279]",
    };
    const modeColorMap: Record<string, string> = {
        remote: "bg-blue-100 text-blue-700",
        onsite: "bg-orange-100 text-orange-700",
        hybrid: "bg-purple-100 text-purple-700",
    };
    const typeColor = typeColorMap[job.employment_type?.toLowerCase()] ?? "bg-gray-100 text-gray-700";
    const modeColor = modeColorMap[job.work_mode?.toLowerCase()] ?? "bg-gray-100 text-gray-600";

    return (
        <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-white via-gray-50 to-white">
            <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#1a4d8c]/8 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6db33f]/8 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-16">
                    {/* Back */}
                    <Link href="/career"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1a4d8c] transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to All Positions</span>
                    </Link>

                    {/* Job Header Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className={`px-4 py-2 text-sm font-bold rounded-full ${typeColor}`}>{fmtType(job.employment_type)}</span>
                            {job.department && <span className="px-4 py-2 bg-[#1a4d8c]/10 text-[#1a4d8c] text-sm font-bold rounded-full">{job.department}</span>}
                            <span className={`px-4 py-2 text-sm font-bold rounded-full ${modeColor}`}>{fmtMode(job.work_mode)}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{job.title}</h1>

                        {job.description && (
                            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">{job.description}</p>
                        )}

                        {/* Quick info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: MapPin, label: "Location", value: job.location || "-", color: "text-[#1a4d8c]" },
                                { icon: Clock, label: "Job Type", value: fmtType(job.employment_type), color: "text-[#d4a24c]" },
                                { icon: Building2, label: "Department", value: job.department || "-", color: "text-[#00a8b5]" },
                                { icon: Calendar, label: "Posted", value: fmtPosted(job.posted_at), color: "text-[#6db33f]" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                                    <div>
                                        <div className="text-xs text-gray-500">{item.label}</div>
                                        <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left - Details */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Job Description */}
                            {job.job_description && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-[#1a4d8c]" />Job Description
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">{job.job_description}</p>
                                </div>
                            )}

                            {/* Responsibilities */}
                            {responsibilities.length > 0 && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Users className="w-6 h-6 text-[#6db33f]" />Key Responsibilities
                                    </h2>
                                    <ul className="space-y-4">
                                        {responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#6db33f] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Requirements */}
                            {(mustHave.length > 0 || niceHave.length > 0) && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Briefcase className="w-6 h-6 text-[#00a8b5]" />Requirements
                                    </h2>
                                    {mustHave.length > 0 && (
                                        <>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Must Have:</h3>
                                            <ul className="space-y-3 mb-6">
                                                {mustHave.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-[#1a4d8c] rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {niceHave.length > 0 && (
                                        <>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nice to Have:</h3>
                                            <ul className="space-y-3">
                                                {niceHave.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-[#00a8b5] rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Tech Stack */}
                            {techStack.length > 0 && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Tag className="w-6 h-6 text-[#d4a24c]" />Tech Stack
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {techStack.map((t, i) => (
                                            <span key={i} className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-[#1a4d8c]/30 hover:shadow-sm transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right - Sidebar */}
                        <div className="space-y-6">
                            {/* Apply Card */}
                            <div className="bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-2xl p-8 text-white sticky top-8">
                                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                                <p className="text-white/80 text-sm mb-6">Join our team and help us make an impact!</p>
                                <a href="https://bit.ly/TalenvyraRecruitment" target="_blank" rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#1a4d8c] font-bold rounded-xl hover:bg-gray-100 transition-colors">
                                    <Mail className="w-5 h-5" />Apply Now<ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-white/60 text-xs mt-4 text-center">or email to recruit@talenvyra.com</p>
                            </div>

                            {/* Job Meta */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Job Details</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: Monitor, label: "Work Mode", value: fmtMode(job.work_mode) },
                                        { icon: MapPin, label: "Location", value: job.location || "-" },
                                        { icon: Clock, label: "Type", value: fmtType(job.employment_type) },
                                        { icon: Building2, label: "Department", value: job.department || "-" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <item.icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <span className="text-gray-500">{item.label}:</span>
                                            <span className="font-medium text-gray-700 ml-auto">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Share */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Job</h3>
                                <p className="text-sm text-gray-500 mb-4">Know someone perfect for this role?</p>
                                <CopyLinkButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
