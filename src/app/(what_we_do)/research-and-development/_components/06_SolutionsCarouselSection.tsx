"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SOLUTIONS = [
  {
    title: "iSurgeon",
    desc: "A path breaking realsense app useful for surgeon during surgery.",
    features: [
      { text: "Wave hand gesture", icon: "/assets/images/R-D/hand.svg" },
      { text: "Voice Command based Navigation", icon: "/assets/images/R-D/microphone.svg" },
      { text: "Voice Based Doctor / Nurse Call", icon: "/assets/images/R-D/wave.svg" },
      { text: "Critical Information Alert", icon: "/assets/images/R-D/bell.svg" },
    ],
    videoId: "Rw2jhdm36jU",
    link: "/case-studies/isurgeon",
    img: "/assets/images/R-D/isurgeon_poster1.jpg",
  },
  {
    title: "HomeTheater",
    desc: "A realsense app to play your favourite movies from couch using gestures",
    features: [
      { text: "Wave hand gesture", icon: "/assets/images/R-D/hand.svg" },
      { text: "Voice Command based Navigation", icon: "/assets/images/R-D/microphone.svg" },
      { text: "Voice Based Playback control", icon: "/assets/images/R-D/wave.svg" },
      { text: "Movie Information Summary", icon: "/assets/images/R-D/bell.svg" },
    ],
    videoId: null,
    link: "/case-studies/hometheatre",
    img: "/assets/images/R-D/isurgeon_poster2.jpg",
  },
  {
    title: "Dabb",
    desc: "DABB and get details on the go!",
    features: [
      { text: "Share anything you wish in a matter of seconds across any device", icon: "/assets/images/R-D/share.svg" },
      { text: "Share only the link you want & not your entire profile", icon: "/assets/images/R-D/eye.svg" },
      { text: "Make seamless payments without having to scan QR or ask for phone numbers.", icon: "/assets/images/R-D/wallet.svg" },
      { text: "High-end security enables data sharing only when user allows access by unlocking their phone.", icon: "/assets/images/R-D/secureshield.svg" },
    ],
    videoId: null,
    link: "/case-studies/dabb",
    img: "/assets/images/R-D/isurgeon_poster3.jpg",
  },
  {
    title: "Howdy",
    desc: "Hire eco friendly electric scooters for rent",
    features: [
      { text: "Keyless Pickup and Drop", icon: "/assets/images/R-D/scooter.svg" },
      { text: "Remote Immobilisation", icon: "/assets/images/R-D/lock.svg" },
      { text: "Anti bike theft", icon: "/assets/images/R-D/antibike.svg" },
      { text: "Inbuilt IoT system embedded in the bikes", icon: "/assets/images/R-D/embedded_icon.svg" },
      { text: "Track fuel and control speed using mobile app", icon: "/assets/images/R-D/track_fuel.svg" },
    ],
    videoId: null,
    link: "/case-studies/howdy",
    img: "/assets/images/R-D/isurgeon_poster4.jpg",
  },
];

export default function SolutionsCarouselSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const nextSlide = () => setActiveSlide((p) => (p + 1) % SOLUTIONS.length);
  const prevSlide = () => setActiveSlide((p) => (p - 1 + SOLUTIONS.length) % SOLUTIONS.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-left max-w-6xl mx-auto mb-12">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold text-[#2B2B2B] mb-4 tracking-tight leading-[1.1]">
            Delivering innovative solutions the world needs
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl">
            We strongly believe that research is the foundation on which robust innovation is built. We rely on research-based innovation to solve customer challenges and provide out of box solutions.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto bg-[#EEF8F8] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-16 gap-10"
            >
              <div className="w-full lg:w-[45%] text-left">
                <h2 className="text-[28px] md:text-[34px] font-bold text-[#2B2B2B] mb-3">{SOLUTIONS[activeSlide].title}</h2>
                <p className="text-[18px] md:text-[20px] text-[#444] mb-8 leading-[1.4] max-w-[95%]">{SOLUTIONS[activeSlide].desc}</p>
                
                <h3 className="font-bold text-[#2B2B2B] mb-5 text-[15px]">Features</h3>
                <ul className="space-y-4 mb-10">
                  {SOLUTIONS[activeSlide].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Image src={feature.icon} alt="" width={20} height={20} className="flex-shrink-0 object-contain" />
                      <span className="text-[14px] font-medium text-[#444]">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-8 mt-10">
                  {SOLUTIONS[activeSlide].videoId && (
                    <button 
                      onClick={() => setVideoModal(SOLUTIONS[activeSlide].videoId)}
                      className="bg-black text-white px-8 py-3.5 text-[15px] font-bold hover:bg-gray-900 transition-colors rounded-none"
                    >
                      Watch Demo
                    </button>
                  )}
                  <Link href={SOLUTIONS[activeSlide].link} className="inline-flex items-center gap-2 text-[15px] font-bold text-[#2B2B2B] hover:text-blue-600 transition-colors">
                    Read Case Study <span className="text-[18px] leading-none">&rarr;</span>
                  </Link>
                </div>

                {/* Custom Controls */}
                <div className="flex items-center gap-4 mt-12">
                  <button onClick={prevSlide} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white transition-colors">
                    <FiChevronLeft className="text-gray-600" />
                  </button>
                  <div className="w-[60px] md:w-[100px] h-[2px] bg-gray-300 relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#2B2B2B] transition-all duration-500"
                      style={{ width: `${((activeSlide + 1) / SOLUTIONS.length) * 100}%` }}
                    />
                  </div>
                  <button onClick={nextSlide} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white transition-colors">
                    <FiChevronRight className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-[55%] flex justify-end">
                <Image src={SOLUTIONS[activeSlide].img} alt={SOLUTIONS[activeSlide].title} width={800} height={600} className="w-full max-w-[700px] h-auto object-contain mix-blend-multiply" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors"
            >
              <FiX size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9 pt-[56.25%] relative">
              <iframe 
                src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`} 
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
