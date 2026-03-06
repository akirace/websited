"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    Briefcase,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Bell,
    Search,
    TrendingUp,
    UserCheck,
    FileText
} from "lucide-react";

interface AdminUser {
    id: number;
    username: string;
    email: string;
    role: string;
}

export default function AdminDashboardPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

    useEffect(() => {
        // Check authentication
        if (typeof window !== 'undefined') {
            const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
            const tokenExpires = localStorage.getItem("adminTokenExpires");
            const isExpired = tokenExpires ? Date.now() > Number(tokenExpires) : false;

            if (isLoggedIn !== "true" || isExpired) {
                // Clear expired session
                localStorage.removeItem("isAdminLoggedIn");
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminTokenType");
                localStorage.removeItem("adminTokenExpires");
                localStorage.removeItem("adminUser");
                router.push("/admin");
            } else {
                setIsAuthenticated(true);
                // Load user data
                const userRaw = localStorage.getItem("adminUser");
                if (userRaw) {
                    try {
                        setAdminUser(JSON.parse(userRaw));
                    } catch {
                        // ignore parse error
                    }
                }
            }
        }
    }, [router]);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("isAdminLoggedIn");
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminTokenType");
            localStorage.removeItem("adminTokenExpires");
            localStorage.removeItem("adminUser");
        }
        router.push("/admin");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-8 h-8 border-4 border-[#1a4d8c]/30 border-t-[#1a4d8c] rounded-full animate-spin"></div>
            </div>
        );
    }

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard", active: true },
        { icon: Briefcase, label: "Manage Job Opening", href: "/admin/dashboard/jobs", active: false },
        { icon: Users, label: "Applicants", href: "/admin/dashboard/applicants", active: false },
        { icon: FileText, label: "Applications", href: "/admin/dashboard/applications", active: false },
        { icon: Settings, label: "Settings", href: "/admin/dashboard/settings", active: false },
    ];

    const statsCards = [
        { icon: Briefcase, label: "Total Jobs", value: "6", change: "+2 this month", color: "from-[#6db33f] to-[#00a8b5]" },
        { icon: Users, label: "Total Applicants", value: "148", change: "+23 this week", color: "from-[#1a4d8c] to-[#00a8b5]" },
        { icon: UserCheck, label: "Hired", value: "12", change: "+3 this month", color: "from-[#00a8b5] to-[#6db33f]" },
        { icon: TrendingUp, label: "Conversion Rate", value: "8.1%", change: "+1.2%", color: "from-[#a83279] to-[#d4a24c]" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Desktop */}
            <aside className={`hidden lg:flex flex-col fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                {/* Logo */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">U</span>
                        </div>
                        {isSidebarOpen && (
                            <div>
                                <h1 className="font-bold text-gray-900">Dashboard Uye</h1>
                                <p className="text-xs text-gray-500">V.1.0</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                                ? 'bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileSidebarOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <aside className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Close Button */}
                <div className="p-4 flex justify-end">
                    <button onClick={() => setIsMobileSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Logo */}
                <div className="px-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1a4d8c] to-[#00a8b5] rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">U</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900">Dashboard Uye</h1>
                            <p className="text-xs text-gray-500">V.1.0</p>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setIsMobileSidebarOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                                ? 'bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Left Section */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <Menu className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Desktop Sidebar Toggle */}
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <Menu className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Search */}
                            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent border-none outline-none text-sm text-gray-600 w-48"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            {/* Notifications */}
                            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-gradient-to-br from-[#6db33f] to-[#00a8b5] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        {adminUser?.username?.charAt(0).toUpperCase() ?? "A"}
                                    </span>
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-semibold text-gray-900">{adminUser?.username ?? "Admin"}</p>
                                    <p className="text-xs text-gray-500">{adminUser?.email ?? "Administrator"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-6">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500 mt-1">
                            Welcome back, <span className="font-semibold text-[#1a4d8c]">{adminUser?.username ?? "Admin"}</span>! Here&apos;s what&apos;s happening.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {statsCards.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                                <p className="text-green-500 text-xs mt-2">{stat.change}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity & Quick Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Recent Activity */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                {[
                                    { title: "New application received", desc: "John Doe applied for Full Stack Developer", time: "2 hours ago" },
                                    { title: "Job posting updated", desc: "UI/UX Designer requirements changed", time: "5 hours ago" },
                                    { title: "Interview scheduled", desc: "Mobile App Developer - Jane Smith", time: "1 day ago" },
                                    { title: "New job posted", desc: "Data Analyst position is now live", time: "2 days ago" },
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                                        <div className="w-2 h-2 bg-[#6db33f] rounded-full mt-2"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                            <p className="text-xs text-gray-500">{activity.desc}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{activity.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Briefcase, label: "Add New Job", color: "bg-[#6db33f]" },
                                    { icon: Users, label: "View Applicants", color: "bg-[#1a4d8c]" },
                                    { icon: FileText, label: "Review Applications", color: "bg-[#00a8b5]" },
                                    { icon: Settings, label: "Settings", color: "bg-[#a83279]" },
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                                    >
                                        <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3`}>
                                            <action.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
