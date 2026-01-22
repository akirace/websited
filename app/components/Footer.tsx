import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-12 px-4 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl flex flex-col items-center gap-6">
                {/* Logo / Title */}
                <h2 className="text-2xl font-bold tracking-wide">Qubicle One</h2>

                {/* Tagline */}
                <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
                    Empowering Tomorrow, Today: Qubicle One Ventures - Pioneering Innovation in Product Creation and Customer Experience.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-6 mt-2">
                    {/* Facebook Icon */}
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>

                    {/* Twitter / X Icon */}
                    <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05a4.28 4.28 0 0 0-7.29 3.9 12.14 12.14 0 0 1-8.81-4.46a4.29 4.29 0 0 0 1.33 5.71c-.72-.02-1.4-.22-2-.55v.05a4.29 4.29 0 0 0 3.43 4.2 4.31 4.31 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.97 8.57 8.57 0 0 1-5.3 1.83c-.34 0-.68-.02-1.02-.06a12.09 12.09 0 0 0 6.55 1.92c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.11z" />
                        </svg>
                    </a>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-2 text-sm font-medium">
                    <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                    <Link href="/contacts" className="hover:text-gray-300 transition-colors">Contact</Link>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 mt-6">
                    © Qubicle One Ventures 2026. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
