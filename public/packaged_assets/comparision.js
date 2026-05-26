export default function Comparison() {
  const problems = [
    {
      title: "Time Consuming",
      desc: "3-6 months for hiring, onboarding & notice periods",
      icon: "⏱",
    },
    {
      title: "High Overhead",
      desc: "HR costs, payroll management, and retention challenges",
      icon: "$",
    },
    {
      title: "Fixed Costs",
      desc: "High expenses even when projects slow down",
      icon: "📈",
    },
  ];

  const solutions = [
    {
      title: "Fast Deployment",
      desc: "Get your team ready in just 1-2 weeks with pre-vetted professionals.",
      icon: "⚡",
    },
    {
      title: "Fully Managed",
      desc: "Complete accountability and management handled for you.",
      icon: "✔",
    },
    {
      title: "Scalable Growth",
      desc: "Easily scale your team as your project requirements evolve.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT BOX */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          {/* BADGE */}
          <div className="flex justify-center mb-3">
            <span className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">
              ⚠ The Problem
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
            The Problem with In-House Hiring
          </h2>

          {/* ITEMS */}
          <div className="space-y-4">
            {problems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border border-red-200 bg-red-50 p-4 rounded-xl"
              >
                <div className="bg-red-100 text-red-500 p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-black">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          {/* BADGE */}
          <div className="flex justify-center mb-3">
            <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
              ✔ Our Solution
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
            Ready-to-Go <span className="text-blue-600">Extended Teams</span>
          </h2>

          {/* ITEMS */}
          <div className="space-y-4">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border border-green-200 bg-green-50 p-4 rounded-xl"
              >
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-black">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}