import Image from "next/image";

const STATS = [
  { value: "10+", label: "Multi-Million Dollar Startups" },
  { value: "200+", label: "Project Completed" },
  { value: "275", label: "Entrepreneurs Consulted Worldwide" },
  { value: "250+", label: "App and growing" },
  { value: "5 Million+", label: "Daily Users across Globe" },
  { value: "7 Million+", label: "Daily Transactions" },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden" id="achive_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-4/12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/index/achive_img.png"
                alt="Achievements"
                width={600}
                height={800}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-tight">
              <span className="text-blue-600 block mb-2">15 years in,</span> here is what we have achieved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {STATS.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-lg text-gray-600 font-semibold leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
