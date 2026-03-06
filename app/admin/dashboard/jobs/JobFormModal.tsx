"use client";

import { useState, useRef, useEffect } from "react";
import { X, Plus, Briefcase, MapPin, Clock, Monitor, ChevronDown, AlertCircle, Tag } from "lucide-react";

export interface JobFormData {
    title: string;
    description: string;
    location: string;
    employment_type: string;
    department: string;
    work_mode: string;
    posted_at: string;
    is_active: number;
    job_description: string;
    responsibilities: string[];
    requirements_must_have: string[];
    requirements_nice_to_have: string[];
    tech_stack: string[];
}

interface Props {
    mode: "add" | "edit";
    initialData?: Partial<JobFormData>;
    jobId?: string;
    onClose: () => void;
    onSuccess: () => void;
}

const EMPTY: JobFormData = {
    title: "", description: "", location: "",
    employment_type: "full-time", department: "",
    work_mode: "hybrid",
    posted_at: new Date().toISOString().slice(0, 16).replace("T", " "),
    is_active: 1, job_description: "",
    responsibilities: [], requirements_must_have: [],
    requirements_nice_to_have: [], tech_stack: [],
};

// ─── TagListInput ────────────────────────────────────────────────────────────
function TagListInput({ label, values, onChange, placeholder }: {
    label: string; values: string[]; onChange: (v: string[]) => void; placeholder?: string;
}) {
    const [input, setInput] = useState("");
    const ref = useRef<HTMLInputElement>(null);

    const add = () => {
        const v = input.trim();
        if (v) onChange([...values.filter(Boolean), v]);
        setInput("");
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="min-h-[44px] flex flex-wrap gap-2 p-2 bg-gray-50 border border-gray-200 rounded-xl cursor-text"
                onClick={() => ref.current?.focus()}>
                {values.filter(Boolean).map((v, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-[#1a4d8c]/10 text-[#1a4d8c] text-xs font-medium rounded-full">
                        {v}
                        <button type="button" onClick={(e) => { e.stopPropagation(); onChange(values.filter((_, j) => j !== i)); }}
                            className="hover:text-red-500 transition-colors">
                            <X className="w-3 h-3" />
                        </button>
                    </span>
                ))}
                <input ref={ref} type="text" value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
                    onBlur={add}
                    placeholder={placeholder ?? "Ketik lalu Enter"}
                    className="flex-1 min-w-[120px] bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400" />
            </div>
            <p className="text-xs text-gray-400 mt-1">Tekan Enter untuk menambahkan</p>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function JobFormModal({ mode, initialData, jobId, onClose, onSuccess }: Props) {
    const [form, setForm] = useState<JobFormData>({ ...EMPTY, ...initialData });
    const [activeTab, setActiveTab] = useState<"basic" | "detail">("basic");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (initialData) setForm({ ...EMPTY, ...initialData });
    }, [initialData]);

    const set = <K extends keyof JobFormData>(k: K, v: JobFormData[K]) =>
        setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setIsSubmitting(true);

        try {
            const token = localStorage.getItem("adminToken");
            const tokenType = localStorage.getItem("adminTokenType") || "Bearer";
            const headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `${tokenType} ${token}`,
            };

            let body: Partial<JobFormData>;
            let url: string;
            let method: string;

            if (mode === "add") {
                url = "https://talenvyra.com/api/index.php/api/jobs";
                method = "POST";
                body = {
                    ...form,
                    responsibilities: form.responsibilities.filter(Boolean),
                    requirements_must_have: form.requirements_must_have.filter(Boolean),
                    requirements_nice_to_have: form.requirements_nice_to_have.filter(Boolean),
                    tech_stack: form.tech_stack.filter(Boolean),
                };
            } else {
                // PUT: only send changed fields vs initialData
                url = `https://talenvyra.com/api/index.php/api/jobs/${jobId}`;
                method = "PUT";
                const orig = { ...EMPTY, ...initialData } as JobFormData;
                body = {};
                (Object.keys(form) as (keyof JobFormData)[]).forEach((k) => {
                    const fv = form[k];
                    const ov = orig[k];
                    if (Array.isArray(fv)) {
                        const fArr = (fv as string[]).filter(Boolean);
                        const oArr = (ov as string[]).filter(Boolean);
                        if (JSON.stringify(fArr) !== JSON.stringify(oArr)) {
                            (body as Record<string, unknown>)[k] = fArr;
                        }
                    } else if (fv !== ov) {
                        (body as Record<string, unknown>)[k] = fv;
                    }
                });
            }

            const res = await fetch(url, { method, headers, body: JSON.stringify(body) });
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.message || `HTTP ${res.status}`);
            }
            const data = await res.json();
            if (data.status === true) {
                setSubmitSuccess(true);
                onSuccess();
                setTimeout(() => onClose(), 1500);
            } else {
                throw new Error(data.message || "Operasi gagal.");
            }
        } catch (err: unknown) {
            setSubmitError(err instanceof Error ? err.message : "Terjadi kesalahan.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputCls = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4d8c]/30 focus:border-[#1a4d8c] transition-all";
    const isEdit = mode === "edit";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !isSubmitting && onClose()} />
            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${isEdit ? "from-[#d4a24c] to-[#a83279]" : "from-[#6db33f] to-[#00a8b5]"}`}>
                            <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{isEdit ? "Edit Job" : "Add New Job"}</h2>
                            <p className="text-xs text-gray-500">{isEdit ? `Editing: ${initialData?.title ?? ""}` : "Isi semua informasi lowongan kerja"}</p>
                        </div>
                    </div>
                    <button onClick={() => !isSubmitting && onClose()} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 flex-shrink-0 px-6">
                    {(["basic", "detail"] as const).map((tab) => (
                        <button key={tab} type="button" onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${activeTab === tab ? "border-[#1a4d8c] text-[#1a4d8c]" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
                            {tab === "basic" ? "📋 Info Dasar" : "📝 Detail Pekerjaan"}
                        </button>
                    ))}
                </div>

                {/* Banners */}
                {submitSuccess && (
                    <div className="mx-6 mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex-shrink-0">
                        <span className="text-green-600 text-sm font-medium">✅ {isEdit ? "Job berhasil diupdate!" : "Job berhasil ditambahkan!"} Menutup...</span>
                    </div>
                )}
                {submitError && (
                    <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-red-600 text-sm">{submitError}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

                        {activeTab === "basic" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title <span className="text-red-500">*</span></label>
                                    <input type="text" required value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="e.g. Backend Developer" className={inputCls} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat <span className="text-red-500">*</span></label>
                                    <textarea required rows={3} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Deskripsi singkat tentang posisi ini..." className={inputCls + " resize-none"} />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                        <input type="text" value={form.department} onChange={(e) => set("department", e.target.value)} placeholder="e.g. Engineering" className={inputCls} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1"><MapPin className="inline w-3.5 h-3.5 mr-1 text-gray-400" />Lokasi</label>
                                        <input type="text" value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="e.g. Jakarta, Indonesia" className={inputCls} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1"><Clock className="inline w-3.5 h-3.5 mr-1 text-gray-400" />Employment Type</label>
                                        <div className="relative">
                                            <select value={form.employment_type} onChange={(e) => set("employment_type", e.target.value)} className={inputCls + " appearance-none"}>
                                                <option value="full-time">Full-Time</option>
                                                <option value="part-time">Part-Time</option>
                                                <option value="contract">Contract</option>
                                                <option value="internship">Internship</option>
                                                <option value="freelance">Freelance</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1"><Monitor className="inline w-3.5 h-3.5 mr-1 text-gray-400" />Work Mode</label>
                                        <div className="relative">
                                            <select value={form.work_mode} onChange={(e) => set("work_mode", e.target.value)} className={inputCls + " appearance-none"}>
                                                <option value="hybrid">Hybrid</option>
                                                <option value="remote">Remote</option>
                                                <option value="onsite">On-Site</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Posted At</label>
                                        <input type="datetime-local" value={form.posted_at.replace(" ", "T")} onChange={(e) => set("posted_at", e.target.value.replace("T", " "))} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="flex gap-3 pt-1">
                                            {[{ val: 1, label: "Active", dot: "bg-green-500" }, { val: 0, label: "Inactive", dot: "bg-gray-400" }].map((s) => (
                                                <button key={s.val} type="button" onClick={() => set("is_active", s.val)}
                                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${form.is_active === s.val ? "border-[#1a4d8c] bg-[#1a4d8c]/5 text-[#1a4d8c]" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>
                                                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />{s.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === "detail" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Description (ringkasan)</label>
                                    <textarea rows={3} value={form.job_description} onChange={(e) => set("job_description", e.target.value)} placeholder="Ringkasan deskripsi pekerjaan..." className={inputCls + " resize-none"} />
                                </div>
                                <TagListInput label="Responsibilities" values={form.responsibilities} onChange={(v) => set("responsibilities", v)} placeholder="e.g. Merancang REST API" />
                                <TagListInput label="Requirements (Must Have)" values={form.requirements_must_have} onChange={(v) => set("requirements_must_have", v)} placeholder="e.g. 2 tahun pengalaman PHP" />
                                <TagListInput label="Requirements (Nice to Have)" values={form.requirements_nice_to_have} onChange={(v) => set("requirements_nice_to_have", v)} placeholder="e.g. Familiar dengan Docker" />
                                <TagListInput label="Tech Stack" values={form.tech_stack} onChange={(v) => set("tech_stack", v)} placeholder="e.g. PHP, MySQL" />
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-shrink-0 bg-gray-50/50">
                        <div className="flex gap-2">
                            {(["basic", "detail"] as const).map((tab, i) => (
                                <button key={tab} type="button" onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1.5 text-xs rounded-lg transition-all ${activeTab === tab ? "bg-[#1a4d8c] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}>
                                    {i + 1}. {tab === "basic" ? "Info Dasar" : "Detail"}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <button type="button" onClick={() => !isSubmitting && onClose()} disabled={isSubmitting}
                                className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50">
                                Batal
                            </button>
                            {activeTab === "basic" ? (
                                <button type="button" onClick={() => setActiveTab("detail")}
                                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] rounded-xl hover:opacity-90 transition-all shadow">
                                    Lanjut →
                                </button>
                            ) : (
                                <button type="submit" disabled={isSubmitting || submitSuccess}
                                    className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all shadow disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r ${isEdit ? "from-[#d4a24c] to-[#a83279]" : "from-[#6db33f] to-[#00a8b5]"}`}>
                                    {isSubmitting ? (
                                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Menyimpan...</>
                                    ) : submitSuccess ? "✅ Tersimpan!" : (
                                        <><Plus className="w-4 h-4" />{isEdit ? "Update Job" : "Simpan Job"}</>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
