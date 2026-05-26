"use client";

export default function Features() {
  const features = [
    {
      title: "Faster Delivery",
      desc: "Accelerate your project timelines with efficient, dedicated teams.",
      icon: "/Assets/Features/1.svg",
      bg: "bg-gradient-to-br from-purple-500 to-purple-400",
    },
    {
      title: "Flexible Solutions",
      desc: "Adapt to evolving needs with scalable and versatile team structures.",
      icon: "/Assets/Features/2.svg",
      bg: "bg-gradient-to-br from-blue-500 to-blue-400",
    },
    {
      title: "Transparent Collaboration",
      desc: "Gain full visibility and foster clear communication throughout your partnership.",
      icon: "/Assets/Features/3.svg",
      bg: "bg-gradient-to-br from-cyan-500 to-blue-400",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Unlock Your Potential with Our{" "}
          <span className="text-blue-600">Extended Tech Team</span>
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Our extended tech team brings a wealth of benefits designed to streamline your{" "}
          <span className="italic">operations and accelerate your success.</span>{" "}
          Having built over 120+ apps, we know what works.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-8 text-center hover:shadow-md transition"
            >
              {/* Icon Background */}
             <div className="w-[72px] h-[72px] mx-auto flex items-center justify-center">
  <img
    src={item.icon}
    alt={item.title}
    className="w-full h-full object-contain"
  />
</div>

              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}