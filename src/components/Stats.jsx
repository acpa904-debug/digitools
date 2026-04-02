const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-[#7B2FF7]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg grid grid-cols-3 divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-5 px-4">
              <span className="text-2xl md:text-3xl font-extrabold text-[#7B2FF7]">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;