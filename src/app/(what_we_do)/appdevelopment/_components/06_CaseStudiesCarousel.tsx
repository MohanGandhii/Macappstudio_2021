"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface StatItem {
  icon: string;
  label: string;
  desc: string;
}

interface FounderItem {
  name: string;
  role: string;
  image: string;
}

interface CaseStudyItem {
  id: string;
  logo: string;
  logoWidth: number;
  title: string;
  description: string;
  image: string;
  stats?: StatItem[];
  iconWidth?: number;
  founder?: FounderItem;
  link: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "speed",
    logo: "/assets/images/appdevelopment/speedlogo.svg",
    logoWidth: 164,
    title: "India’s #1 NEET Training app",
    description: "MacAppStudio has built a world class platform that has enabled us to scale our business to the next level. They delivered it ahead of time, the design and quality of the app was top notch. A lot of end users have come back to us complimenting the app and its ease of usage.",
    image: "/assets/images/appdevelopment/speeddevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/video.svg", label: "8TB", desc: "Course Content" },
      { icon: "/assets/images/appdevelopment/course.svg", label: "30+", desc: "Courses in a Single App" },
      { icon: "/assets/images/appdevelopment/doctor.svg", label: "1,00,000", desc: "Doctors Trained" },
      { icon: "/assets/images/appdevelopment/topper.svg", label: "100+", desc: "Toppers in 4 Years" },
    ],
    iconWidth: 25,
    founder: {
      name: "Dr.K.Vinayak Senthil",
      role: "Founder, Speed Medical Institute",
      image: "/assets/images/appdevelopment/speeddoctor.png",
    },
    link: "/success_stories/speed",
  },
  {
    id: "propcierge",
    logo: "/assets/images/appdevelopment/proplogo.svg",
    logoWidth: 224,
    title: "End to end Digital Platform for real estate and home services.",
    description: "Propcierge is an end to end digital platform for all real estate and home services. The services range from buying, renting, selling, documentation, rent collection to entire repairs and maintenance and deep cleaning. The user can also select the subscription option where the set of services in that package will be executed as per the schedule provided. The Propcierge application is available in Android, iOS and website.",
    image: "/assets/images/appdevelopment/propdevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/prop_icon1.svg", label: "360 degree", desc: "end to end services" },
      { icon: "/assets/images/appdevelopment/prop_icon2.svg", label: "Local experts and", desc: "verified personnel" },
      { icon: "/assets/images/appdevelopment/prop_icon3.svg", label: "20+", desc: "service categories" },
      { icon: "/assets/images/appdevelopment/prop_icon4.svg", label: "Flexible", desc: "service packages" },
    ],
    iconWidth: 50,
    link: "/success_stories/propcierge",
  },
  {
    id: "apple",
    logo: "/assets/images/appdevelopment/applelogo.svg",
    logoWidth: 164,
    title: "Paperless Exams Using Apple iPad and Apple Pencil",
    description: "Apple approached us in 2019 for a customised examination automated solution to transform the entire examinations process forever. We have developed the solution where students will take exams on Apple iPad using Apple Pencil in realtime and teachers evaluate the answers in Apple iPad using Apple Pencil once the evaluation is completed. Where creation, delivery and evaluation of examinations made seamlessly with several significant features like instant delivery of exams, question banks, multiple question papers, multiple levels of evaluation, test history and analytics. Administrator will approve and publish the results.",
    image: "/assets/images/appdevelopment/appledevice.png",
    link: "",
  },
  {
    id: "intel",
    logo: "/assets/images/appdevelopment/intelogo.svg",
    logoWidth: 230,
    title: "The Intel® App Finder is an app discovery platform",
    description: "The Intel® App Finder is an app discovery platform designed and developed by us in the quickest time and launched in 2016 and has been installed by millions of Intel Mobiles. The App will help you sort through the thousands of applications available to you on the Google Play Store. Now you can discover Android apps enabled for tablets powered by Intel® Atom Based Processors. These apps deliver experiences with rich graphics and optimized performance. Intel® App Finder also provides recommendations to find many of the latest apps to meet your software needs.",
    image: "/assets/images/appdevelopment/inteldevice.png",
    link: "",
  },
  {
    id: "ags",
    logo: "/assets/images/appdevelopment/agslogo.svg",
    logoWidth: 117,
    title: "World class end to end cinema ticketing platform.",
    description: "AGS is a popular multiplex which has a seating capacity of 3800 in 4 locations. Users will be able to seamlessly book tickets via several channels like apps, website, box office, phone booking, corporate booking along with other ticketing partners like BookMyShow, PayTM etc. We created an infrastructure where AGS could manage the end to end process CiniCloud of theatre management from one place at ease.",
    image: "/assets/images/appdevelopment/agsdevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/ags_icon1.svg", label: "10 Million+", desc: "Tickets booked" },
      { icon: "/assets/images/appdevelopment/ags_icon2.svg", label: "20,000", desc: "Seats Managed Everyday" },
      { icon: "/assets/images/appdevelopment/ags_icon3.svg", label: "15,000", desc: "Average tickets booked everyday" },
      { icon: "/assets/images/appdevelopment/ags_icon4.svg", label: "500,000+", desc: "Platform Users" },
    ],
    iconWidth: 35,
    link: "/success_stories/ags",
  },
];

export default function CaseStudiesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  const prev = () => setIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section className="py-20 bg-[#EDFBFF] overflow-hidden" id="casestudy_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1170px]">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="w-full lg:w-6/12 order-2 lg:order-1 text-left">
                <div className="casestudy_left_box">
                  <div className="mb-4">
                    <Image
                      src={CASE_STUDIES[index].logo}
                      alt="Logo"
                      width={CASE_STUDIES[index].logoWidth}
                      height={60}
                      style={{ width: `${CASE_STUDIES[index].logoWidth}px` }}
                      className="h-auto object-contain mb-2"
                    />
                  </div>
                  
                  <h3 
                    className="text-[26px] leading-[32px] font-semibold text-[#2B2B2B] m-0 py-3 tracking-[-0.65px]"
                    style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
                  >
                    {CASE_STUDIES[index].title}
                  </h3>
                  
                  {CASE_STUDIES[index].stats && (
                    <div className="case_study_data grid grid-cols-2 gap-x-6 gap-y-4 py-4 my-6 border-t border-b border-[#C0D7DD]">
                      {CASE_STUDIES[index].stats?.map((stat, i) => {
                        const iconW = CASE_STUDIES[index].iconWidth || 25;
                        return (
                          <div key={i} className="case_study_list flex items-center gap-2 py-2">
                            <Image 
                              src={stat.icon} 
                              alt="" 
                              width={iconW} 
                              height={iconW} 
                              style={{ width: `${iconW}px`, height: "auto" }}
                              className="object-contain flex-shrink-0" 
                            />
                            <p 
                              className="text-[18px] leading-[20px] text-[#2B2B2B]"
                              style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
                            >
                              <span className="font-bold text-[#2B2B2B]">{stat.label} </span>
                              {stat.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <p 
                    className="text-[18px] leading-[30px] text-[#2B2B2B] font-medium pt-4 pb-6 tracking-[-0.45px]"
                    style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
                  >
                    {CASE_STUDIES[index].id === "speed" ? `"${CASE_STUDIES[index].description}"` : CASE_STUDIES[index].description}
                  </p>
                  
                  {CASE_STUDIES[index].founder && (
                    <div className="oneside_img flex items-end gap-4 pb-9">
                      <Image
                        src={CASE_STUDIES[index].founder!.image}
                        alt="Founder"
                        width={68}
                        height={68}
                        className="w-[68px] h-auto object-contain flex-shrink-0"
                      />
                      <div className="oneside_word pl-6">
                        <h4 
                          className="text-[18px] leading-[24px] font-bold text-gray-900 m-0"
                          style={{ fontFamily: "AvenirNext-Bold, sans-serif" }}
                        >
                          {CASE_STUDIES[index].founder!.name}
                        </h4>
                        <p 
                          className="text-[16px] leading-[30px] text-gray-600 font-medium m-0"
                          style={{ fontFamily: "AvenirNext-Medium, sans-serif" }}
                        >
                          {CASE_STUDIES[index].founder!.role}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {CASE_STUDIES[index].link ? (
                    <Link 
                      href={CASE_STUDIES[index].link} 
                      className="read_more_box inline-flex items-center gap-2 relative -top-[10px] cursor-pointer"
                    >
                      <span 
                        className="text-[16px] leading-[30px] font-semibold text-[#2B2B2B]"
                        style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}
                      >
                        Read Case Study
                      </span>
                      <Image 
                        src="/assets/images/appdevelopment/right_arrow.svg" 
                        alt="Arrow" 
                        width={16} 
                        height={16} 
                        className="w-4 h-4 object-contain"
                      />
                    </Link>
                  ) : null}
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src={CASE_STUDIES[index].image}
                    alt="Project Preview"
                    width={800}
                    height={700}
                    className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
            <button 
              onClick={prev} 
              className="w-[37px] h-[37px] rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-all active:scale-95"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="w-[120px] h-[2px] bg-[#D0E5E9] relative">
              <div 
                className="h-full bg-black absolute top-0 transition-all duration-300" 
                style={{ 
                  width: `${120 / CASE_STUDIES.length}px`, 
                  left: `${(index * 120) / CASE_STUDIES.length}px` 
                }} 
              />
            </div>
            <button 
              onClick={next} 
              className="w-[37px] h-[37px] rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-all active:scale-95"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
