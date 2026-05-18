"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlay, FiChevronLeft, FiChevronRight, FiMail } from "react-icons/fi";
import clsx from "clsx";

const VALUES = [
  { icon: "/assets/images/careers/icon1.svg", title: "The customer first approach", desc: "We only win when our customers succeed. We work tirelessly to solve their problem and maximize their efficiency." },
  { icon: "/assets/images/careers/icon2.svg", title: "Act with ownership", desc: "We are accountable for the company’s and the customer’s growth. Being responsible at work is crucial." },
  { icon: "/assets/images/careers/icon3.svg", title: "Doing best in what we do", desc: "May it be any work, focus on the work and create an impact. Be the best in your field." },
  { icon: "/assets/images/careers/icon4.svg", title: "No resume policy", desc: "A printed paper can’t tell us the potential of a person. We see people as humans with emotions." },
  { icon: "/assets/images/careers/icon5.svg", title: "Value idea over hierarchy", desc: "We welcome great ideas which has a great potential, from anyone regarless their roles and hierarchy." },
  { icon: "/assets/images/careers/icon6.svg", title: "Respect for individual", desc: "Treat everyone equal from the CEO to the house keeping and respect their differences and capacity." },
  { icon: "/assets/images/careers/icon7.svg", title: "Room for experimentation", desc: "We grow by experimenting new things and failing fast. Failure makes us smarter and we get back stronger." },
  { icon: "/assets/images/careers/icon8.svg", title: "Being honest to oneself", desc: "Honesty is the mother of all virtues. We respect and encourage people who are honest in their work." },
  { icon: "/assets/images/careers/icon9.svg", title: "Pushing the limit", desc: "We encourage and motivate people to take risks and set the bar high. This is how we can grow together." },
];

const BENEFITS = [
  { icon: "/assets/images/careers/icon10.svg", title: "Free accommodation with all benefits", desc: "Enjoy free stay near our office with all the benefits and experience a stress free commute." },
  { icon: "/assets/images/careers/icon11.svg", title: "Access to free food from our kitchen", desc: "Have a delightful breakfast, lunch, dinner, tea/coffe from our hygenic kitchen." },
  { icon: "/assets/images/careers/icon12.svg", title: "Health insurance for you and your family", desc: "Your health comes first and we got you covered with a comprehensive package to support you." },
  { icon: "/assets/images/careers/icon13.svg", title: "Pre approved leaves by default", desc: "Sick leave? Time to relax, rejuvenate? All your leaves are pre approved so that you can come back refreshed." },
  { icon: "/assets/images/careers/icon14.svg", title: "Instant reward for your performance", desc: "We recognize the works of our employees immediately and effectively." },
  { icon: "/assets/images/careers/icon15.svg", title: "Well protected term insurance", desc: "We provide a great backup for your loved ones and thier future." },
];

const STORIES_VIDEOS = [
  { poster: "/assets/images/careers/storiesposter1.jpeg", videoId: "mwhdgjuz5SY" },
  { poster: "/assets/images/careers/storiesposter2.jpg", videoId: "vRmBhkY_D3I" },
  { poster: "/assets/images/careers/storiesposter3.jpg", videoId: "cMki7QIqv3Q" },
  { poster: "/assets/images/careers/storiesposter4.jpg", videoId: "Lb2C_twoKxc" },
  { poster: "/assets/images/careers/storiesposter5.jpg", videoId: "_koA--9w0Xo" },
  { poster: "/assets/images/careers/storiesposter6.jpg", videoId: "3bQTENEW2XQ" },
];

const LIFE_IMAGES = Array.from({ length: 14 }).map((_, i) => `/assets/images/careers/life_macapp_img${i + 1}.jpg`);

export default function CareersPage() {
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const nextStory = () => setActiveStoryIdx(p => (p + 1) % STORIES_VIDEOS.length);
  const prevStory = () => setActiveStoryIdx(p => (p - 1 + STORIES_VIDEOS.length) % STORIES_VIDEOS.length);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-blue-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Join us and be a part of our great culture
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We never see resumes. Kindly send us a mail with your name, number and your story and our team will respond to you
              </p>
              <a 
                href="mailto:careers@macappstudio.com"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiMail size={20} />
                Mail Us
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group w-full max-w-lg"
                onClick={() => setVideoModal("oJc5ZqRuuv4")}
              >
                <Image
                  src="/assets/images/careers/banner_rigth_image1.jpg"
                  alt="Careers banner"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center pl-2 shadow-lg transform group-hover:scale-110 transition-transform">
                    <FiPlay size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at MacAppStudio */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life at MacAppStudio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a little sneak peek into the daily lives of how we enjoy our work and the company of others
            </p>
          </div>
        </div>
        
        {/* Infinite Auto-scrolling Gallery */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4">
          <div className="flex animate-scroll whitespace-nowrap gap-4">
            {[...LIFE_IMAGES, ...LIFE_IMAGES].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <Image src={img} alt="Life at MacAppStudio" width={320} height={240} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MacAppStudio */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why MacAppStudio ?</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 max-w-3xl mx-auto leading-relaxed">
              Because you get a life time opportunity to work with amazing people and make meaningful products.
            </h3>
          </div>
          
          <div className="flex justify-center mb-12">
            <Image src="/assets/images/careers/why_macapp.png" alt="Why MacAppStudio" width={800} height={400} className="w-full h-auto rounded-3xl shadow-xl" />
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none text-center md:text-left columns-1 md:columns-2 gap-12">
            <p className="mb-6 break-inside-avoid">
              We are a pack of humble people who are thinkers and doers. We work relentlessly towards a shared mission, which is to create awesome products and provide great experiences to people in new ways. Each and every employee in MacAppStudio is an innovator and we motivate them to take responsibilities and ownership in whatever work they do. That’s how we create the kinds of products and experiences that few ever imagine.
            </p>
            <p className="break-inside-avoid">
              You won’t just be crafting new products, you’ll work alongside exceptional people who insist on doing their best work to get there. We build together and grow together by experimenting, and there is no better classroom than real-world experience. Join us and help us transform the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Values we stand for</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MacAppStudio is built on a strong foundation of culture which is fundamental to our client success and essential in how we work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl hover:bg-blue-50 transition-colors border border-gray-100 group text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Image src={value.icon} alt={value.title} width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Benefits and Perks</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our employees are the pillars of our company and here’s how we take care of their well-being!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center backdrop-blur-sm group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Image src={benefit.icon} alt={benefit.title} width={40} height={40} className="filter brightness-0 invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 bg-white/5 py-4 px-6 rounded-full max-w-3xl mx-auto">
            <Image src="/assets/images/careers/info.svg" alt="Info" width={20} height={20} className="filter brightness-0 invert opacity-60" />
            <p className="text-sm">Actual benefit offerings may differ depending on your role and number of years employed at MacAppStudio.</p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Listen to their stories</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At MacAppStudio we believe powerful stories can reshape the world. We are humbled to share some of our employee stories which we will cherish forever.
              </p>
              <div className="flex gap-4">
                <button onClick={prevStory} className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm text-blue-600"><FiChevronLeft size={24} /></button>
                <button onClick={nextStory} className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm text-blue-600"><FiChevronRight size={24} /></button>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIdx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                  onClick={() => setVideoModal(STORIES_VIDEOS[activeStoryIdx].videoId)}
                >
                  <Image 
                    src={STORIES_VIDEOS[activeStoryIdx].poster} 
                    alt="Employee Story" 
                    width={800} 
                    height={450} 
                    className="w-full h-auto object-cover aspect-video" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm text-white border border-white/50 rounded-full flex items-center justify-center pl-2 transform group-hover:scale-110 transition-transform">
                      <FiPlay size={32} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inspired to Join us?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join us and help us to create wonderful products which touch people’s life. <br />
            We never see resumes. Kindly send us a mail with your name, number and your story and our team will respond to you.
          </p>
          <a 
            href="mailto:careers@macappstudio.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <FiMail size={24} />
            Mail Us
          </a>
        </div>
      </section>

      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur transition-colors"
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

      {/* Add CSS for continuous scrolling animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
