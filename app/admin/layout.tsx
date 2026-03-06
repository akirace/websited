import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard Uye V.1.0 - Admin",
    description: "Admin Dashboard for Talenvyra",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
