"use client";

import Image from "next/image";
import { FiMail, FiPlay } from "react-icons/fi";

interface HeroSectionProps {
  onPlayVideo: (videoId: string) => void;
}

export default function HeroSection({ onPlayVideo }: HeroSectionProps) {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#F6F9FD]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2B2B2B] leading-tight mb-6">
              Join us and be a part of our great culture
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We never see resumes. Kindly send us a mail with your name, number and your story and our team will respond to you
            </p>
            <a 
              href="mailto:careers@macappstudio.com"
              className="inline-flex items-center justify-center gap-3 bg-[#1D5CFF] text-white px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <FiMail size={18} />
              Mail Us
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group w-full max-w-lg"
              onClick={() => onPlayVideo("oJc5ZqRuuv4")}
            >
              <Image
                src="/assets/images/careers/banner_rigth_image1.jpg"
                alt="Careers banner"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-[#1D5CFF] text-white rounded-full flex items-center justify-center pl-2 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <FiPlay size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
