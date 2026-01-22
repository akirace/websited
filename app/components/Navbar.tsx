import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-sm shadow-sm md:px-12">
      <div className="flex items-center gap-4">
        {/* Remote Logo */}
        <div className="relative w-10 h-10">
          <Image
            src="https://strapi.ackerlabs.my.id/uploads/cubicle_logo_81b6ca55d4.png"
            alt="Qubicle One Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-black">Qubicle One</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/about" className="text-sm font-medium text-black/80 hover:text-black transition-colors">About</Link>
        <Link href="/services" className="text-sm font-medium text-black/80 hover:text-black transition-colors">Services</Link>
        <Link href="/career" className="text-sm font-medium text-black/80 hover:text-black transition-colors">Career</Link>
        <Link href="/contacts" className="text-sm font-medium text-black/80 hover:text-black transition-colors">Contacts</Link>
      </div>
    </nav>
  );
}
