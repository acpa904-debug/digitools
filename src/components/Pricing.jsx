
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 0,
      period: "month",
      description: "Perfect for individuals just getting started.",
      features: ["5 tools access", "Basic templates", "Email support", "1 project"],
      cta: "Get Started Free",
      popular: false,
      color: "bg-white",
    },
    {
      name: "Pro",
      price: 29,
      period: "month",
      description: "For professionals who need more power.",
      features: ["100+ tools access", "Premium templates", "Priority support", "Unlimited projects", "Advanced analytics"],
      cta: "Start Pro Trial",
      popular: true,
      color: "bg-[#7B2FF7]",
    },
    {
      name: "Enterprise",
      price: 99,
      period: "month",
      description: "For large teams with advanced requirements.",
      features: ["All tools access", "Custom templates", "Dedicated support", "Unlimited projects", "Team management", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false,
      color: "bg-white",
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            No hidden fees. Cancel anytime. Choose the plan that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-transform hover:-translate-y-1 duration-300 ${
                plan.popular
                  ? "bg-[#7B2FF7] text-white shadow-2xl scale-105 border-transparent"
                  : "bg-white text-gray-800 border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-3">
                  <span className="bg-yellow-400 text-black text-xs font-extrabold px-3 py-1 rounded-full">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              <h3 className={`font-extrabold text-xl mb-1 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <div className="flex items-end gap-1 mb-5">
                <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>
                    <span className={`font-bold ${plan.popular ? "text-yellow-300" : "text-[#7B2FF7]"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-white text-[#7B2FF7] hover:bg-yellow-300 hover:text-black"
                    : "bg-[#7B2FF7] text-white hover:bg-[#6822e0]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
