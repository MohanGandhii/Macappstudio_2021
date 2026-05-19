"use client";

import Image from "next/image";
import { FiMail } from "react-icons/fi";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const OFFICES = [
  {
    country: "India",
    address: ["MacAppStudio Private Limited,", "#32, 8th Cross Street, Ram Nagar South,", "Madipakkam, Chennai - 600091"],
    icon: "/assets/images/contactus/location_icon1.svg"
  },
  {
    country: "Singapore",
    address: ["MacAppStudio pte Limited,", "30 Cecil Street, #19-08 Prudential Tower,", "Singapore (049712)"],
    icon: "/assets/images/contactus/location_icon2.svg"
  },
  {
    country: "USA",
    address: ["MacAppStudio Inc,", "2035 Sunset Lake Road, Suit B-2,", "Newark, Delaware - 19702"],
    icon: "/assets/images/contactus/location_icon3.svg"
  }
];

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-blue-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Contact us
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                For general queries, sales and partnership please drop a mail anytime and we will reach you.
              </p>
              <a 
                href="mailto:contact@macappstudio.com"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiMail size={20} />
                Mail Us
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <Image
                src="/assets/images/contactus/banner_rigth_image.png"
                alt="Contact Us banner"
                width={500}
                height={400}
                className="w-full h-auto object-contain drop-shadow-xl max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our offices around the world</h2>
            <p className="text-lg text-gray-600">
              Have an idea? Let's grap a coffe and make a revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {OFFICES.map((office, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Image src={office.icon} alt={office.country} width={50} height={50} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.country}</h3>
                <div className="text-gray-600 leading-relaxed space-y-1">
                  {office.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
