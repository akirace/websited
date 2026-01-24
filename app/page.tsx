import Image from "next/image";
import { Users, Target, Link, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      {/* SECTION 1: Hero */}
      <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
        {/* Image Container - Right side */}
        <div className="absolute top-0 right-0 h-full w-[50%] z-0">
          <Image
            src="https://qb1.vc/static/media/bg-home-1.f340b72710b5e8adf0e6.jpg"
            alt="Talenvyra - Strategic Partner for Talent Development"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Content Section - Left side */}
        <div className="relative z-10 flex w-full flex-col justify-center px-8 md:w-1/2 md:px-24 h-full">
          <div className="max-w-xl py-24 md:py-0">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl mb-6">
              Strategic Partner for <br />
              <span className="text-gray-600">Talent Development</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              Talenvyra positions itself as a strategic partner for talent development rather than a traditional outsourcing vendor. We build sustainable careers and intelligent connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </button>
              <button className="px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Pillars */}
      <section className="w-full px-8 md:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Our Foundation</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black">Four Core Pillars</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">Human-Centric Intelligence</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Focuses on human potential, character, and job readiness rather than just CV experience.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3 group-hover:text-indigo-600 transition-colors">Talent-Driven Value</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Provides relevant, high-value talent to improve client productivity and efficiency.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <Link className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors">Smart Talent Connection</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Acts as an intelligent link between talent and organizations through systematic processes and technology.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3 group-hover:text-teal-600 transition-colors">Sustainable Career Ecosystem</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Facilitates long-term growth for both talent and companies in a thriving ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
