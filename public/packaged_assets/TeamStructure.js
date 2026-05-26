"use client";

export default function TeamFeatures() {
  const data = [
    {
      title: "Core Development",
      desc: "Essential team members for your project foundation",
      icon: "/Assets/TeamStructure/1.svg",
      tags: [
        "QA Engineer",
        "UI/UX Designer",
        "Project Manager",
        "iOS Developer",
        "Android Developer",
        "Web Developer",
      ],
    },
    {
      title: "Specialized Roles",
      desc: "Expert professionals for advanced requirements",
      icon: "/Assets/TeamStructure/2.svg",
      tags: [
        "Business Analyst",
        "System Architect",
        "Backend Developer",
        "DevOps Engineer",
      ],
    },
    {
      title: "Advanced Tech",
      desc: "Cutting-edge specialists for innovation",
      icon: "/Assets/TeamStructure/3.svg",
      tags: [
        "AI/ML Specialists",
        "Data Scientists",
        "Cloud Architects",
        "Security Experts",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border shadow-sm p-8 text-center hover:shadow-md transition"
          >
            {/* ✅ BIG ICON (no background wrapper) */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-[80px] h-[80px] mx-auto object-contain"
            />

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {item.desc}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}