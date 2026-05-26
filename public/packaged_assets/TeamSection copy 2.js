"use client";

export default function TeamsSection() {
  const teams = [
    {
      title: "Team 1",
      company: "Diamler - Jan 2025 to Dec 2026",
      border: "border-purple-400",
      bg: "bg-purple-50",
      text: "text-purple-700",
      items: [
        { name: "Android - 1", icon: "/Assets/TeamSection/Team1/1.1.svg" },
        { name: "iOS - 2", icon: "/Assets/TeamSection/Team1/1.2.svg" },
        { name: "Web - 1", icon: "/Assets/TeamSection/Team1/1.3.svg" },
        { name: "Full Stack - 1", icon: "/Assets/TeamSection/Team1/1.4.svg" },
        { name: "QA - 1", icon: "/Assets/TeamSection/Team1/1.5.svg" },
        { name: "UI/UX - 1", icon: "/Assets/TeamSection/Team1/1.6.svg" },
        { name: "Business Analyst - 1", icon: "/Assets/TeamSection/Team1/1.7.svg" },
      ],
    },
    {
      title: "Team 2",
      company: "Jio - Jan 2025 to Dec 2026",
      border: "border-red-400",
      bg: "bg-red-50",
      text: "text-red-700",
      items: [
        { name: "Android - 1", icon: "/Assets/TeamSection/Team2/1.svg" },
        { name: "iOS - 2", icon: "/Assets/TeamSection/Team2/2.svg" },
        { name: "Web - 1", icon: "/Assets/TeamSection/Team2/3.svg" },
        { name: "Full Stack - 1", icon: "/Assets/TeamSection/Team2/4.svg" },
        { name: "QA - 1", icon: "/Assets/TeamSection/Team2/5.svg" },
        { name: "UI/UX - 1", icon: "/Assets/TeamSection/Team2/6.svg" },
        { name: "Business Analyst - 1", icon: "/Assets/TeamSection/Team2/7.svg" },
      ],
    },
    {
      title: "Team 3",
      company: "Power Soap - Dec 2025 to Mar 2026",
      border: "border-orange-400",
      bg: "bg-orange-50",
      text: "text-orange-700",
      items: [
        { name: "Android - 1", icon: "/Assets/TeamSection/Team3/1.svg" },
        { name: "iOS - 2", icon: "/Assets/TeamSection/Team3/2.svg" },
        { name: "Web - 1", icon: "/Assets/TeamSection/Team3/3.svg" },
        { name: "Full Stack - 1", icon: "/Assets/TeamSection/Team3/4.svg" },
        { name: "QA - 1", icon: "/Assets/TeamSection/Team3/5.svg" },
        { name: "UI/UX - 1", icon: "/Assets/TeamSection/Team3/6.svg" },
        { name: "Business Analyst - 1", icon: "/Assets/TeamSection/Team3/7.svg" },
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Total 20 Teams
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {teams.map((team, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 md:p-10 border ${team.border} ${team.bg}`}
            >

              {/* HEADER */}
              <h3 className={`text-2xl font-semibold ${team.text}`}>
                {team.title}
              </h3>

              <p className="text-base text-gray-600 mt-2 mb-8">
                {team.company}
              </p>

              {/* LIST */}
              <div className="space-y-5">
                {team.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">

                    {/* ICON (BIGGER) */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />

                    {/* TEXT (BIGGER) */}
                    <p className="text-base text-gray-800">
                      {item.name}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}