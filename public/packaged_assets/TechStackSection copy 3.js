export default function TechStackSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">

      {/* TOP TEXT */}
      <p className="text-blue-600 text-xs font-medium tracking-wide">
        TECHNOLOGY STACK
      </p>

      <h2 className="text-4xl font-bold mt-3 text-gray-900">
        Tools & Technologies We Use
      </h2>

      <p className="text-gray-500 mt-3">
        Modern, scalable, and battle-tested technologies
      </p>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

        {[
          { name: "React", icon: "/Assets/TechSelection/1.svg" },
          { name: "Node.js", icon: "/Assets/TechSelection/2.svg" },
          { name: "Swift", icon: "/Assets/TechSelection/3.svg" },
          { name: "Kotlin", icon: "/Assets/TechSelection/4.svg" },
          { name: "AWS", icon: "/Assets/TechSelection/5.svg" },
          { name: "Firebase", icon: "/Assets/TechSelection/6.svg" },
          { name: "MongoDB", icon: "/Assets/TechSelection/7.svg" },
          { name: "PostgreSQL", icon: "/Assets/TechSelection/8.svg" },
          { name: "Docker", icon: "/Assets/TechSelection/9.svg" },
          { name: "Kubernetes", icon: "/Assets/TechSelection/10.svg" },
          { name: "GraphQL", icon: "/Assets/TechSelection/11.svg" },
          { name: "TypeScript", icon: "/Assets/TechSelection/12.svg" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition"
          >
            {/* ICON */}
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8 object-contain mb-3"
            />

            {/* TEXT */}
            <p className="text-sm text-gray-700">
              {item.name}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}