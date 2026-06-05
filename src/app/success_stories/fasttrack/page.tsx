"use client";

import Image from "next/image";
import Link from "next/link";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";
import WhatToKnowMore from "../_components/WhatToKnowMore";

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

import React from "react";
import { AppScreenCarousel } from "../_components/03_CaseStudyDetailComponents";

const screens = [
  "/assets/images/fasttrack/fasttrack_screen_img1.png",
  "/assets/images/fasttrack/fasttrack_screen_img2.png",
  "/assets/images/fasttrack/fasttrack_screen_img3.png",
  "/assets/images/fasttrack/fasttrack_screen_img4.png",
  "/assets/images/fasttrack/fasttrack_screen_img5.png",
];

export default function FasttrackPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Hero Section - EXACT MATCH to original layout */}
      <section className="relative bg-[#f6f6de] overflow-visible mb-0 z-10" id="bannersection">

        {/* Left content inside the 1170px container */}
        <div className="w-full max-w-[1170px] mx-auto px-10 relative">
          <div className="flex flex-col lg:flex-row items-stretch justify-between min-h-[600px]">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%] z-10 py-12 flex flex-col justify-center">
              <Image 
                src="/assets/images/fasttrack/FT_logo.png" 
                alt="Fasttrack Logo" 
                width={218} 
                height={68} 
                className="object-contain mb-[20px] w-[218px] h-auto"
                priority
              />
              
              <h2 className="text-[26px] md:text-[34px] md:leading-[40px] font-black text-[#2B2B2B] m-0 pb-[38px] tracking-[-1.6px] max-w-[95%]">
                Cloud based end to end Uber Like Cab Aggregation Platform
              </h2>

              {/* Mobile Image */}
              <div className="w-full lg:hidden mt-6 mb-8 flex justify-center">
                <Image 
                  src="/assets/images/fasttrack/banner_rigth_image.png" 
                  alt="Fasttrack Apps" 
                  width={530} 
                  height={680} 
                  className="w-[70%] sm:w-[50%] md:w-[45%] max-w-[450px] h-auto object-contain"
                  priority
                />
              </div>
              
              {/* Stats List */}
              <ul className="list-none w-full m-0 p-0 mb-[30px]">
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon1.svg" text="10,000" sub="Drivers Managed Daily" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon2.svg" text="1.5 Million" sub="Customers" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon3.svg" text="10,000" sub="Bookings Daily" />
                <StatItem icon="/assets/images/fasttrack/FT_desc_icon4.svg" text="9000+" sub="Routes covered" />
              </ul>

              {/* Platforms Box */}
              <div className="dev_platform_box w-full">
                <p className="text-[15px] font-semibold text-[#2B2B2B] m-0 pb-[10px]">Platforms developed :</p>
                <ul className="inline-flex items-center list-none m-0 p-0 bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100">
                  <li className="inline-flex items-center py-[5px] pl-[10px] pr-[22px] relative">
                    <Image src="/assets/images/fasttrack/apple.svg" alt="iOS" width={25} height={25} className="w-[25px] h-auto object-contain" />
                    <span className="text-[15px] text-[#2B2B2B] font-medium pl-2">iOS</span>
                    <div className="absolute right-0 top-[10%] h-[80%] w-[1px] bg-[#bbb]" />
                  </li>
                  <li className="inline-flex items-center py-[5px] pl-[10px] pr-[22px] relative">
                    <Image src="/assets/images/fasttrack/android.svg" alt="Android" width={25} height={25} className="w-[25px] h-auto object-contain" />
                    <span className="text-[15px] text-[#2B2B2B] font-medium pl-2">Android</span>
                    <div className="absolute right-0 top-[10%] h-[80%] w-[1px] bg-[#bbb]" />
                  </li>
                  <li className="inline-flex items-center py-[5px] px-[10px]">
                    <Image src="/assets/images/fasttrack/html.svg" alt="Web" width={25} height={25} className="w-[25px] h-auto object-contain" />
                    <span className="text-[15px] text-[#2B2B2B] font-medium pl-2">Web</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop spacer */}
            <div className="hidden lg:block lg:w-[45%]" />
          </div>

          {/* Desktop Image – positioned relative to container */}
          <div className="hidden lg:block absolute right-10 top-[20px] w-[45%] z-20">
            <Image 
              src="/assets/images/fasttrack/banner_rigth_image.png" 
              alt="Fasttrack Apps" 
              width={600} 
              height={750} 
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Spacer to clear the absolute phone mockup from Overview section text */}
      <div className="h-0 lg:h-[150px] bg-white" />

      {/* 2. Overview Section */}
      <SplitSection 
        title="Overview" 
        content="Fast Track offers the most reliable and hassle free services throughout Tamilnadu, India covering its major cities-Chennai, Coimbatore, Madurai and Trichy for the past 19 years. Fast Track provides both outstation taxi booking and local cab services and operates the network and offices at all major cities of Tamil Nadu. They have 10,000 professional drivers covering 9,000 + routes and having a customer base of 15 Million users."
        bgColor="bg-white"
      />

      {/* 3. Project Apps Mosaic */}
      <section className="bg-[#f4f6f9] py-[50px]" id="project_apps_section">
        <div className="w-full max-w-[1170px] mx-auto px-10">
          <div className="w-full text-center">
            <Image 
              src="/assets/images/fasttrack/phoneimg.png" 
              alt="Project Apps" 
              width={1170} 
              height={550} 
              className="w-full h-auto object-contain"
            />
          </div>
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
      <section className="py-[50px] bg-[#fbfbfb]">
        <div className="w-full max-w-[1170px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row mb-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">Solution</h2>
            </div>
            <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
              <p className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333]">
                MacAppStudio designed and developed an end to end app cloud based cab management platform for FastTrack. The project was started in June 2018 and the development was completed and beta testing was started in Dec 2018. The platform went live in Jan 2019 and MacAppStudio operated the platform for 6 months till June 2019. The platform was handed over to the internal technical team of FastTrack by July 2019. MacAppStudio created a reliable, scalable and module cab management platform with apps for users, drivers, owners and board of directors. The admin system was developed to control the end to end operations and get timely information and reports with modules like bookings, driver dashboard, price cards, finance dashboard, live tracking dashboard, notification systems etc. The system was made so exhaustive that the only other software that Fasttrack needs other than this platform is Tally for finance compliance and tax filing purposes.
              </p>
            </div>
          </div>
          
          {/* App Screen Carousel */}
          <AppScreenCarousel screens={screens} />
        </div>
      </section>

      {/* 6. Technology & Status Section */}
      <section className="py-[50px] bg-[#fbfbfb] border-t border-gray-100">
        <div className="w-full max-w-[1170px] mx-auto px-10">
          {/* Technology Row */}
          <div className="flex flex-col lg:flex-row pb-12 border-b border-gray-200">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">Technology</h2>
            </div>
            <div className="w-full lg:w-2/3 mt-6 lg:mt-0 flex flex-wrap items-start gap-x-8 gap-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 border border-gray-100">
                    <Image src={tech.icon} alt={tech.name} width={40} height={40} className="object-contain h-[40px] w-auto" />
                  </div>
                  <span className="text-[13px] font-bold text-gray-500 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status Row */}
          <div className="flex flex-col lg:flex-row pt-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">Current Status</h2>
            </div>
            <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
              <p className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333]">
                The platform was launched in Nov 2017 and has been seamlessly managing{" "}
                <span className="font-extrabold text-[#2B2B2B]">4 locations, 16 screens</span> and{" "}
                <span className="font-extrabold text-[#2B2B2B]">3800 seats.</span> The platform has booked over{" "}
                <span className="font-extrabold text-[#2B2B2B]">6 million tickets</span> as of July 2019 and has{" "}
                <span className="font-extrabold text-[#2B2B2B]">100% replaced the legacy system</span> that AGS Cinemas was using earlier. Apart from ticketing process, the platform provides a lot of value added features, reports and insights to help the top management of the platform to take realtime business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Know more slider */}
      <WhatToKnowMore currentSlug="fasttrack" />
    </main>
  );
}

function StatItem({ icon, text, sub }: { icon: string, text: string, sub: string }) {
  return (
    <li className="flex items-center pb-[15px]">
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        <Image src={icon} alt="" width={32} height={32} className="object-contain" />
      </div>
      <p className="text-[17px] md:text-[22px] md:leading-[25px] text-[#2B2B2B] font-medium tracking-tight pl-[15px]">
        <span className="font-bold mr-1.5">{text}</span> {sub}
      </p>
    </li>
  );
}

function PlatformItem({ icon, label }: { icon: string, label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image src={icon} alt={label} width={25} height={25} className="object-contain" />
      <span className="text-[15px] font-medium text-[#2B2B2B]">{label}</span>
    </div>
  );
}

function SplitSection({ title, content, bgColor }: { title: string, content: string, bgColor: string }) {
  return (
    <section className={`py-[40px] border-b border-gray-100 ${bgColor}`}>
      <div className="w-full max-w-[1170px] mx-auto px-10 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">{title}</h2>
          </div>
          <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
            <p className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333]">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}