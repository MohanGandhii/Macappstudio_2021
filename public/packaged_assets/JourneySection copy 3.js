"use client";

export default function JourneySection() {
  const steps = [
    {
      title: "Advance Payment",
      highlight: "50% secures your team slot",
      desc: "Make your advance payment to immediately secure your dedicated team slot and begin the onboarding process.",
      icon: "/Assets/JourneySection/Background (1).svg",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Weekly Updates",
      highlight: "Reports & calls for transparency",
      desc: "Receive detailed weekly progress reports and participate in regular calls to ensure complete project transparency.",
      icon: "/Assets/JourneySection/Background (2).svg",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Milestone Reviews",
      highlight: "Celebrate achievements with bonuses",
      desc: "Comprehensive evaluation of project phases and deliverables, with milestone bonuses for exceptional performance.",
      icon: "/Assets/JourneySection/Background (3).svg",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "30 Days Notice",
      highlight: "Complete flexibility to adjust",
      desc: "Scale your team up or down with just 30 days notice. Complete flexibility for your changing needs.",
      icon: "/Assets/JourneySection/Background (4).svg",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Journey <span className="text-blue-600">with Us</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          From securing your team to celebrating milestones, here's how we work together
          to bring your vision to life.
        </p>

        {/* STEPS */}
        <div className="relative mt-14">

          {/* LINE (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-blue-200"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-left shadow-sm"
              >

                {/* ICON */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* HIGHLIGHT */}
                <p className="text-blue-600 text-sm mt-1">
                  {step.highlight}
                </p>

                {/* DESC */}
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}