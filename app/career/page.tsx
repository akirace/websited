import Image from "next/image";

export default function Career() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
                {/* Image Container - Right side */}
                <div className="absolute top-0 right-0 h-full w-[50%] z-0">
                    <Image
                        src="https://qb1.vc/static/media/img-about-2.65170d356b930ee49d2e.jpg"
                        alt="Career at Qubicle One"
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
                            Career at Qubicle One
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                At Qubicle One, we believe great technology starts with great people. We provide opportunities for IT professionals to grow their careers through impactful projects with trusted clients across various industries.
                            </p>
                            <p>
                                Join us to develop your skills, expand your experience, and be part of a dynamic and professional IT ecosystem.
                            </p>
                            <p>
                                Discover your next career opportunity with Qubicle One.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: How to Work at Qubicle One */}
            <section className="w-full px-8 md:px-24 py-20 bg-white flex items-center justify-center">
                <div className="w-full bg-gray-900 rounded-3xl px-12 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        How to Work at Qubicle One
                    </h2>
                    <p className="text-base text-gray-300 mb-8">
                        Interested in joining our professional team? Start your journey with Qubicle One today.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Submit Your Resume
                        </button>
                        <span className="text-gray-400">or</span>
                        <a
                            href="mailto:recruiqubicle@gmail.com"
                            className="text-white hover:text-gray-300 transition-colors duration-300 underline"
                        >
                            recruiqubicle@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
