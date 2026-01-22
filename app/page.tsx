import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      {/* SECTION 1: Hero */}
      {/* SECTION 1: Hero */}
      <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
        {/* Image Container - Constrained to right side to reduce width */}
        <div className="absolute top-0 right-0 h-full w-[50%] z-0">
          <Image
            src="http://qb1.vc/static/media/bg-home-1.f340b72710b5e8adf0e6.jpg"
            alt="Hero Background"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Content Section - Overlaying the image (Left side) */}
        {/* The image already has a white diagonal area on the left, so we just place text over it. */}
        <div className="relative z-10 flex w-full flex-col justify-center px-8 md:w-[60%] md:px-24 h-full pointer-events-none">
          <div className="max-w-xl pt-24 md:pt-0 pointer-events-auto">
            {/* Reduced title size as requested */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-3xl lg:text-4xl mb-6">
              Welcome to Qubicle One Venture: Where
              Utopian Visions Become Reality
            </h1>
            <p className="text-base text-gray-700 font-medium">
              Empowering Innovators to Optimize Resources and Elevate Life Quality
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Innovation */}
      <section className="relative flex min-h-screen w-full flex-col md:flex-row overflow-hidden bg-white">
        {/* Left Image Section with Angled Clip */}
        {/* On Desktop: Image is on the Left, Text on the Right */}
        <div className="absolute top-0 left-0 h-full w-[50%] z-0 hidden md:block">
          <Image
            src="https://qb1.vc/static/media/bg-home-2.4ed26e4a8364aac26929.jpg"
            alt="Innovation Background"
            fill
            sizes="50vw"
            className="object-cover object-left"
          />
        </div>

        {/* Mobile Image Fallback */}
        <div className="relative h-64 w-full md:hidden">
          <Image
            src="https://qb1.vc/static/media/bg-home-2.4ed26e4a8364aac26929.jpg"
            alt="Innovation Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        {/* We use ml-auto to push it to the right, and give it appropriate padding */}
        <div className="z-10 flex w-full flex-col justify-center bg-transparent px-8 md:w-1/2 md:ml-auto md:pl-32 md:pr-12">
          <div className="max-w-xl py-12 md:py-0">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl lg:text-4xl mb-6">
              Qubicle One Ventures: Igniting the Spark of Global Innovation and Exceptional Design
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to nurturing and investing in diverse companies that are at the forefront of advancing product innovation and enriching customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Innovation at Our Core */}
      <section className="relative flex min-h-screen w-full flex-col md:flex-row overflow-hidden bg-white">
        {/* Left Content Section */}
        <div className="z-10 flex w-full flex-col justify-center bg-white px-8 md:w-1/2 md:px-24 md:pr-32">
          <div className="max-w-xl py-12 md:py-0">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl lg:text-4xl mb-6">
              Innovation at Our Core
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We inspire our entrepreneurs to pioneer technologies that deliver tangible benefits for
              industry leaders. Our skilled engineers collaborate closely with our portfolio companies,
              tackling critical challenges and enabling them to concentrate on growth and
              performance.
            </p>
          </div>
        </div>

        {/* Right Image Section with Angled Clip */}
        <div className="absolute top-0 right-0 h-full w-[50%] z-0 hidden md:block">
          <Image
            src="https://qb1.vc/static/media/bg-home-3.f19e57920cfa879a9f85.jpg"
            alt="Core Innovation"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Mobile Image Fallback */}
        <div className="relative h-64 w-full md:hidden">
          <Image
            src="https://qb1.vc/static/media/bg-home-3.f19e57920cfa879a9f85.jpg"
            alt="Core Innovation"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
