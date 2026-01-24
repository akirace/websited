import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
                {/* Image Container - Right side */}
                <div className="absolute top-0 right-0 h-full w-[50%] z-0">
                    <Image
                        src="https://qb1.vc/static/media/img-about-2.65170d356b930ee49d2e.jpg"
                        alt="About Talenvyra"
                        fill
                        priority
                        sizes="50vw"
                        className="object-cover"
                    />
                </div>

                {/* Content Section - Left side */}
                <div className="relative z-10 flex w-full flex-col justify-center px-8 md:w-1/2 md:px-24 h-full">
                    <div className="max-w-xl py-24 md:py-0">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-3xl lg:text-4xl mb-6">
                            Redefining Talent Partnership
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                Talenvyra goes beyond traditional recruitment. We are a strategic partner committed to unlocking human potential and driving organizational excellence through intelligent talent solutions.
                            </p>
                            <p>
                                By focusing on human-centric intelligence and sustainable career ecosystems, we create lasting value for both businesses and professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Value Proposition */}
            <section className="w-full px-8 md:px-24 py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* For Clients */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-600" />
                                For Clients
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Access to a database of over <strong>10,000+ curated CVs</strong>.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Efficient, adaptive, and structured workforce management.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Long-term strategic partnership for sustainable growth.</p>
                                </li>
                            </ul>
                        </div>

                        {/* For Talent */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-green-600" />
                                For Talent
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Clear, sustainable career paths and placement in meaningful roles.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Opportunities to develop competencies based on individual potential.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">Supportive ecosystem for long-term professional growth.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
