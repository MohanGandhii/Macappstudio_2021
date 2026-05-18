import Image from "next/image";
import { notFound } from "next/navigation";
import { CASE_STUDY_DATA } from "../_data/case_study_data";
import { FiSmartphone, FiGlobe, FiUsers, FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const data = CASE_STUDY_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-20">
      
      {/* 1. Hero Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <Image src={data.logo} alt={data.title} width={60} height={60} className="object-contain" />
                <span className="text-2xl font-black tracking-tight">{data.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111] leading-tight mb-10 tracking-tighter">
                {data.tagline}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {data.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600">
                      {stat.icon === 'drivers' && <FiUsers size={20} />}
                      {stat.icon === 'customers' && <FiUsers size={20} />}
                      {stat.icon === 'bookings' && <FiCheckCircle size={20} />}
                      {stat.icon === 'routes' && <FiMapPin size={20} />}
                    </div>
                    <div>
                      <div className="text-[18px] font-black text-[#111]">{stat.value}</div>
                      <div className="text-[14px] text-[#666] font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <span className="text-[13px] font-bold uppercase tracking-widest text-gray-400">Platforms Developed:</span>
                <div className="flex gap-4">
                  <FiSmartphone className="text-gray-400" size={20} title="iOS" />
                  <FiSmartphone className="text-gray-400" size={20} title="Android" />
                  <FiGlobe className="text-gray-400" size={20} title="Web" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src={data.heroImage} alt="Hero Mockup" width={500} height={600} className="object-contain drop-shadow-2xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <CaseStudyTextSection label="Overview" content={data.overview} />

      {/* 3. Mosaic Image */}
      <section className="py-20 bg-[#f0f2f5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image src={data.mosaicImage} alt="App Mosaic" width={1200} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Details Breakdown (Problem, Goal, Solution) */}
      <CaseStudyTextSection label="Problem Faced" content={data.problem} />
      <CaseStudyTextSection label="Goal" content={data.goal} />
      <CaseStudyTextSection label="Solution" content={data.solution} />

      {/* 5. Bottom Images */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1000px]">
          <div className="flex flex-wrap justify-center gap-12">
            {data.bottomImages.map((img, i) => (
              <div key={i} className="w-full md:w-[30%]">
                <Image src={img} alt="App Screen" width={300} height={600} className="w-full h-auto object-contain drop-shadow-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

function CaseStudyTextSection({ label, content }: { label: string, content: string }) {
  return (
    <section className="py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div className="w-full lg:w-[200px]">
            <h2 className="text-[20px] font-black text-[#111] uppercase tracking-tighter">{label}</h2>
          </div>
          <div className="flex-1">
            <p className="text-[18px] lg:text-[20px] text-[#444] leading-[1.7] font-medium whitespace-pre-line">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
