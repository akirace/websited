'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Career', href: '/career' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-sm shadow-sm md:px-12">
      <Link href="/home" className="flex items-center gap-4">
        {/* Remote Logo */}
        <div className="relative w-10 h-10">
          <Image
            src="https://strapi.ackerlabs.my.id/uploads/Whats_App_Image_2026_01_22_at_10_00_50_PM_1_1_17178651fe.jpeg"
            alt="Talenvyra Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl font-bold tracking-tight">
          <span className="text-[#0c244d]">TALEN</span>
          <span className="text-[#7cb82a]">VYRA</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${isActive
                ? 'font-bold text-[#1a4d8c]'
                : 'font-medium text-black/60 hover:text-black'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
