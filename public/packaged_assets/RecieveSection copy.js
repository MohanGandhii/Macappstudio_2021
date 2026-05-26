"use client";

export default function ReceiveSection() {
  const items = [
    {
      title: "Weekly Progress Reports",
      desc: "Detailed updates on project advancement and team performance",
      icon: "/Assets/RecieveSection/1.1.svg",
      color: "text-blue-500",
    },
    {
      title: "Weekly Calls",
      desc: "Regular communication to ensure alignment and address concerns",
      icon: "/Assets/RecieveSection/1.2.svg",
      color: "text-green-500",
    },
    {
      title: "Task Dashboard",
      desc: "Real-time visibility into project status and task completion",
      icon: "/Assets/RecieveSection/1.3.svg",
      color: "text-purple-500",
    },
    {
      title: "Milestone Reviews",
      desc: "Comprehensive evaluation of project phases and deliverables",
      icon: "/Assets/RecieveSection/1.4.svg",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">

      {/* 🔥 GRAY CONTAINER */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl py-14 px-6 md:px-12 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What You'll Receive
        </h2>

        {/* ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">

          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* ICON */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 mb-4 object-contain"
              />

              {/* TITLE */}
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-xs md:text-sm text-gray-500 mt-2 max-w-[220px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}