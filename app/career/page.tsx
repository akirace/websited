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
                        alt="Talenvyra Career"
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
                            Sustainable <br />
                            <span className="text-teal-600">Career Ecosystem</span>
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                At Talenvyra, we facilitate long-term growth for both talent and companies. Our ecosystem is designed to focus on human potential, ensuring that your career trajectory aligns with your personal and professional goals.
                            </p>
                            <p>
                                Join us to develop competencies based on individual potential and be part of a dynamic, innovation-driven environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CTA */}
            <section className="w-full px-8 md:px-24 py-20 bg-white flex items-center justify-center">
                <div className="w-full bg-gray-900 rounded-3xl px-12 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Start Your Journey with Talenvyra
                    </h2>
                    <p className="text-base text-gray-300 mb-8">
                        Ready to accelerate your career? Join our ecosystem today.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Submit Your Resume
                        </button>
                        <span className="text-gray-400">or</span>
                        <a
                            href="mailto:recruit@talenvyra.com"
                            className="text-white hover:text-gray-300 transition-colors duration-300 underline"
                        >
                            recruit@talenvyra.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
