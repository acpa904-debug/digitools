const Banner = () => {
  return (
    <section className="bg-[#7B2FF7] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-purple-200 mb-3 font-semibold">
            🚀 Best Digital Tools Platform
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Supercharge Your <br />
            <span className="text-yellow-300">Digital Workflow</span>
          </h1>
          <p className="text-purple-100 text-sm md:text-base mb-6 max-w-md leading-relaxed">
            Access 200+ premium digital tools to automate, design, and scale your business — all in one powerful platform built for modern teams.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#products"
              className="bg-white text-[#7B2FF7] font-bold px-6 py-3 rounded-lg text-sm hover:bg-yellow-300 hover:text-black transition-colors"
            >
              Explore Tools
            </a>
            <a
              href="#steps"
              className="border border-white text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-white hover:text-[#7B2FF7] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/banner.png"
            alt="Digital Workflow"
            className="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
