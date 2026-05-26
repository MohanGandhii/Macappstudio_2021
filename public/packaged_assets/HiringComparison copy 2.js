export default function HiringComparison() {
  const traditional = [
    "Time-consuming hiring",
    "Expensive payroll & overheads",
    "Skill gaps & hiring risks",
  ];

  const modern = [
    "1–2 week team setup",
    "Flexible & scalable",
    "Experienced & accountable developers",
  ];

  return (
    <section className="bg-white px-6 py-14">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Hiring Yourself vs Hiring with Us
        </h2>

        {/* BOXES */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          
          {/* LEFT BOX */}
          <div className="border border-red-300 rounded-2xl p-6 text-left bg-red-50">
            
            <h3 className="text-red-500 font-semibold mb-4">
              Traditional Hiring
            </h3>

            <ul className="space-y-3">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500 text-lg">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT BOX */}
          <div className="border border-green-300 rounded-2xl p-6 text-left bg-green-50">
            
            <h3 className="text-green-600 font-semibold mb-4">
              With Extended Tech Team
            </h3>

            <ul className="space-y-3">
              {modern.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-600 text-lg">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}