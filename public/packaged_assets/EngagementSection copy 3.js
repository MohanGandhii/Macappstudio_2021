export default function EngagementSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">

      {/* TITLE */}
      <h2 className="text-4xl font-semibold text-gray-900">
        Flexible Engagement Terms
      </h2>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {[
          {
            icon: "/Assets/EngagementSection/ServiceQuote.svg",
            title: "Advance Payment",
            desc: "Secures your dedicated team slot immediately",
            bg: "bg-blue-100",
          },
          {
            icon: "/Assets/EngagementSection/ServiceQuote (1).svg",
            title: "30 Days Notice",
            desc: "Complete flexibility to scale or adjust as needed",
            bg: "bg-purple-100",
          },
          {
            icon: "/Assets/EngagementSection/ServiceQuote (2).svg",
            title: "Milestone Bonuses",
            desc: "Celebrate project wins and achievements together",
            bg: "bg-green-100",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm flex flex-col items-center"
          >
            {/* ICON BOX (smaller + soft) */}
            <div className={`w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-500 mt-2 max-w-[220px]">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm shadow-sm hover:bg-blue-700 transition">
          Get Started Today
        </button>
      </div>

    </div>
  );
}