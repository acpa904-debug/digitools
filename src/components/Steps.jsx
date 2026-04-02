const Steps = () => {
  const steps = [
    {
      icon: "/user.png",
      title: "Create Account",
      description: "Sign up in seconds and get instant access to your personalized dashboard.",
      step: "01",
    },
    {
      icon: "/package.png",
      title: "Choose Products",
      description: "Browse our 200+ premium digital tools and pick the ones that fit your needs.",
      step: "02",
    },
    {
      icon: "/rocket.png",
      title: "Start Creating",
      description: "Launch your projects and supercharge your workflow from day one.",
      step: "03",
    },
  ];

  return (
    <section id="steps" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Get Started in 3 Steps</h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            It's simple. Get up and running in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Step Number Badge */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-[#7B2FF7] transition-colors duration-300">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                </div>
                <span className="absolute -top-2 -right-2 bg-[#7B2FF7] text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
