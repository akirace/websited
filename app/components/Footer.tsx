import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white px-5 sm:px-8 md:px-24 py-10 md:py-16">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
                {/* Brand Section */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide">Talenvyra</h2>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                        Strategic Partner for Talent Development. Fostering human-centric intelligence and sustainable career ecosystems.
                    </p>
                </div>

                {/* Links Sections */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-gray-500">Company</h3>
                        <a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a>
                        <a href="/career" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</a>
                        <a href="/contacts" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4">
                        <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-gray-500">Services</h3>
                        <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">IT Solutions</a>
                        <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">IT Staffing</a>
                        <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors whitespace-nowrap">IT Business Partner</a>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 col-span-2 sm:col-span-1">
                        <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-gray-500">Connect</h3>
                        <a href="mailto:recruit@talenvyra.com" className="text-sm text-gray-300 hover:text-white transition-colors break-all sm:break-normal">recruit@talenvyra.com</a>
                        <div className="text-xs text-gray-400 mt-1 md:mt-2 leading-relaxed">
                            <p className="font-semibold text-gray-300 uppercase mb-1">Office</p>
                            <p>Latinos Bussines District, Jl. Raya Rawa Buntu Blk. C8 No.18, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 text-center md:text-left">
                    © Talenvyra 2026. All rights reserved.
                </p>
                <div className="flex gap-4 md:gap-6">
                    <span className="text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
