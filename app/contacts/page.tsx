import Image from "next/image";

export default function Contacts() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            {/* SECTION 1: Hero */}
            <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
                {/* Image Container - Right side */}
                <div className="absolute top-0 right-0 h-full w-[50%] z-0">
                    <Image
                        src="https://qb1.vc/static/media/bg-home-1.f340b72710b5e8adf0e6.jpg"
                        alt="Contact Qubicle One Ventures"
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
                            Contact Qubicle One Ventures
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                Thank you for your interest in Qubicle One Ventures, where innovation meets investment. We appreciate your curiosity about our mission to build and invest in companies that drive the next phase of new product creation and customer experience.
                            </p>
                            <div>
                                <p className="font-semibold text-gray-900">Email:</p>
                                <a
                                    href="mailto:recruitqubicle@gmail.com"
                                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                >
                                    recruitqubicle@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
