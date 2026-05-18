"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import OdysseyTimeline from "./_components/OdysseyTimeline";
import InitiativesSection from "./_components/InitiativesSection";
import RecentWorksSection from "@/components/shared/RecentWorksSection";

const BANNER_IMAGES = [
  "/assets/images/who_we_are/banner_rigth_image1.png",
  "/assets/images/who_we_are/banner_rigth_image2.png",
  "/assets/images/who_we_are/banner_rigth_image3.png",
  "/assets/images/who_we_are/banner_rigth_image4.png",
];

const HIGHLIGHTS = [
  { value: "2012", label: "Founded by George and Suresh" },
  { value: "80+", label: "Employees" },
  { value: "120+", label: "Trusted clients" },
  { value: "7", label: "Awards" },
];

const HIGHLIGHT_NOTES = [
  { text: "We are boot strapped and we are profitable.", icon: "/assets/images/who_we_are/bootstrap.svg" },
  { text: "We have the largest collection of pre-built frameworks in the world.", icon: "/assets/images/who_we_are/framework.svg" },
  { text: "We are now the most sought after software factory in the world.", icon: "/assets/images/who_we_are/star.svg" },
];

const TIMELINE = [
  { id: "all", label: "All" },
  { id: "2012", label: "2012" },
  { id: "2013", label: "2013" },
  { id: "2014", label: "2014" },
  { id: "2015", label: "2015" },
  { id: "2016", label: "2016" },
  { id: "2017", label: "2017" },
  { id: "2018", label: "2018" },
  { id: "2019", label: "2019" },
  { id: "2020", label: "2020" },
  { id: "2021", label: "2021" },
];

const TIMELINE_DATA = [
  {
    year: "2012",
    items: [
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image01.jpg",
        content: <>George and Suresh started MacAppStudio in a <span className="font-bold text-blue-600">300 sq.ft</span> space in <span className="font-bold text-blue-600">Madipakam</span> with an aim to make products which touch people’s life.</>
      }
    ]
  },
  {
    year: "2013",
    items: [
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/intel_icon.svg",
        leftText: <>Awarded as the <span className="font-bold text-blue-600">"Most Valuable Developers"</span> in Asia by Intel.</>,
        rightIcon: "/assets/images/who_we_are/Bitmap.png",
        rightText: <>Became the first in Asia to become <span className="font-bold text-blue-600">"Intel Blackbelts"</span>, the highest recognition for technical excellence in Intel.</>
      }
    ]
  },
  {
    year: "2014",
    items: [
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/service.svg",
        leftText: <>Expanded from App Development to <span className="font-bold text-blue-600">Software Services.</span></>,
        rightIcon: "/assets/images/who_we_are/crown.svg",
        rightText: <>Worked with 20+ clients including <span className="font-bold text-blue-600">"Fortune 10 Companies"</span></>
      }
    ]
  },
  {
    year: "2015",
    items: [
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image02.jpg",
        content: <>Expanded to a <span className="font-bold text-blue-600">team of 15</span> wonderful people to complete our <span className="font-bold text-blue-600">full automated assembly line process.</span></>
      },
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/grow.svg",
        leftText: <>Witnessed a year-on-year growth of <span className="font-bold text-blue-600">141%.</span></>,
        rightIcon: null,
        rightText: null
      }
    ]
  },
  {
    year: "2016",
    items: [
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/intel_innovar.png",
        leftText: <>Suresh and George are among the <span className="font-bold text-blue-600">Intel Worldwide Top 10 Innovators of 2016.</span></>,
        rightIcon: "/assets/images/who_we_are/devices.svg",
        rightText: <>Expanded from Software services to <span className="font-bold text-blue-600">End to end Platform development.</span></>
      }
    ]
  },
  {
    year: "2017",
    items: [
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/intel_innovar.png",
        leftText: <>Suresh and George are among the Intel <span className="font-bold text-blue-600">Worldwide Top 10 Innovators again in 2017.</span></>,
        rightIcon: "/assets/images/who_we_are/confetti.png",
        rightText: "80",
        rightImgCustom: true
      }
    ]
  },
  {
    year: "2018",
    items: [
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image03.jpg",
        content: <>Expanded to a <span className="font-bold text-blue-600">team of 80</span> awesome people.</>
      },
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/digital.svg",
        leftText: <>Digitally transformed <span className="font-bold text-blue-600">12+ enterprises</span> in operation over a decade.</>,
        rightIcon: null,
        rightText: null
      }
    ]
  },
  {
    year: "2019",
    items: [
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image04.png",
        content: <><span className="text-4xl font-black text-blue-600 block mb-2">100 Million</span>Transactions in a day in all platforms development by us all over the world.</>
      },
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image05.png",
        content: <>Our App <span className="font-bold text-blue-600">Declutter</span> recognized as the the <span className="font-bold text-blue-600">Best Productivity App</span> for the Year.</>
      }
    ]
  },
  {
    year: "2020",
    items: [
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/grow.svg",
        leftText: <>Witnessed an amazing year-on-year growth of <span className="font-bold text-blue-600">120%</span> even in a Covid year.</>,
        rightIcon: "/assets/images/who_we_are/pepul.svg",
        rightText: <>Started creation of <span className="font-bold text-blue-600">Pepul</span> and several other own digital platforms.</>
      }
    ]
  },
  {
    year: "2021",
    items: [
      {
        type: "ceo",
        img: "/assets/images/who_we_are/odyssey_image04.png",
        content: <><span className="text-4xl font-black text-blue-600 block mb-2">120 Million</span>Transactions in a day in all platforms development by us all over the world.</>
      },
      {
        type: "split",
        leftIcon: "/assets/images/who_we_are/digital.svg",
        leftText: <>Helping enterprises and other companies digitally transform rapidly Post-Covid.</>,
        rightIcon: null,
        rightText: null
      }
    ]
  }
];

export default function WhoWeArePage() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-56 overflow-hidden bg-[#f0f8ff]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-7/12 z-10 text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-10 tracking-tight">
                Our mission is to make our clients <span className="text-blue-600">succeed and sustain</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                At MacAppStudio, we are not only committed to provide novel solutions but also to make our client sustain and be among the elite in their domain.
              </p>
            </div>
            <div className="w-full lg:w-5/12 relative h-[300px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={BANNER_IMAGES[activeImg]}
                    alt="Who we are banner"
                    width={700}
                    height={600}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Our Highlights</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {HIGHLIGHTS.map((item, index) => (
              <div key={index} className="text-center p-12 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <h3 className="text-6xl md:text-7xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform">{item.value}</h3>
                <p className="text-xl text-gray-900 font-black uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {HIGHLIGHT_NOTES.map((note, index) => (
              <div key={index} className="flex items-center gap-8 max-w-sm group">
                <div className="w-20 h-20 bg-blue-50 rounded-[20px] flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 flex-shrink-0 shadow-lg shadow-blue-100">
                  <Image src={note.icon} alt="" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
                <p className="text-gray-900 text-xl font-black leading-tight tracking-tight">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 tracking-tight">Our Approach</h2>
              <div className="bg-white p-12 lg:p-16 rounded-[48px] shadow-2xl shadow-gray-200 border border-gray-100 relative">
                <div className="absolute top-0 left-0 w-4 h-full bg-blue-600 rounded-l-[48px]"></div>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic">
                  &quot;Our aim is simple and that is to create apps that touch people&apos;s life. Being a customer centric company we try to keep everything simple and transparent. We apply strategic thinking, design insight and practicality to each of our projects with the goal of delivering success from both design and implementation.&quot;
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                <Image src="/assets/images/who_we_are/approach.png" alt="Approach" width={700} height={600} className="relative z-10 w-full max-w-2xl h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-[80px] p-12 lg:p-24 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600 rounded-full blur-[200px] opacity-20 translate-x-1/3 -translate-y-1/3 group-hover:opacity-30 transition-opacity duration-1000"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative group/img">
                  <div className="absolute inset-0 bg-blue-600 rounded-[40px] blur-3xl opacity-30 group-hover/img:opacity-50 transition-opacity"></div>
                  <Image src="/assets/images/who_we_are/frame.png" alt="Intel Frame" width={450} height={600} className="relative z-10 w-full max-w-md h-auto drop-shadow-2xl rounded-[40px] border border-white/10" />
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-8 mb-12">
                  <Image src="/assets/images/who_we_are/intel_icon.svg" alt="Intel" width={100} height={100} className="filter brightness-0 invert" />
                  <h2 className="text-4xl lg:text-6xl font-black tracking-tight">Interview with Intel</h2>
                </div>
                <h3 className="text-2xl lg:text-4xl font-black mb-10 text-blue-400 tracking-tight">
                  Intel BlackBelt Software Developers
                </h3>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 font-medium">
                  Our Founders George and Suresh are two of the 10 Intel BlackBelts who are not Intel Employees. We are humbled and honored to get an opportunity to be interviewed by Intel.
                </p>
                <a 
                  href="https://software.intel.com/content/www/us/en/develop/blogs/intel-black-belt-software-developers-suresh-george-from-childhood-friends-to.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-2xl font-black transition-all shadow-2xl hover:shadow-blue-600/20 transform hover:-translate-y-2 active:scale-95"
                >
                  <span>Read Full Interview</span>
                  <FiArrowRight size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Odyssey Timeline */}
      <OdysseyTimeline timelineData={TIMELINE_DATA} tabs={TIMELINE} />

      <InitiativesSection />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px bg-gray-100"></div>
      </div>

      <RecentWorksSection />
    </div>
  );
}
