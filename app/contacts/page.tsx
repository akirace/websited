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
                        alt="Contact Talenvyra"
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
                            Contact Talenvyra
                        </h1>
                        <div className="text-base text-gray-700 font-medium space-y-4">
                            <p>
                                Thank you for your interest in Talenvyra. Whether you are looking for top talent to drive your business forward or seeking your next career opportunity, we are here to connect.
                            </p>
                            <p>
                                Reach out to us to discover how our human-centric approach can create value for you.
                            </p>
                            <div className="mt-4 flex flex-col gap-4">
                                <div>
                                    <p className="font-semibold text-gray-900">Email:</p>
                                    <a
                                        href="mailto:recruit@talenvyra.com"
                                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                    >
                                        recruit@talenvyra.com
                                    </a>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Address:</p>
                                    <p className="text-gray-700">
                                        Latinos Bussines District, Jl. Raya Rawa Buntu Blk. C8 No.18, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
