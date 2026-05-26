"use client";

export default function DreamTeamSection() {
  const features = [
    {
      title: "Start in 1-2 Weeks",
      desc: "Get your project moving immediately",
      icon: "/Assets/DreamTeam/Layer_1 (1).svg",
      bg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      title: "Complete Transparency",
      desc: "Full tracking and reporting visibility",
      icon: "/Assets/DreamTeam/Layer_1 (2).svg",
      bg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Scale Anytime",
      desc: "Adjust team size as needed",
      icon: "/Assets/DreamTeam/Layer_1 (3).svg",
      bg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Peace of Mind",
      desc: "Notice period flexibility + instant replacements",
      icon: "/Assets/DreamTeam/Happiness.svg",
      bg: "bg-green-50",
      iconColor: "text-green-500",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Dream Deserves The Right Team
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Book your slot today & start building in 2 weeks
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm md:text-base hover:bg-blue-700 transition">
            Book Your Slot Today →
          </button>

          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm md:text-base hover:bg-gray-100 transition">
            Schedule a Call
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

          {features.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-8 md:p-10 text-center`}
            >

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}