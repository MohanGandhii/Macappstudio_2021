"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPONENTS_1 = [
  { icon: "/assets/images/appdevelopment/c1.svg", name: "Email Login" },
  { icon: "/assets/images/appdevelopment/c3.svg", name: "Camera/Photos" },
  { icon: "/assets/images/appdevelopment/c5.svg", name: "Task List" },
  { icon: "/assets/images/appdevelopment/c7.svg", name: "Gallery - Photo/Video" },
  { icon: "/assets/images/appdevelopment/c9.svg", name: "Dashboard" },
  { icon: "/assets/images/appdevelopment/c11.svg", name: "Compass" },
  { icon: "/assets/images/appdevelopment/c13.svg", name: "Notes" },
  { icon: "/assets/images/appdevelopment/c15.svg", name: "Maps" },
  { icon: "/assets/images/appdevelopment/c2.svg", name: "Social Login" },
  { icon: "/assets/images/appdevelopment/c4.svg", name: "Custom User Interface" },
  { icon: "/assets/images/appdevelopment/c6.svg", name: "Expenses" },
  { icon: "/assets/images/appdevelopment/c8.svg", name: "Calendar" },
  { icon: "/assets/images/appdevelopment/c10.svg", name: "Activity Feed" },
  { icon: "/assets/images/appdevelopment/c12.svg", name: "Camera/Video" },
  { icon: "/assets/images/appdevelopment/c14.svg", name: "Share" },
  { icon: "/assets/images/appdevelopment/c16.svg", name: "Messaging" },
];

const COMPONENTS_2 = [
  { icon: "/assets/images/appdevelopment/D1.svg", name: "3rd party API" },
  { icon: "/assets/images/appdevelopment/D2.svg", name: "Admin System" },
  { icon: "/assets/images/appdevelopment/d3.svg", name: "Charts" },
  { icon: "/assets/images/appdevelopment/D4.svg", name: "CMS" },
  { icon: "/assets/images/appdevelopment/D5.svg", name: "Export" },
  { icon: "/assets/images/appdevelopment/D6.svg", name: "Geolocation" },
  { icon: "/assets/images/appdevelopment/d7.svg", name: "Payment" },
  { icon: "/assets/images/appdevelopment/D8.svg", name: "Push notifications" },
  { icon: "/assets/images/appdevelopment/d9.svg", name: "Rating" },
  { icon: "/assets/images/appdevelopment/D10.svg", name: "Reporting" },
  { icon: "/assets/images/appdevelopment/d11.svg", name: "Search" },
  { icon: "/assets/images/appdevelopment/D12.svg", name: "Shopping Cart" },
  { icon: "/assets/images/appdevelopment/D13.svg", name: "SMS" },
  { icon: "/assets/images/appdevelopment/D14.svg", name: "Sync" },
  { icon: "/assets/images/appdevelopment/D15.svg", name: "XML" },
  { icon: "/assets/images/appdevelopment/D16.svg", name: "Music" },
];

export default function RapidFrameworkSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentComponents = slide === 0 ? COMPONENTS_1 : COMPONENTS_2;

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" id="Rapid_app_section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">
            Rapid Application Development Framework
          </h2>
          <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal">
            We follow a rapid application development framework for our app development in which we use the prebuilt component to build an app instead of starting everything from scratch, which helps us to deliver apps in just 10% of the normal development time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/appdevelopment/component.png"
              alt="Rapid Components"
              width={700}
              height={500}
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-col lg:grid-rows-8 gap-x-4 gap-y-6 lg:gap-y-8"
                >
                  {currentComponents.map((comp, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={comp.icon}
                          alt={comp.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-[15px] text-[#444] transition-colors duration-300 group-hover:text-black">{comp.name}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2B2B2B] text-left">+ 1600 Frameworks</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
