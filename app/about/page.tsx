import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
                {/* Image Container - Right side */}
                <div className="absolute top-0 right-0 h-full w-[50%] z-0">
                    <Image
                        src="https://qb1.vc/static/media/img-about-2.65170d356b930ee49d2e.jpg"
                        alt="About Qubicle One Venture"
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
                            Qubicle One Venture isn't just a venture capital firm
                        </h1>
                        <p className="text-base text-gray-700 font-medium">
                            It's a launchpad for revolutionary ideas. We specialize in propelling startups that aspire to redefine what's possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Our Focus, Mission, and Approach */}
            <section className="w-full px-8 md:px-24 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Our Focus */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-40 rounded-lg mb-5">
                                <Image
                                    src="https://qb1.vc/static/media/img-focus.95f00e6f8c4967d8168d.jpg"
                                    alt="Our Focus"
                                    fill
                                    sizes="160px"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Our focus</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Fostering innovations that make optimal use of resources and significantly enhance the quality of life.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-40 rounded-lg mb-5">
                                <Image
                                    src="https://qb1.vc/static/media/img-missions.172803593dcda2a3c599.jpg"
                                    alt="Our Mission"
                                    fill
                                    sizes="160px"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Qubicle One Venture's mission is to identify and nurture businesses that are key players in shaping a Utopian future. We invest in and support startups that are dedicated to resource optimization and sustainable solutions, aiming to create a world where enhanced quality of life is accessible to all.
                            </p>
                        </div>

                        {/* Our Approach */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-40 rounded-lg mb-5">
                                <Image
                                    src="https://qb1.vc/static/media/img-approach.0a5ba8323dd4a7d3b396.jpg"
                                    alt="Our Approach"
                                    fill
                                    sizes="160px"
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Our Approach</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Strategic investments, insightful market analysis, and a steadfast commitment to sustainability mark our approach. We partner with our portfolio companies, offering guidance, resources, and a shared vision for a sustainable and prosperous tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
