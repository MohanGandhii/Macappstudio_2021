"use client";

import Image from "next/image";
import Link from "next/link";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";
import SuccessStoriesCTA from "../_components/04_SuccessStoriesCTA";

const technologies = [
  { icon: "/assets/images/fasttrack/sketch.svg", name: "Sketch" },
  { icon: "/assets/images/fasttrack/java.svg", name: "Java" },
  { icon: "/assets/images/fasttrack/objective_c.svg", name: "Objective C" },
  { icon: "/assets/images/fasttrack/html.svg", name: "HTML" },
  { icon: "/assets/images/fasttrack/css.svg", name: "CSS" },
  { icon: "/assets/images/fasttrack/js.svg", name: "JS" },
  { icon: "/assets/images/fasttrack/php.svg", name: "PHP" },
  { icon: "/assets/images/fasttrack/amazon_rds.svg", name: "Amazon RDS" },
];

export default function FasttrackPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Hero Section - BOLD & SPACIOUS */}
      <section className="relative pt-12 lg:pt-16 bg-[#fcfbe8] overflow-visible">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row items-start min-h-[620px]">
            
            {/* Left Content */}
            <div className="w-full lg:w-[50%] z-10 py-10">
              <div className="mb-14">
                <Image 
                  src="/assets/images/fasttrack/FT_logo.png" 
                  alt="Fasttrack Logo" 
                  width={320} 
                  height={100} 
                  className="object-contain"
                />
              </div>
              
              <h1 className="text-[38px] md:text-[52px] lg:text-[62px] font-black text-[#1a1a1a] leading-[1.1] mb-14 tracking-tighter max-w-[95%]">
                Cloud based end to end Uber Like Cab <br className="hidden md:block" /> Aggregation Platform
              </h1>
              
              {/* Stats List */}
              <ul className="space-y-8 mb-16">
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon1.svg" text="10,000" sub="Drivers Managed Daily" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon2.svg" text="1.5 Million" sub="Customers" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon3.svg" text="10,000" sub="Bookings Daily" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon4.svg" text="9000+" sub="Routes covered" />
              </ul>

              {/* Platforms Box */}
              <div className="space-y-5 pt-4">
                <span className="text-[16px] font-bold text-[#222]">Platforms developed :</span>
                <div className="flex items-center bg-white rounded-[4px] shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-gray-100 py-4 px-8 gap-8 w-fit">
                  <PlatformItem icon="/assets/images/fasttrack/apple.svg" label="iOS" />
                  <div className="w-[1px] h-8 bg-gray-200" />
                  <PlatformItem icon="/assets/images/fasttrack/android.svg" label="Android" />
                  <div className="w-[1px] h-8 bg-gray-200" />
                  <PlatformItem icon="/assets/images/fasttrack/html.svg" label="Web" />
                </div>
              </div>
            </div>

            {/* Right Mockup - MASSIVE FLOATING PHONES */}
            <div className="w-full lg:w-[50%] relative min-h-[500px] lg:min-h-0 self-stretch">
              <div className="lg:absolute lg:-top-10 lg:-right-20 lg:w-[850px] z-30 mt-16 lg:mt-0 transform lg:translate-y-24 translate-y-12">
                <Image 
                  src="/assets/images/fasttrack/banner_rigth_image.png" 
                  alt="Fasttrack Apps" 
                  width={850} 
                  height={1100} 
                  className="w-full h-auto object-contain drop-shadow-[0_50px_70px_rgba(0,0,0,0.22)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlap Spacer */}
      <div className="h-32 lg:h-[320px] bg-white" />

      {/* 2. Overview Section */}
      <SplitSection 
        title="Overview" 
        content="Fast Track offers the most reliable and hassle free services throughout Tamilnadu, India covering its major cities-Chennai, Coimbatore, Madurai and Trichy for the past 19 years. Fast Track provides both outstation taxi booking and local cab services and operates the network and offices at all major cities of Tamil Nadu. They have 10,000 professional drivers covering 9,000 + routes and having a customer base of 15 Million users."
        bgColor="bg-white"
      />

      {/* 3. Project Apps Mosaic */}
      <section className="bg-[#f4f6f9] py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <Image 
            src="/assets/images/fasttrack/phoneimg.png" 
            alt="Project Apps" 
            width={1240} 
            height={600} 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* 4. Problem Faced & Goal */}
      <SplitSection 
        title="Problem Faced" 
        content="Even though FastTrack had a reputed brand name they did not have an end to end connected and transparent technology platform to run their business seamlessly. The apps and the platform they had was slow and had several issues reported by users and drivers like location accuracy, billing issues and allocation problems."
        bgColor="bg-white"
      />
      <SplitSection 
        title="Goal" 
        content="To create a world class end to end cloud based platform to manage the 100% operations of the FastTrack business. The platform should be able to manage all the stake holders of the business like users, drivers, owners, call centre operations, airport operations, corporate bookings etc. The platform should also cover the end to end business operations like bookings, driver allocations, location tracking, ride tracking, billing and admin operations like reports, driver onboarding, finances, price cards and compliance."
        bgColor="bg-white"
      />

      {/* 5. Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
            <div className="lg:w-1/3">
              <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Solution</h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-[18px] lg:text-[20px] text-[#444] leading-relaxed font-medium">
                MacAppStudio designed and developed an end to end app cloud based cab management platform for FastTrack. The project was started in June 2018 and the development was completed and beta testing was started in Dec 2018. The platform went live in Jan 2019 and MacAppStudio operated the platform for 6 months till June 2019. The platform was handed over to the internal technical team of FastTrack by July 2019. MacAppStudio created a reliable, scalable and module cab management platform with apps for users, drivers, owners and board of directors. The admin system was developed to control the end to end operations and get timely information and reports with modules like bookings, driver dashboard, price cards, finance dashboard, live tracking dashboard, notification systems etc. The system was made so exhaustive that the only other software that Fasttrack needs other than this platform is Tally for finance compliance and tax filing purposes.
              </p>
            </div>
          </div>
          
          {/* App Screen Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-10 no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="min-w-[280px] lg:min-w-[320px]">
                <Image 
                  src={`/assets/images/fasttrack/fasttrack_screen_img${i}.png`} 
                  alt={`App Screen ${i}`} 
                  width={320} 
                  height={640} 
                  className="rounded-3xl shadow-xl border border-gray-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology & Status Section */}
      <section className="py-24 bg-[#f7f8fa]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          {/* Technology Row */}
          <div className="grid lg:grid-cols-[260px_1fr] gap-14 pb-20 border-b border-gray-200">
            <div>
              <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Technology</h2>
            </div>
            <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-4 min-w-[100px]">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 border border-gray-50">
                    <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain h-[50px] w-auto" />
                  </div>
                  <span className="text-[14px] font-bold text-[#666] text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status Row */}
          <div className="grid lg:grid-cols-[260px_1fr] gap-14 pt-20">
            <div>
              <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Current Status</h2>
            </div>
            <div>
              <p className="text-[18px] leading-[2] text-[#3f3f3f] font-medium">
                The platform was launched in Nov 2017 and has been seamlessly managing{" "}
                <span className="font-black text-[#111]">4 locations, 16 screens</span> and{" "}
                <span className="font-black text-[#111]">3800 seats.</span> The platform has booked over{" "}
                <span className="font-black text-[#111]">6 million tickets</span> as of July 2019 and has{" "}
                <span className="font-black text-[#111]">100% replaced the legacy system</span> that AGS Cinemas was using earlier. Apart from ticketing process, the platform provides a lot of value added features, reports and insights to help the top management of the platform to take realtime business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <SuccessStoriesCTA />
    </main>
  );
}

function StatItem({ icon, text, sub }: { icon: string, text: string, sub: string }) {
  return (
    <li className="flex items-center gap-6">
      <div className="w-10 h-10 flex items-center justify-center">
        <Image src={icon} alt="" width={40} height={40} className="object-contain" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-[24px] lg:text-[28px] font-black text-[#1a1a1a] leading-none tracking-tight">{text}</span>
        <span className="text-[20px] lg:text-[22px] text-[#444] font-medium leading-none tracking-tight">{sub}</span>
      </div>
    </li>
  );
}

function PlatformItem({ icon, label }: { icon: string, label: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt={label} width={28} height={28} className="object-contain" />
      <span className="text-[18px] font-bold text-[#111]">{label}</span>
    </div>
  );
}

function SplitSection({ title, content, bgColor }: { title: string, content: string, bgColor: string }) {
  return (
    <section className={`py-24 border-b border-gray-100 ${bgColor}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">{title}</h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-[18px] lg:text-[20px] text-[#444] leading-relaxed font-medium">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}