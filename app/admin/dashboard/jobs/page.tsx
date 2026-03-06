"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard, Briefcase, Users, Settings, LogOut,
    Menu, X, Plus, Search, Edit, Trash2, Eye, Bell, FileText,
    MapPin, Clock, RefreshCw, AlertCircle, Building2, Monitor,
} from "lucide-react";
import JobViewModal from "./JobViewModal";
import JobFormModal, { type JobFormData } from "./JobFormModal";

interface Job {
    id: string; title: string; slug: string; description: string;
    location: string; employment_type: string; department: string;
    work_mode: string; posted_at: string; is_active: string;
    job_description: string; responsibilities: string;
    requirements_must_have: string; requirements_nice_to_have: string;
    tech_stack: string; created_at: string; updated_at: string;
}
interface Meta { total: number; page: number; limit: number; total_pages: number; }

function parseList(raw: string): string[] {
    try { return JSON.parse(raw) as string[]; } catch { return []; }
}

function jobToFormData(job: Job): JobFormData {
    return {
        title: job.title, description: job.description,
        location: job.location, employment_type: job.employment_type,
        department: job.department, work_mode: job.work_mode,
        posted_at: job.posted_at, is_active: job.is_active === "1" ? 1 : 0,
        job_description: job.job_description,
        responsibilities: parseList(job.responsibilities),
        requirements_must_have: parseList(job.requirements_must_have),
        requirements_nice_to_have: parseList(job.requirements_nice_to_have),
        tech_stack: parseList(job.tech_stack),
    };
}

const AUTH_KEYS = ["isAdminLoggedIn", "adminToken", "adminTokenType", "adminTokenExpires", "adminUser"];
const API = "https://talenvyra.com/api/index.php/api/jobs";

export default function ManageJobsPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [meta, setMeta] = useState<Meta | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Modal state
    const [viewJob, setViewJob] = useState<Job | null>(null);
    const [formMode, setFormMode] = useState<"add" | "edit" | null>(null);
    const [editJobId, setEditJobId] = useState<string | null>(null);
    const [editInitial, setEditInitial] = useState<Partial<JobFormData> | undefined>(undefined);
    const [isFetchingJob, setIsFetchingJob] = useState(false);

    // Delete state
    const [deleteTarget, setDeleteTarget] = useState<Job | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const getAuth = () => ({
        token: localStorage.getItem("adminToken"),
        tokenType: localStorage.getItem("adminTokenType") || "Bearer",
    });

    const clearAuth = () => AUTH_KEYS.forEach((k) => localStorage.removeItem(k));

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
        const exp = localStorage.getItem("adminTokenExpires");
        if (isLoggedIn !== "true" || (exp && Date.now() > Number(exp))) {
            clearAuth(); router.push("/admin");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    useEffect(() => { if (isAuthenticated) fetchJobs(currentPage); }, [isAuthenticated, currentPage]);

    const fetchJobs = async (page = 1) => {
        setIsLoading(true); setError(null);
        try {
            const { token, tokenType } = getAuth();
            const res = await fetch(`${API}?page=${page}&limit=20`, {
                headers: { Accept: "application/json", Authorization: `${tokenType} ${token}` },
            });
            if (res.status === 401) { clearAuth(); router.push("/admin"); return; }
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (data.status) { setJobs(data.data || []); setMeta(data.meta || null); }
            else throw new Error(data.message || "Gagal memuat data.");
        } catch (e: unknown) { setError(e instanceof Error ? e.message : "Gagal memuat."); }
        finally { setIsLoading(false); }
    };

    const fetchJobById = async (id: string): Promise<Job | null> => {
        const { token, tokenType } = getAuth();
        const res = await fetch(`${API}/${id}`, {
            headers: { Accept: "application/json", Authorization: `${tokenType} ${token}` },
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.status ? (data.data as Job) : null;
    };

    const handleView = async (job: Job) => {
        setIsFetchingJob(true);
        const full = await fetchJobById(job.id);
        setIsFetchingJob(false);
        setViewJob(full ?? job);
    };

    const handleEdit = async (job: Job) => {
        setIsFetchingJob(true);
        const full = await fetchJobById(job.id);
        setIsFetchingJob(false);
        setEditJobId(job.id);
        setEditInitial(jobToFormData(full ?? job));
        setFormMode("edit");
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setIsDeleting(true); setDeleteError(null);
        try {
            const { token, tokenType } = getAuth();
            const res = await fetch(`${API}/${deleteTarget.id}`, {
                method: "DELETE",
                headers: { Accept: "application/json", Authorization: `${tokenType} ${token}` },
            });
            if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.message || `HTTP ${res.status}`); }
            const data = await res.json();
            if (data.status) { setDeleteTarget(null); fetchJobs(currentPage); }
            else throw new Error(data.message || "Gagal menghapus.");
        } catch (e: unknown) { setDeleteError(e instanceof Error ? e.message : "Gagal menghapus."); }
        finally { setIsDeleting(false); }
    };

    const handleLogout = () => { clearAuth(); router.push("/admin"); };

    // ── display helpers ────────────────────────────────────────────────────────
    const fmtType = (t: string) => ({ "full-time": "Full-Time", "part-time": "Part-Time", contract: "Contract", internship: "Internship", freelance: "Freelance" }[t?.toLowerCase()] ?? t ?? "-");
    const fmtMode = (m: string) => ({ remote: "Remote", onsite: "On-Site", hybrid: "Hybrid" }[m?.toLowerCase()] ?? m ?? "-");
    const fmtPosted = (d: string) => {
        if (!d) return "-";
        const diff = Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
        if (diff === 0) return "Today"; if (diff === 1) return "1 day ago";
        if (diff < 7) return `${diff} days ago`; if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
        return `${Math.floor(diff / 30)}mo ago`;
    };
    const typeColor = (t: string) => ({ "full-time": "bg-[#6db33f]/10 text-[#6db33f]", "part-time": "bg-[#00a8b5]/10 text-[#00a8b5]", contract: "bg-[#d4a24c]/10 text-[#d4a24c]", internship: "bg-[#a83279]/10 text-[#a83279]" }[t?.toLowerCase()] ?? "bg-gray-100 text-gray-700");
    const modeColor = (m: string) => ({ remote: "bg-blue-50 text-blue-600", onsite: "bg-orange-50 text-orange-600", hybrid: "bg-purple-50 text-purple-600" }[m?.toLowerCase()] ?? "bg-gray-100 text-gray-600");

    const filteredJobs = jobs.filter((j) =>
        [j.title, j.department, j.location].some((f) => f?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard", active: false },
        { icon: Briefcase, label: "Manage Job Opening", href: "/admin/dashboard/jobs", active: true },
        { icon: Users, label: "Applicants", href: "/admin/dashboard/applicants", active: false },
        { icon: FileText, label: "Applications", href: "/admin/dashboard/applications", active: false },
        { icon: Settings, label: "Settings", href: "/admin/dashboard/settings", active: false },
    ];

    if (!isAuthenticated) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-[#1a4d8c]/30 border-t-[#1a4d8c] rounded-full animate-spin" />
        </div>
    );

    const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
        <>
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item, i) => (
                    <Link key={i} href={item.href}
                        onClick={() => mobile && setIsMobileSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? "bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white shadow-lg" : "text-gray-600 hover:bg-gray-100"}`}>
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-100">
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    <LogOut className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${isSidebarOpen ? "w-64" : "w-20"}`}>
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">U</span>
                        </div>
                        {isSidebarOpen && <div><h1 className="font-bold text-gray-900">Dashboard Uye</h1><p className="text-xs text-gray-500">V.1.0</p></div>}
                    </div>
                </div>
                {isSidebarOpen ? <SidebarContent /> : (
                    <>
                        <nav className="flex-1 p-4 space-y-2">
                            {menuItems.map((item, i) => (
                                <Link key={i} href={item.href}
                                    className={`flex items-center justify-center p-3 rounded-xl transition-all ${item.active ? "bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white shadow-lg" : "text-gray-600 hover:bg-gray-100"}`}>
                                    <item.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-gray-100">
                            <button onClick={handleLogout} className="flex items-center justify-center p-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </>
                )}
            </aside>

            {/* Mobile Sidebar */}
            {isMobileSidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileSidebarOpen(false)} />}
            <aside className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-end">
                    <button onClick={() => setIsMobileSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5 text-gray-600" /></button>
                </div>
                <div className="px-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">U</span>
                        </div>
                        <div><h1 className="font-bold text-gray-900">Dashboard Uye</h1><p className="text-xs text-gray-500">V.1.0</p></div>
                    </div>
                </div>
                <SidebarContent mobile />
            </aside>

            {/* Main */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
                <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsMobileSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"><Menu className="w-5 h-5 text-gray-600" /></button>
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg"><Menu className="w-5 h-5 text-gray-600" /></button>
                            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search jobs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent border-none outline-none text-sm text-gray-600 w-48" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">A</span>
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-semibold text-gray-900">Admin</p>
                                    <p className="text-xs text-gray-500">Administrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-6">
                    {/* Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Manage Job Opening</h1>
                            <p className="text-gray-500 mt-1">{meta ? `${meta.total} job opening tersedia` : "Manage job postings"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {isFetchingJob && <div className="w-5 h-5 border-2 border-[#1a4d8c]/20 border-t-[#1a4d8c] rounded-full animate-spin" />}
                            <button onClick={() => fetchJobs(currentPage)} disabled={isLoading}
                                className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50">
                                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />Refresh
                            </button>
                            <button onClick={() => setFormMode("add")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6db33f] to-[#00a8b5] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg">
                                <Plus className="w-5 h-5" />Add New Job
                            </button>
                        </div>
                    </div>

                    {/* Mobile search */}
                    <div className="md:hidden mb-4 flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search jobs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent border-none outline-none text-sm text-gray-600 flex-1" />
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <p className="text-sm text-red-600 flex-1">{error}</p>
                            <button onClick={() => fetchJobs(currentPage)} className="text-sm text-red-500 underline hover:text-red-700">Coba lagi</button>
                        </div>
                    )}

                    {/* Table */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
                            <div className="col-span-4">Job Title</div>
                            <div className="col-span-2">Type</div>
                            <div className="col-span-2">Work Mode</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1 text-center">Posted</div>
                            <div className="col-span-2 text-right">Actions</div>
                        </div>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <div className="w-10 h-10 border-4 border-[#1a4d8c]/20 border-t-[#1a4d8c] rounded-full animate-spin" />
                                <p className="text-sm text-gray-500">Memuat data job opening...</p>
                            </div>
                        ) : filteredJobs.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                                    <Briefcase className="w-8 h-8 text-gray-400" />
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-700 font-semibold">{searchQuery ? "Tidak ada hasil pencarian" : "Belum ada job opening"}</p>
                                    <p className="text-sm text-gray-400 mt-1">{searchQuery ? `"${searchQuery}" tidak ditemukan` : 'Klik "Add New Job" untuk menambahkan.'}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {filteredJobs.map((job) => (
                                    <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors items-center">
                                        <div className="md:col-span-4">
                                            <h3 className="font-semibold text-gray-900">{job.title}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Building2 className="w-3.5 h-3.5 text-gray-400" />
                                                <p className="text-sm text-gray-500">{job.department}</p>
                                                <span className="text-gray-300">•</span>
                                                <Clock className="w-3.5 h-3.5 text-gray-400" />
                                                <p className="text-sm text-gray-400">{fmtPosted(job.posted_at)}</p>
                                            </div>
                                            <div className="flex items-center gap-1 mt-1">
                                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                                <p className="text-xs text-gray-400">{job.location}</p>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColor(job.employment_type)}`}>
                                                <Clock className="w-3 h-3 mr-1" />{fmtType(job.employment_type)}
                                            </span>
                                        </div>
                                        <div className="md:col-span-2">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${modeColor(job.work_mode)}`}>
                                                <Monitor className="w-3 h-3 mr-1" />{fmtMode(job.work_mode)}
                                            </span>
                                        </div>
                                        <div className="md:col-span-1">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${job.is_active === "1" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1 ${job.is_active === "1" ? "bg-green-500" : "bg-gray-400"}`} />
                                                {job.is_active === "1" ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                        <div className="md:col-span-1 text-center">
                                            <span className="text-xs text-gray-500 font-medium">{fmtPosted(job.posted_at)}</span>
                                        </div>
                                        <div className="md:col-span-2 flex items-center justify-end gap-1">
                                            <button onClick={() => handleView(job)} title="Lihat"
                                                className="p-2 hover:bg-[#1a4d8c]/10 rounded-lg text-gray-400 hover:text-[#1a4d8c] transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleEdit(job)} title="Edit"
                                                className="p-2 hover:bg-[#6db33f]/10 rounded-lg text-gray-400 hover:text-[#6db33f] transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => { setDeleteTarget(job); setDeleteError(null); }} title="Hapus"
                                                className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {!isLoading && meta && meta.total_pages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                                <p className="text-sm text-gray-500">Halaman {meta.page} dari {meta.total_pages} ({meta.total} total)</p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-40 transition-all">Sebelumnya</button>
                                    <button onClick={() => setCurrentPage((p) => Math.min(meta!.total_pages, p + 1))} disabled={currentPage === meta.total_pages}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-40 transition-all">Selanjutnya</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* ── View Modal ── */}
            {viewJob && <JobViewModal job={viewJob} onClose={() => setViewJob(null)} />}

            {/* ── Add / Edit Modal ── */}
            {formMode && (
                <JobFormModal
                    mode={formMode}
                    jobId={editJobId ?? undefined}
                    initialData={formMode === "edit" ? editInitial : undefined}
                    onClose={() => { setFormMode(null); setEditJobId(null); setEditInitial(undefined); }}
                    onSuccess={() => fetchJobs(currentPage)}
                />
            )}

            {/* ── Delete Confirmation ── */}
            {deleteTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !isDeleting && setDeleteTarget(null)} />
                    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-6">
                            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Trash2 className="w-7 h-7 text-red-500" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900 text-center mb-1">Hapus Job Opening?</h2>
                            <p className="text-sm text-gray-500 text-center mb-1">
                                Anda akan menghapus <span className="font-semibold text-gray-700">&quot;{deleteTarget.title}&quot;</span>.
                            </p>
                            <p className="text-xs text-gray-400 text-center mb-5">Tindakan ini tidak dapat dibatalkan.</p>

                            {deleteError && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                    <span className="text-red-600 text-sm">{deleteError}</span>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button onClick={() => setDeleteTarget(null)} disabled={isDeleting}
                                    className="flex-1 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50">
                                    Batal
                                </button>
                                <button onClick={handleDelete} disabled={isDeleting}
                                    className="flex-1 py-3 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2">
                                    {isDeleting ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Menghapus...</> : "Ya, Hapus"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
