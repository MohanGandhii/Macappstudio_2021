"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: "speed",
    logo: "/assets/images/appdevelopment/speedlogo.svg",
    title: "India’s #1 NEET Training app",
    description: "MacAppStudio has built a world class platform that has enabled us to scale our business to the next level. They delivered it ahead of time, the design and quality of the app was top notch. A lot of end users have come back to us complimenting the app and its ease of usage.",
    image: "/assets/images/appdevelopment/speeddevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/video.svg", label: "8TB", desc: "Course Content" },
      { icon: "/assets/images/appdevelopment/course.svg", label: "30+", desc: "Courses in a Single App" },
      { icon: "/assets/images/appdevelopment/doctor.svg", label: "1,00,000", desc: "Doctors Trained" },
      { icon: "/assets/images/appdevelopment/topper.svg", label: "100+", desc: "Toppers in 4 Years" },
    ],
    founder: {
      name: "Dr.K.Vinayak Senthil",
      role: "Founder, Speed Medical Institute",
      image: "/assets/images/appdevelopment/speeddoctor.png",
    },
    link: "/case-studies/speedlearning",
  },
  {
    id: "propcierge",
    logo: "/assets/images/appdevelopment/proplogo.svg",
    title: "End to end Digital Platform for real estate and home services.",
    description: "Propcierge is an end to end digital platform for all real estate and home services. The services range from buying, renting, selling, documentation, rent collection to entire repairs and maintenance and deep cleaning.",
    image: "/assets/images/appdevelopment/propdevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/prop_icon1.svg", label: "360 degree", desc: "end to end services" },
      { icon: "/assets/images/appdevelopment/prop_icon2.svg", label: "Local experts", desc: "verified personnel" },
      { icon: "/assets/images/appdevelopment/prop_icon3.svg", label: "20+", desc: "service categories" },
      { icon: "/assets/images/appdevelopment/prop_icon4.svg", label: "Flexible", desc: "service packages" },
    ],
    link: "/case-studies/propcierge",
  },
  {
    id: "apple",
    logo: "/assets/images/appdevelopment/applelogo.svg",
    title: "Paperless Exams Using Apple iPad and Apple Pencil",
    description: "Apple approached us in 2019 for a customised examination automated solution to transform the entire examinations process forever. We have developed the solution where students will take exams on Apple iPad using Apple Pencil in realtime.",
    image: "/assets/images/appdevelopment/appledevice.png",
    link: "/case-studies/apple",
  },
  {
    id: "intel",
    logo: "/assets/images/appdevelopment/intelogo.svg",
    title: "The Intel® App Finder is an app discovery platform",
    description: "The Intel® App Finder is an app discovery platform designed and developed by us in the quickest time and launched in 2016 and has been installed by millions of Intel Mobiles.",
    image: "/assets/images/appdevelopment/inteldevice.png",
    link: "/case-studies/intel",
  },
  {
    id: "ags",
    logo: "/assets/images/appdevelopment/agslogo.svg",
    title: "World class end to end cinema ticketing platform.",
    description: "AGS is a popular multiplex which has a seating capacity of 3800 in 4 locations. Users will be able to seamlessly book tickets via several channels like apps, website, box office, phone booking, etc.",
    image: "/assets/images/appdevelopment/agsdevice.png",
    stats: [
      { icon: "/assets/images/appdevelopment/ags_icon1.svg", label: "10 Million+", desc: "Tickets booked" },
      { icon: "/assets/images/appdevelopment/ags_icon2.svg", label: "20,000", desc: "Seats Managed Everyday" },
      { icon: "/assets/images/appdevelopment/ags_icon3.svg", label: "15,000", desc: "Average tickets booked" },
      { icon: "/assets/images/appdevelopment/ags_icon4.svg", label: "500,000+", desc: "Platform Users" },
    ],
    link: "/case-studies/ags",
  },
];

export default function CaseStudiesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  const prev = () => setIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section className="py-20 bg-white overflow-hidden" id="casestudy_section">
      <div className="container mx-auto px-4 lg:px-8">
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
              <div className="w-full lg:w-6/12 order-2 lg:order-1">
                <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
                  <Image
                    src={CASE_STUDIES[index].logo}
                    alt="Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain mb-8"
                  />
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                    {CASE_STUDIES[index].title}
                  </h3>
                  
                  {CASE_STUDIES[index].stats && (
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      {CASE_STUDIES[index].stats?.map((stat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Image src={stat.icon} alt="" width={24} height={24} className="mt-1" />
                          <div>
                            <p className="font-bold text-gray-900 leading-tight">
                              <span className="text-blue-600">{stat.label}</span> {stat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-10 italic">
                    &quot;{CASE_STUDIES[index].description}&quot;
                  </p>
                  
                  {CASE_STUDIES[index].founder && (
                    <div className="flex items-center gap-4 mb-10">
                      <Image
                        src={CASE_STUDIES[index].founder!.image}
                        alt="Founder"
                        width={60}
                        height={60}
                        className="rounded-full shadow-lg"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{CASE_STUDIES[index].founder!.name}</h4>
                        <p className="text-sm text-gray-500">{CASE_STUDIES[index].founder!.role}</p>
                      </div>
                    </div>
                  )}
                  
                  <Link href={CASE_STUDIES[index].link} className="inline-flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all group">
                    <span>Read Case Study</span>
                    <FiArrowRight size={20} />
                  </Link>
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
          
          <div className="flex justify-center lg:justify-start mt-12 gap-4 lg:absolute lg:bottom-12 lg:left-12">
            <button onClick={prev} className="p-4 bg-white hover:bg-blue-600 hover:text-white rounded-full shadow-lg transition-all border border-gray-100 group">
              <FiChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-4 bg-white hover:bg-blue-600 hover:text-white rounded-full shadow-lg transition-all border border-gray-100 group">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
