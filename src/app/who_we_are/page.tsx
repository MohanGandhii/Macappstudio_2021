"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HeroSection from "./_components/00_HeroSection";
import HighlightsSection from "./_components/01a_HighlightsSection";
import OurApproachSection from "./_components/01b_OurApproachSection";
import IntelSection from "./_components/01c_IntelSection";
import InterviewWithIntelSection from "./_components/01d_InterviewWithIntelSection";
import OdysseyTimeline from "./_components/01e_OdysseyTimeline";



const TIMELINE = [
  { id: "all", label: "All" },
  { id: "2012", label: "2012" },
  { id: "2013", label: "2013" },
  { id: "2014", label: "2014" },
  { id: "2015", label: "2015" },
  { id: "2016", label: "2016" },
  { id: "2017", label: "2017" },
  { id: "2018", label: "2018" },
  { id: "2019", label: "2019" },
  { id: "2020", label: "2020" },
  { id: "2021", label: "2021" },
];

const TIMELINE_DATA = [
  {
    year: "2012",
    items: [
      {
        type: "ceo",
        bgColor: "#F4F0FF",
        img: "/assets/images/who_we_are/odyssey_image01.jpg",
        content: <>George and Suresh started MacAppStudio in a <strong>300 sq.ft</strong> space in <strong>Madipakam</strong> with an aim to make products which touch people’s life.</>
      }
    ]
  },
  {
    year: "2013",
    items: [
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        rightBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/intel_icon.svg",
        leftText: <>Awarded as the <strong>"Most Valuable Developers"</strong> in Asia by Intel.</>,
        rightIcon: "/assets/images/who_we_are/Bitmap.png",
        rightText: <>Became the first in Asia to become <strong>"Intel Blackbelts"</strong>, the highest recognition for technical excellence in Intel.</>
      }
    ]
  },
  {
    year: "2014",
    items: [
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        rightBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/service.svg",
        leftText: <>Expanded from App Development to <strong>Software Services.</strong></>,
        rightIcon: "/assets/images/who_we_are/crown.svg",
        rightText: <>Worked with 20+ clients including <strong>"Fortune 10 Companies"</strong></>
      }
    ]
  },
  {
    year: "2015",
    items: [
      {
        type: "ceo",
        bgColor: "#EAF7F0",
        img: "/assets/images/who_we_are/odyssey_image02.jpg",
        content: <>Expanded to a <strong>team of 15</strong> wonderful people to complete our <strong>full automated assembly line process.</strong></>
      },
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/grow.svg",
        leftText: <>Witnessed a year-on-year growth of <strong>141%.</strong></>,
        rightIcon: null,
        rightText: null
      }
    ]
  },
  {
    year: "2016",
    items: [
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        rightBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/intel_innovar.png",
        leftText: <>Suresh and George are among the <strong>Intel Worldwide Top 10 Innovators of 2016.</strong></>,
        rightIcon: "/assets/images/who_we_are/devices.svg",
        rightText: <>Expanded from Software services to <strong>End to end Platform development.</strong></>
      }
    ]
  },
  {
    year: "2017",
    items: [
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        rightBgColor: "#FAF0F8",
        leftIcon: "/assets/images/who_we_are/intel_innovar.png",
        leftText: <>Suresh and George are among the Intel <strong>Worldwide Top 10 Innovators again in 2017.</strong></>,
        rightIcon: "/assets/images/who_we_are/confetti.png",
        rightText: "80",
        rightSubText: "Projects successfully executed.",
        rightImgCustom: true
      }
    ]
  },
  {
    year: "2018",
    items: [
      {
        type: "ceo",
        bgColor: "#EBF7FC",
        img: "/assets/images/who_we_are/odyssey_image03.jpg",
        content: <>Expanded to a <strong>team of 80</strong> awesome people.</>
      },
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/digital.svg",
        leftText: <>Digitally transformed <strong>12+ enterprises</strong> in operation over a decade.</>,
        rightIcon: null,
        rightText: null
      }
    ]
  },
  {
    year: "2019",
    items: [
      {
        type: "ceo",
        bgColor: "#F0EDFC",
        img: "/assets/images/who_we_are/odyssey_image04.png",
        content: <><span className="text-[44px] md:text-[56px] font-black text-[#2B2B2B] leading-none mb-1 md:mr-4 block md:inline-block">100 Million</span> <span className="text-[13px] md:text-[14px] font-medium text-[#444] inline-block mt-2 md:mt-0">Transactions in a day in all platforms development by us all over the world.</span></>,
        customLayout: true
      },
      {
        type: "ceo",
        bgColor: "#FDF5EA",
        img: "/assets/images/who_we_are/odyssey_image05.png",
        content: <>Our App <strong>Declutter</strong> recognized as the the <strong>Best Productivity App</strong> for the Year.</>
      }
    ]
  },
  {
    year: "2020",
    items: [
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        rightBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/grow.svg",
        leftText: <>Witnessed an amazing year-on-year growth of <strong>120%</strong> even in a Covid year.</>,
        rightIcon: "/assets/images/who_we_are/pepul.svg",
        rightText: <>Started creation of <strong>Pepul</strong> and several other own digital platforms.</>
      }
    ]
  },
  {
    year: "2021",
    items: [
      {
        type: "ceo",
        bgColor: "#E9F7EC",
        img: "/assets/images/who_we_are/odyssey_image04.png",
        content: <><span className="text-[44px] md:text-[56px] font-black text-[#2B2B2B] leading-none mb-1 md:mr-4 block md:inline-block">120 Million</span> <span className="text-[13px] md:text-[14px] font-medium text-[#444] inline-block mt-2 md:mt-0">Transactions in a day in all platforms development by us all over the world.</span></>,
        customLayout: true
      },
      {
        type: "split",
        leftBgColor: "#FAFAFA",
        leftIcon: "/assets/images/who_we_are/digital.svg",
        leftText: <>Helping enterprises and other companies digitally transform rapidly Post-Covid.</>,
        rightIcon: null,
        rightText: null
      }
    ]
  }
];

export default function WhoWeArePage() {

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Our Approach */}
      <OurApproachSection />

      {/* Intel Section */}
      <IntelSection />

      {/* Interview with Intel Section */}
      <InterviewWithIntelSection />

      {/* Odyssey Timeline */}
      <OdysseyTimeline timelineData={TIMELINE_DATA} tabs={TIMELINE} />

    </div>
  );
}
