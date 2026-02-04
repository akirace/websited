'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Career', href: '/career' },
    { name: 'Contacts', href: '/contacts' },
  ];

  // Helper function to check if a link is active
  // Handles both with and without trailing slashes for static export compatibility
  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedHref = href.replace(/\/$/, '');
    return normalizedPathname === normalizedHref;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${isScrolled
        ? 'bg-white/98 backdrop-blur-md shadow-lg'
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}>
        <Link href="/home" className="flex items-center gap-3 md:gap-4 z-50">
          {/* Logo */}
          <div className="relative w-9 h-9 md:w-10 md:h-10">
            <Image
              src="https://strapi.ackerlabs.my.id/uploads/Whats_App_Image_2026_01_22_at_10_00_50_PM_1_1_17178651fe.jpeg"
              alt="Talenvyra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight">
            <span className="text-[#0c244d]">TALEN</span>
            <span className="text-[#7cb82a]">VYRA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-300 relative ${isActive
                  ? 'font-bold text-[#1a4d8c]'
                  : 'font-medium text-black/60 hover:text-black'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a4d8c] to-[#00a8b5] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-5 h-5">
            <Menu
              className={`w-5 h-5 text-gray-700 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
            />
            <X
              className={`w-5 h-5 text-gray-700 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-40 md:hidden shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#1a4d8c]/10 to-[#00a8b5]/10 text-[#1a4d8c] font-bold border-l-4 border-[#1a4d8c]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#1a4d8c]'
                    }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Footer in Mobile Menu */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Get in touch</p>
              <a
                href="mailto:recruit@talenvyra.com"
                className="text-sm font-medium text-[#1a4d8c] hover:underline"
              >
                recruit@talenvyra.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
