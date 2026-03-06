"use client";

import { X, MapPin, Clock, Building2, Monitor, Briefcase, Tag } from "lucide-react";

interface Job {
    id: string;
    title: string;
    slug: string;
    description: string;
    location: string;
    employment_type: string;
    department: string;
    work_mode: string;
    posted_at: string;
    is_active: string;
    job_description: string;
    responsibilities: string;
    requirements_must_have: string;
    requirements_nice_to_have: string;
    tech_stack: string;
    created_at: string;
    updated_at: string;
}

function parseList(raw: string): string[] {
    try { return JSON.parse(raw) as string[]; } catch { return []; }
}

function Badge({ text, color }: { text: string; color: string }) {
    return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${color}`}>{text}</span>;
}

export default function JobViewModal({ job, onClose }: { job: Job; onClose: () => void }) {
    const fmtType = (t: string) => ({ "full-time": "Full-Time", "part-time": "Part-Time", contract: "Contract", internship: "Internship", freelance: "Freelance" }[t?.toLowerCase()] ?? t ?? "-");
    const fmtMode = (m: string) => ({ remote: "Remote", onsite: "On-Site", hybrid: "Hybrid" }[m?.toLowerCase()] ?? m ?? "-");
    const typeColor = (t: string) => ({ "full-time": "bg-[#6db33f]/10 text-[#6db33f]", "part-time": "bg-[#00a8b5]/10 text-[#00a8b5]", contract: "bg-[#d4a24c]/10 text-[#d4a24c]", internship: "bg-[#a83279]/10 text-[#a83279]" }[t?.toLowerCase()] ?? "bg-gray-100 text-gray-700");
    const modeColor = (m: string) => ({ remote: "bg-blue-50 text-blue-600", onsite: "bg-orange-50 text-orange-600", hybrid: "bg-purple-50 text-purple-600" }[m?.toLowerCase()] ?? "bg-gray-100 text-gray-600");

    const responsibilities = parseList(job.responsibilities);
    const mustHave = parseList(job.requirements_must_have);
    const niceHave = parseList(job.requirements_nice_to_have);
    const techStack = parseList(job.tech_stack);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
                    <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${job.is_active === "1" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                {job.is_active === "1" ? "● Active" : "● Inactive"}
                            </span>
                            <span className="text-xs text-gray-400">ID #{job.id}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                        <p className="text-sm text-gray-500 mt-0.5">/{job.slug}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-all flex-shrink-0">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-2">
                        <Badge text={fmtType(job.employment_type)} color={typeColor(job.employment_type)} />
                        <Badge text={fmtMode(job.work_mode)} color={modeColor(job.work_mode)} />
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            <Building2 className="w-3 h-3" />{job.department || "-"}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            <MapPin className="w-3 h-3" />{job.location || "-"}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            <Clock className="w-3 h-3" />{job.posted_at?.slice(0, 10) || "-"}
                        </span>
                    </div>

                    {/* Description */}
                    {job.description && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-gray-400" />Deskripsi</h3>
                            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-4">{job.description}</p>
                        </div>
                    )}

                    {/* Job Description */}
                    {job.job_description && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">📋 Job Description</h3>
                            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-4">{job.job_description}</p>
                        </div>
                    )}

                    {/* Responsibilities */}
                    {responsibilities.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">📌 Responsibilities</h3>
                            <ul className="space-y-1.5">
                                {responsibilities.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6db33f] flex-shrink-0" />{r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Must Have */}
                    {mustHave.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">✅ Requirements (Must Have)</h3>
                            <ul className="space-y-1.5">
                                {mustHave.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a4d8c] flex-shrink-0" />{r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Nice to Have */}
                    {niceHave.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">💡 Requirements (Nice to Have)</h3>
                            <ul className="space-y-1.5">
                                {niceHave.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00a8b5] flex-shrink-0" />{r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {techStack.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5"><Tag className="w-4 h-4 text-gray-400" />Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#1a4d8c]/10 text-[#1a4d8c] text-xs font-medium rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer dates */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                        <div>
                            <p className="text-xs text-gray-400">Created At</p>
                            <p className="text-sm text-gray-600 font-medium">{job.created_at?.slice(0, 16) || "-"}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Updated At</p>
                            <p className="text-sm text-gray-600 font-medium">{job.updated_at?.slice(0, 16) || "-"}</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 flex justify-end bg-gray-50/50 flex-shrink-0">
                    <button onClick={onClose} className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all">
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}
