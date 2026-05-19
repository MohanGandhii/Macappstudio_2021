"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
  "Validate your vision and provide a clear roadmap",
  "Innovate solutions for complex problems",
  "Deliver products at 10x speed and maximize efficiency",
  "Adapt to latest technologies and provide a future proof product",
  "Ensure product scalability, security and modularity",
  "World class support during and after project completion",
];

const DEV_PROCESS = [
  "Requirements Analysis",
  "Design",
  "Architecture",
  "Development",
  "Build and Release",
  "Quality Assurance",
  "Submission to App Stores",
  "Go Live",
  "Settling Period in Market (3 months)",
  "Post Launch Maintenance",
  "Optimization and Enhancements",
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
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-56 overflow-hidden bg-[#f0f8ff]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-7/12 z-10 text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-10 tracking-tight">
                Build compelling applications <span className="text-blue-600">tailored to suit</span> your business needs
              </h1>
              <GetProposalButton className="bg-black text-white px-12 py-5 text-2xl font-black hover:bg-gray-800 transition-all shadow-2xl active:scale-95" />
            </div>
            <div className="w-full lg:w-5/12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>
                <Image
                  src="/assets/images/appdevelopment/heroimg.png"
                  alt="App Development Hero"
                  width={700}
                  height={600}
                  className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Digital services we provide</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We deliver robust and secure applications which are scalable and reliable
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {DIGITAL_SERVICES.map((service, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-50 rounded-[40px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 w-56 text-center group border border-gray-100 hover:-translate-y-2">
                <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center mb-8 shadow-md group-hover:bg-blue-600 transition-all duration-500">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={80}
                    height={80}
                    className="h-16 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  />
                </div>
                <p className="font-black text-gray-900 text-lg leading-tight tracking-tight">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Let’s digitize your business</h2>
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-medium">
              We do apps for diverse platforms like Android, iOS, Web, Admin Dashboards, Chat Bots, POS
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/appdevelopment/devices.png"
              alt="Devices"
              width={1400}
              height={700}
              className="w-full max-w-6xl h-auto object-contain hidden md:block drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transform hover:scale-[1.03] transition-transform duration-700"
            />
            <Image
              src="/assets/images/appdevelopment/devicesmob.png"
              alt="Devices Mobile"
              width={600}
              height={600}
              className="w-full h-auto object-contain block md:hidden drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Why choose us?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              We are a bootstrapped company who understands the needs of our clients and help them grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="text-center p-12 border border-gray-100 rounded-[48px] hover:shadow-2xl transition-all duration-500 bg-gray-50 group hover:-translate-y-2">
                <div className="bg-white w-24 h-24 mx-auto rounded-[24px] flex items-center justify-center mb-10 shadow-lg group-hover:bg-blue-600 transition-all duration-500">
                  <Image src={item.icon} alt={item.title} width={60} height={60} className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we can help */}
      <section className="py-32 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/4"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">How we can help you?</h2>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-medium">
              With our amazing in-house talents, we deliver insightful solutions and you can witness a seamless transition of your business into the digital era.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/assets/images/appdevelopment/question@2x.jpg"
                  alt="Help"
                  width={700}
                  height={700}
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-[2s]"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 space-y-6">
              {HOW_WE_HELP.map((text, index) => (
                <div key={index} className="flex items-center gap-8 bg-white/10 p-8 rounded-[32px] border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group">
                  <span className="flex-shrink-0 w-16 h-16 bg-white text-blue-600 rounded-[20px] flex items-center justify-center font-black text-2xl shadow-xl">
                    {index + 1}
                  </span>
                  <p className="text-2xl font-black leading-tight tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesCarousel />

      {/* Process */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Our Development Process</h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              We ensure our clients experience a transparent and seamless process throughout the development journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {DEV_PROCESS.map((step, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <span className="text-5xl font-black text-blue-50 mb-6 block leading-none">{index + 1}</span>
                <p className="font-black text-gray-900 leading-tight text-lg tracking-tight">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Tools and technologies</h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              We have a love towards technology and we are obsessed with experimenting latest tools and trends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TOOLS.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-[48px] p-12 text-center border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-2xl font-black text-gray-900 mb-10 tracking-tight">{tool.title}</h3>
                <div className="flex justify-center items-center h-28">
                  <Image
                    src={tool.img}
                    alt={tool.title}
                    width={250}
                    height={120}
                    className="object-contain max-h-full opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RapidFrameworkSection />

      {/* App Delivery Section */}
      <section className="py-40 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500 rounded-full blur-[200px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="w-full lg:w-7/12">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.05] tracking-tighter">
                App Delivery <span className="text-blue-200">every 15 days</span>
              </h2>
              <p className="text-2xl lg:text-3xl text-blue-100 font-bold tracking-tight">
                Have a flexible milestone payment system and pay as you go.
              </p>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/assets/images/appdevelopment/rocket@2x.png"
                  alt="Rocket"
                  width={500}
                  height={500}
                  className="w-80 md:w-[450px] h-auto object-contain relative z-10 animate-bounce-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
