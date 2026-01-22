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
            className="object-fill" // Explicitly requested to show full width and height without cropping
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
        <div
          className="absolute top-0 left-0 h-full w-[50%] bg-gray-200 hidden md:block"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)', // Wide at top, narrower at bottom (slants /)
            background: 'linear-gradient(to right, #c2410c, #9a3412)', // Placeholder using warm orange/brown tone from design
          }}
        >
          {/* Placeholder for Image */}
          <div className="w-full h-full relative flex items-center justify-center">
            <div className="text-white/20 font-bold text-4xl">
              IMAGE PLACEHOLDER
            </div>
          </div>
        </div>

        {/* Mobile Image Fallback */}
        <div className="h-64 w-full bg-orange-800 md:hidden flex items-center justify-center text-white/50">
          IMAGE PLACEHOLDER
        </div>

        {/* Right Content Section */}
        {/* We use ml-auto to push it to the right, and give it appropriate padding */}
        <div className="z-10 flex w-full flex-col justify-center bg-transparent px-8 md:w-[60%] md:ml-auto md:px-24">
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
        <div className="z-10 flex w-full flex-col justify-center bg-white px-8 md:w-[60%] md:px-24">
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
        <div
          className="absolute top-0 right-0 h-full w-[50%] bg-gray-200 hidden md:block"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', // Matches Hero angle
            background: 'linear-gradient(to right, #000000, #111111)', // Dark code-like placeholder
          }}
        >
          {/* Placeholder for Image */}
          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            {/* Decorative "Code" Background effect */}
            <div className="absolute inset-0 opacity-20 p-4 text-xs font-mono text-green-500 overflow-hidden leading-tight break-all">
              {`const innovation = true; while(innovation) { buildFuture(); } function buildFuture() { return "Qubicle One"; } ...`}
              {`const innovation = true; while(innovation) { buildFuture(); } function buildFuture() { return "Qubicle One"; } ...`}
              {`const innovation = true; while(innovation) { buildFuture(); } function buildFuture() { return "Qubicle One"; } ...`}
              {`const innovation = true; while(innovation) { buildFuture(); } function buildFuture() { return "Qubicle One"; } ...`}
              {`const innovation = true; while(innovation) { buildFuture(); } function buildFuture() { return "Qubicle One"; } ...`}
            </div>
            <div className="text-white/20 font-bold text-4xl relative z-10">
              IMAGE PLACEHOLDER
            </div>
          </div>
        </div>

        {/* Mobile Image Fallback */}
        <div className="h-64 w-full bg-black md:hidden flex items-center justify-center text-white/50">
          IMAGE PLACEHOLDER
        </div>
      </section>
    </main>
  );
}
