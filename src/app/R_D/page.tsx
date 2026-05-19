"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

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

export default function RDPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const nextSlide = () => setActiveSlide((p) => (p + 1) % SOLUTIONS.length);
  const prevSlide = () => setActiveSlide((p) => (p - 1 + SOLUTIONS.length) % SOLUTIONS.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-blue-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Creating the next big thing and exploring new horizons through experimentation.
              </h1>
              <GetProposalButton className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1" />
            </div>
            <div className="w-full lg:w-1/2 relative">
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Image
                  src="/assets/images/R-D/banner_rigth_image.png"
                  alt="R&D Hero"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Inventing What’s Next.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MacAppStudio’s success is based on our ability to create new experiences for our users and systematically invest in research and innovation. We invest in a range of emerging technologies and breakthroughs, which we believe will create significant opportunities to deliver value to our customers and growth for the company. In this fast-growing world, exploring and experimenting disruptive technologies is the key to managing technology risk and hence we maintain our long-term commitment to research and development across a wide spectrum of technologies, tools, and platforms.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <Image src="/assets/images/R-D/Inventing_poster_img1.jpg" alt="Inventing 1" width={600} height={400} className="w-full h-full object-cover rounded-3xl shadow-lg" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <Image src="/assets/images/R-D/Inventing_poster_img2.jpg" alt="Inventing 2" width={600} height={200} className="w-full h-1/2 object-cover rounded-3xl shadow-lg" />
              <Image src="/assets/images/R-D/Inventing_poster_img3.jpg" alt="Inventing 3" width={600} height={200} className="w-full h-1/2 object-cover rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Formula Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/3">
              <h3 className="text-blue-500 font-bold uppercase tracking-wider mb-4">MacAppStudio’s Innovation formula</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
                <span className="text-blue-500">E<sup className="text-2xl">3</sup></span> = Explore + Experiment + Embrace
              </h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <span className="text-blue-500 font-bold">Explore -</span>
                  <span className="text-gray-300">Know customer pain points and explore wide range of opportunities</span>
                </li>
                <li className="flex items-start gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <span className="text-blue-500 font-bold">Experiment -</span>
                  <span className="text-gray-300">Test your hypothesis by experimenting and getting feedback</span>
                </li>
                <li className="flex items-start gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <span className="text-blue-500 font-bold">Embrace -</span>
                  <span className="text-gray-300">Deliver out of box solutions and embrace the new normal</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image src="/assets/images/R-D/macapp_formula.png" alt="Formula" width={400} height={400} className="w-full max-w-sm h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Partner */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-3xl mx-auto">
            Hundreds of companies are considering MacAppStudio as their Innovation partner
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <Image src="/assets/images/R-D/dabb_logo.png" alt="Dabb" width={150} height={60} className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
            <Image src="/assets/images/R-D/howdy_logo.png" alt="Howdy" width={150} height={60} className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
            <Image src="/assets/images/R-D/intel_logo.svg" alt="Intel" width={150} height={60} className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
            <Image src="/assets/images/R-D/jio_logo.svg" alt="Jio" width={150} height={60} className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-7/12">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why they choose MacAppStudio as Innovation Partner?</h2>
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-6 bg-blue-50 py-4 rounded-r-xl">
                  <span className="font-bold">MacAppStudio is a firm where innovation is a way of life.</span> We create apps which integrate with cutting edge technologies to change the way people live.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">MacAppStudio itself is an experimentation!</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We are a company where we don’t settle for minimum. We deeply analyze and experiment how we do our daily tasks right from brewing a good coffee, delivering a unique proposal, our way of no resume policy and to creating meaningful products. Because of this quality of researching and exploring new solutions, MacAppStudio has grown this far.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Research and Development is about <span className="font-bold">bringing dreams to reality</span> and we have done it already for over <span className="font-bold">120 apps</span> in almost every single platform and device available.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center">
              <Image src="/assets/images/R-D/innovation_partner.png" alt="Innovation Partner" width={500} height={500} className="w-full max-w-md h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delivering innovative solutions the world needs</h2>
            <p className="text-lg text-gray-600">
              We strongly believe that research is the foundation on which robust innovation is built. We rely on research-based innovation to solve customer challenges and provide out of box solutions.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="w-full lg:w-5/12">
                  <h2 className="text-3xl font-extrabold text-blue-900 mb-4">{SOLUTIONS[activeSlide].title}</h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">{SOLUTIONS[activeSlide].desc}</p>
                  
                  <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Features</h3>
                  <ul className="space-y-4 mb-8">
                    {SOLUTIONS[activeSlide].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <Image src={feature.icon} alt="" width={24} height={24} className="flex-shrink-0" />
                        <span className="font-medium text-gray-800">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    {SOLUTIONS[activeSlide].videoId && (
                      <button 
                        onClick={() => setVideoModal(SOLUTIONS[activeSlide].videoId)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
                      >
                        Watch Demo
                      </button>
                    )}
                    <Link href={SOLUTIONS[activeSlide].link} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 bg-blue-50 px-6 py-3 rounded-full transition-colors border border-blue-100 group">
                      Read Case Study <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-7/12">
                  <Image src={SOLUTIONS[activeSlide].img} alt={SOLUTIONS[activeSlide].title} width={800} height={500} className="w-full h-auto rounded-2xl shadow-2xl object-cover" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6">
              <button onClick={prevSlide} className="p-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-lg transition-colors text-blue-600 z-10 relative">
                <FiChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6">
              <button onClick={nextSlide} className="p-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-lg transition-colors text-blue-600 z-10 relative">
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to bring your ideas to life?</h2>
          <GetProposalButton className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1" />
        </div>
      </section>

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
    </div>
  );
}
