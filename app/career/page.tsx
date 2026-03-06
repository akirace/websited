"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
    Sparkles, TrendingUp, Users, Target, Heart, Mail, ArrowRight,
    CheckCircle2, MapPin, Monitor, ChevronLeft, ChevronRight, AlertCircle, Building2
} from "lucide-react";

interface JobSummary {
    id: string; title: string; slug: string; description: string;
    location: string; employment_type: string; department: string;
    work_mode: string; posted_at: string; is_active: string; tech_stack: string;
}
interface Meta { total: number; page: number; limit: number; total_pages: number; }

const CARD_COLORS = [
    { border: "hover:border-[#6db33f]/30", bg: "from-[#6db33f]/5", badge: "bg-[#6db33f]/10 text-[#6db33f]" },
    { border: "hover:border-[#00a8b5]/30", bg: "from-[#00a8b5]/5", badge: "bg-[#00a8b5]/10 text-[#00a8b5]" },
    { border: "hover:border-[#1a4d8c]/30", bg: "from-[#1a4d8c]/5", badge: "bg-[#1a4d8c]/10 text-[#1a4d8c]" },
    { border: "hover:border-[#d4a24c]/30", bg: "from-[#d4a24c]/5", badge: "bg-[#d4a24c]/10 text-[#d4a24c]" },
    { border: "hover:border-[#a83279]/30", bg: "from-[#a83279]/5", badge: "bg-[#a83279]/10 text-[#a83279]" },
];

const API = "https://talenvyra.com/api/index.php/api/jobs";

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
    if (diff < 7) return `${diff} days ago`; if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
    return `${Math.floor(diff / 30)}mo ago`;
}
function parseList(raw: string): string[] {
    if (!raw) return []; try { return JSON.parse(raw) as string[]; } catch { return []; }
}

export default function Career() {
    const [jobs, setJobs] = useState<JobSummary[]>([]);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const LIMIT = 20;

    const fetchJobs = useCallback(async (p: number) => {
        setIsLoading(true); setError(null);
        try {
            const res = await fetch(`${API}?page=${p}&limit=${LIMIT}`, { headers: { Accept: "application/json" } });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (data.status) { setJobs((data.data as JobSummary[]).filter((j) => j.is_active === "1")); setMeta(data.meta); }
            else throw new Error(data.message || "Gagal memuat data.");
        } catch (e: unknown) { setError(e instanceof Error ? e.message : "Gagal memuat."); }
        finally { setIsLoading(false); }
    }, []);

    useEffect(() => { fetchJobs(page); }, [page, fetchJobs]);

    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#6db33f]/5 via-white to-[#1a4d8c]/5">
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#6db33f]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1a4d8c]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#00a8b5]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#d4a24c]/10 rounded-full blur-2xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-12 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#6db33f]/10 to-[#00a8b5]/10 rounded-full mb-6 md:mb-8 border border-[#6db33f]/20">
                                <Sparkles className="w-4 h-4 text-[#6db33f]" />
                                <span className="text-sm font-semibold text-[#6db33f]">Join Our Team</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black mb-4 md:mb-6">
                                Build a{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6db33f] via-[#00a8b5] to-[#1a4d8c]">
                                    Sustainable Career
                                </span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-lg">
                                At Talenvyra, we facilitate long-term growth for both talent and companies. Our ecosystem is designed to focus on human potential, ensuring your career aligns with your goals.
                            </p>
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                                {[
                                    { icon: TrendingUp, label: "Career Growth", sub: "Clear progression paths", cls: "bg-[#6db33f]/10 text-[#6db33f]" },
                                    { icon: Users, label: "Great Team", sub: "Collaborative culture", cls: "bg-[#1a4d8c]/10 text-[#1a4d8c]" },
                                    { icon: Target, label: "Skill Development", sub: "Continuous learning", cls: "bg-[#00a8b5]/10 text-[#00a8b5]" },
                                    { icon: Heart, label: "Work-Life Balance", sub: "Flexible environment", cls: "bg-[#d4a24c]/10 text-[#d4a24c]" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                        <div className={`w-10 h-10 ${item.cls} rounded-lg flex items-center justify-center flex-shrink-0`}><item.icon className="w-5 h-5" /></div>
                                        <div><div className="text-sm font-bold text-gray-900">{item.label}</div><div className="text-xs text-gray-500">{item.sub}</div></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] p-4 sm:p-6 rounded-2xl shadow-xl">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Start Your Journey Today</h3>
                                <p className="text-sm text-white/80 mb-4">Ready to accelerate your career? Join our ecosystem.</p>
                                <div className="flex flex-col gap-4">
                                    <a href="https://bit.ly/TalenvyraRecruitment" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1a4d8c] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit">
                                        <Mail className="w-4 h-4" />Submit Your Resume<ArrowRight className="w-4 h-4" />
                                    </a>
                                    <p className="text-sm text-white/80">or email to{" "}
                                        <a href="mailto:recruit@talenvyra.com" className="text-white underline hover:text-white/90 transition-colors">recruit@talenvyra.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                    <Image src="https://strapi.ackerlabs.my.id/uploads/portrait_man_smiling_camera_while_colleagues_working_ba_e7bc4d50d4.jpg"
                                        alt="Join Talenvyra Career" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#6db33f]/30 via-transparent to-transparent" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-xl flex items-center justify-center"><TrendingUp className="w-7 h-7 text-white" /></div>
                                        <div><div className="text-lg font-bold text-gray-900">500+</div><div className="text-sm text-gray-500">Careers Launched</div></div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#6db33f] rounded-full animate-pulse" />
                                        <span className="text-sm font-bold text-gray-700">We&apos;re Hiring!</span>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block">
                                    <div className="space-y-2">
                                        {["Growth Opportunities", "Mentorship Programs", "Flexible Work"].map((t, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#6db33f]" /><span className="text-xs font-medium text-gray-600">{t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Job Openings */}
            <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-[#6db33f]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1a4d8c]/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a4d8c]/10 to-[#00a8b5]/10 rounded-full mb-4 border border-[#1a4d8c]/20">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6db33f] opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6db33f]" />
                            </span>
                            <span className="text-sm font-semibold text-[#1a4d8c]">Now Hiring</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4d8c] via-[#00a8b5] to-[#6db33f]">Positions</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover exciting opportunities and take the next step in your career journey.
                        </p>
                        {meta && <p className="text-sm text-gray-400 mt-2">{meta.total} posisi tersedia</p>}
                    </div>

                    {/* Loading */}
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="w-12 h-12 border-4 border-[#1a4d8c]/20 border-t-[#1a4d8c] rounded-full animate-spin" />
                            <p className="text-gray-500">Memuat lowongan pekerjaan...</p>
                        </div>
                    )}

                    {/* Error */}
                    {!isLoading && error && (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 max-w-md w-full">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                            <button onClick={() => fetchJobs(page)} className="px-5 py-2.5 bg-[#1a4d8c] text-white rounded-xl text-sm font-medium hover:bg-[#1a4d8c]/90 transition-colors">Coba lagi</button>
                        </div>
                    )}

                    {/* Empty */}
                    {!isLoading && !error && jobs.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center"><Building2 className="w-8 h-8 text-gray-400" /></div>
                            <p className="text-gray-600 font-semibold">Belum ada lowongan aktif saat ini</p>
                            <p className="text-sm text-gray-400">Pantau terus halaman ini!</p>
                        </div>
                    )}

                    {/* Job Cards Grid */}
                    {!isLoading && !error && jobs.length > 0 && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {jobs.map((job, idx) => {
                                    const color = CARD_COLORS[idx % CARD_COLORS.length];
                                    const techStack = parseList(job.tech_stack);
                                    return (
                                        <Link
                                            key={job.id}
                                            href={`/detail-job?id=${job.id}`}
                                            className={`group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${color.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block`}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className={`px-3 py-1 ${color.badge} text-xs font-bold rounded-full`}>{fmtType(job.employment_type)}</span>
                                                    <span className="text-xs text-gray-400 font-medium">{fmtPosted(job.posted_at)}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#1a4d8c] transition-colors line-clamp-2">{job.title}</h3>
                                                <p className="text-sm text-gray-500 mb-4">{job.department}</p>
                                                <p className="text-sm text-gray-600 mb-5 line-clamp-3">{job.description}</p>
                                                {techStack.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-5">
                                                        {techStack.slice(0, 4).map((t, i) => (
                                                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{t}</span>
                                                        ))}
                                                        {techStack.length > 4 && <span className="px-2 py-1 bg-gray-100 text-gray-400 text-xs rounded-md">+{techStack.length - 4}</span>}
                                                    </div>
                                                )}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-1.5 text-xs text-gray-500"><MapPin className="w-3.5 h-3.5" />{job.location || "-"}</div>
                                                        <div className="flex items-center gap-1.5 text-xs text-gray-500"><Monitor className="w-3.5 h-3.5" />{fmtMode(job.work_mode)}</div>
                                                    </div>
                                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a4d8c] group-hover:text-[#00a8b5] transition-colors">
                                                        View Details<ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            {meta && meta.total_pages > 1 && (
                                <div className="flex items-center justify-center gap-3 mt-12">
                                    <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm">
                                        <ChevronLeft className="w-4 h-4" />Sebelumnya
                                    </button>
                                    <div className="flex items-center gap-2">
                                        {Array.from({ length: meta.total_pages }, (_, i) => i + 1).map((p) => (
                                            <button key={p} onClick={() => setPage(p)}
                                                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${p === page ? "bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white shadow-lg" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={() => setPage((p) => Math.min(meta!.total_pages, p + 1))} disabled={page === meta.total_pages}
                                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm">
                                        Selanjutnya<ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {/* CTA bottom */}
                    <div className="text-center mt-12 md:mt-16">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#1a4d8c]/5 via-[#00a8b5]/5 to-[#6db33f]/5 rounded-2xl border border-gray-200">
                            <p className="text-gray-700 font-medium">Don&apos;t see a position that fits? We&apos;re always looking for talent!</p>
                            <a href="https://bit.ly/TalenvyraRecruitment" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#1a4d8c]/25 transition-all duration-300">
                                <Mail className="w-4 h-4" />Send Open Application<ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
