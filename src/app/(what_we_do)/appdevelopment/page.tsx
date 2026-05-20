"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";
import CaseStudiesCarousel from "./_components/01_CaseStudiesCarousel";
import RapidFrameworkSection from "./_components/02_RapidFrameworkSection";

const DIGITAL_SERVICES = [
  { name: "iOS App Development", icon: "/assets/images/appdevelopment/ios.svg" },
  { name: "Android App Development", icon: "/assets/images/appdevelopment/android.svg" },
  { name: "Web App Development", icon: "/assets/images/appdevelopment/web.svg" },
  { name: "Blockchain", icon: "/assets/images/appdevelopment/blockchain.svg" },
  { name: "Internet of Things (IOT)", icon: "/assets/images/appdevelopment/iot.svg" },
  { name: "Artificial Intelligence", icon: "/assets/images/appdevelopment/ai.svg" },
  { name: "Machine Learning", icon: "/assets/images/appdevelopment/ml.svg" },
  { name: "Chatbots", icon: "/assets/images/appdevelopment/chat.svg" },
  { name: "Augmented Reality/Virtual Reality", icon: "/assets/images/appdevelopment/ar.svg" },
];

const WHY_CHOOSE_US = [
  {
    title: "Transparent Process",
    desc: "We involve you in each and every stages of the app development journey, so that you can take better decisions.",
    icon: "/assets/images/appdevelopment/transparent.svg",
  },
  {
    title: "Milestone Payments",
    desc: "Flexible milestone payment system enables you to pay at the time of each release, which we deliver every 15 days.",
    icon: "/assets/images/appdevelopment/milestone.svg",
  },
  {
    title: "Reliable Quality",
    desc: "We deliver 100% qualified products which passes several quality checks and rigorous testing.",
    icon: "/assets/images/appdevelopment/reliable.svg",
  },
  {
    title: "Built by experts",
    desc: "Your product will be crafted by experts who are veterans in their specific domain.",
    icon: "/assets/images/appdevelopment/built.svg",
  },
];

const HOW_WE_HELP = [
  { text: "Validate your vision and provide a clear roadmap", icon: "/assets/images/appdevelopment/1.svg" },
  { text: "Innovate solutions for complex problems", icon: "/assets/images/appdevelopment/2.svg" },
  { text: "Deliver products at 10x speed and maximize efficiency", icon: "/assets/images/appdevelopment/3.svg" },
  { text: "Adapt to latest technologies and provide a future proof product", icon: "/assets/images/appdevelopment/4.svg" },
  { text: "Ensure product scalability, security and modularity", icon: "/assets/images/appdevelopment/5.svg" },
  { text: "World class support during and after project completion", icon: "/assets/images/appdevelopment/6.svg" },
];

const DEV_PROCESS = [
  { text: "Requirements Analysis", icon: "/assets/images/appdevelopment/D1.svg" },
  { text: "Design", icon: "/assets/images/appdevelopment/D2.svg" },
  { text: "Architecture", icon: "/assets/images/appdevelopment/d3.svg" },
  { text: "Development", icon: "/assets/images/appdevelopment/D4.svg" },
  { text: "Build and Release", icon: "/assets/images/appdevelopment/D5.svg" },
  { text: "Quality Assurance", icon: "/assets/images/appdevelopment/D6.svg" },
  { text: "Submission to App Stores", icon: "/assets/images/appdevelopment/d7.svg" },
  { text: "Go Live", icon: "/assets/images/appdevelopment/D8.svg" },
  { text: "Settling Period in Market (3 months)", icon: "/assets/images/appdevelopment/d9.svg" },
  { text: "Post Launch Maintenance", icon: "/assets/images/appdevelopment/D10.svg" },
  { text: "Optimization and Enhancements", icon: "/assets/images/appdevelopment/d11.svg" },
];

const TOOLS = [
  { title: "iOS App Development", img: "/assets/images/appdevelopment/toolimg1.svg" },
  { title: "Android App Development", img: "/assets/images/appdevelopment/toolimg2.svg" },
  { title: "Web App Development", img: "/assets/images/appdevelopment/toolimg3.svg" },
  { title: "Cloud", img: "/assets/images/appdevelopment/toolimg4.svg" },
  { title: "Design", img: "/assets/images/appdevelopment/toolimg5.svg" },
  { title: "Database", img: "/assets/images/appdevelopment/toolimg6.svg" },
  { title: "Virtual and Mixed Reality", img: "/assets/images/appdevelopment/toolimg7.svg" },
  { title: "Server Technologies", img: "/assets/images/appdevelopment/toolimg8.svg" },
  { title: "Testing", img: "/assets/images/appdevelopment/toolimg9.svg" },
];

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 lg:pt-[100px] lg:pb-8 overflow-hidden bg-[#f4e6f4]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 z-10 text-left">
              <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-black text-[#2B2B2B] leading-[1.2] mb-8 tracking-tight max-w-[550px]">
                Build compelling applications tailored to suit your business needs
              </h1>
              <GetProposalButton className="bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors" />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="/assets/images/appdevelopment/heroimg.png"
                  alt="App Development Hero"
                  width={450}
                  height={380}
                  className="w-full max-w-[400px] h-auto object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">Digital services we provide</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-600 font-normal">
              We deliver a robust and secure applications which are scalable and reliable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_SERVICES.map((service, index) => (
              <div 
                key={index} 
                className={clsx(
                  "flex flex-col items-center justify-center p-12 text-center",
                  "border-gray-200",
                  // Add borders to create the inner grid lines
                  index % 3 !== 2 && "lg:border-r",
                  index < 6 && "lg:border-b",
                  // Mobile and tablet border logic
                  "border-b lg:border-b-0",
                  index === DIGITAL_SERVICES.length - 1 && "border-b-0"
                )}
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="max-h-full object-contain"
                  />
                </div>
                <p className="font-medium text-[#444] text-[15px]">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">Let’s digitize your business</h2>
            <p className="text-[18px] lg:text-[20px] text-gray-700 font-normal">
              We do apps for diverse platforms like Android, iOS, Web, Admin Dashboards, Chat Bots, POS
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/appdevelopment/devices.png"
              alt="Devices"
              width={1400}
              height={700}
              className="w-full max-w-6xl h-auto object-contain hidden md:block"
            />
            <Image
              src="/assets/images/appdevelopment/devicesmob.png"
              alt="Devices Mobile"
              width={600}
              height={600}
              className="w-full h-auto object-contain block md:hidden"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">Why choose us ?</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-700 font-normal">
              We are a bootstrapped company who understands the needs of our clients and help them grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="flex flex-col items-start text-left group">
                <div className="mb-6 h-14 flex items-center justify-start">
                  <Image src={item.icon} alt={item.title} width={56} height={56} className="object-contain" />
                </div>
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#2B2B2B] mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[15px] text-[#555] leading-[1.7] font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we can help */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">How we can help you ?</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal">
              With our amazing in-house talents, we deliver insightful solutions and<br className="hidden lg:block"/> you can witness a seamless transition of your business into the digital era.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/images/appdevelopment/question@2x.jpg"
                alt="Help"
                width={600}
                height={600}
                className="w-full max-w-[500px] mx-auto h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-center">
              {HOW_WE_HELP.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image src={item.icon} alt="icon" width={24} height={24} className="object-contain" />
                  </div>
                  <p className="text-[15px] lg:text-[16px] text-[#333] font-normal leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesCarousel />

      {/* Process */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">Our Development Process</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal">
              We ensure our clients experience a transparent and seamless process throughout the development journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEV_PROCESS.map((step, index) => (
              <div key={index} className="flex flex-col items-start bg-white p-8 border border-gray-200 rounded-sm">
                <div className="h-10 mb-8 flex items-center justify-start">
                  <Image src={step.icon} alt={step.text} width={36} height={36} className="object-contain" />
                </div>
                <p className="font-bold text-[#2B2B2B] leading-relaxed text-[15px]">{index + 1}. {step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-[#2B2B2B] mb-6 tracking-tight">Tools and technologies we use</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed font-normal">
              We have a love towards technology and we are obsessed with experimenting latest tools and trends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TOOLS.map((tool, index) => (
              <div key={index} className="bg-[#fafafa] p-8 flex flex-col items-start">
                <h3 className="text-[16px] lg:text-[18px] font-bold text-[#2B2B2B] mb-8">{tool.title}</h3>
                <div className="w-full">
                  <Image
                    src={tool.img}
                    alt={tool.title}
                    width={350}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RapidFrameworkSection />

      {/* App Delivery Section */}
      <section className="py-12 lg:py-16 bg-[#EBF9F2] overflow-hidden" id="app_delivery_section">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0">
            <div className="w-full md:w-7/12 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2B2B2B] mb-4 tracking-tight">
                App Delivery every 15 days
              </h2>
              <p className="text-[18px] lg:text-[22px] text-[#2B2B2B] font-medium leading-snug">
                <span className="block">Have a flexible milestone payment</span>
                <span className="block">system and pay as you go.</span>
              </p>
            </div>
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <Image
                src="/assets/images/appdevelopment/rocket@2x.png"
                alt="Rocket"
                width={300}
                height={300}
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
