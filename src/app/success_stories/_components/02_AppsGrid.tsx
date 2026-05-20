import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CASE_STUDIES = [
  { title: "Fasttrack", desc: "Cloud based end to end Uber like Cab Aggregation Platform", img: "/assets/images/success_stories/track.png", link: "/success_stories/fasttrack" },
  { title: "Howdy", desc: "Hire eco friendly electric scooters for rent", img: "/assets/images/success_stories/Howdy.png", link: "/success_stories/howdy" },
  { title: "Sarva", desc: "End to end wellness ecosystem built on the authentic foundations of Yoga.", img: "/assets/images/success_stories/Sarva.png", link: "/success_stories/sarva" },
  { title: "SPEED Learning App", desc: "India’s #1 NEET Training app", img: "/assets/images/success_stories/speed.png", link: "/success_stories/speed" },
  { title: "Propcierge", desc: "End to end Digital Platform for real estate and home services.", img: "/assets/images/success_stories/Propcierge.png", link: "/success_stories/propcierge" },
  { title: "AGS Cinemas", desc: "World class end to end cinema ticketing apps and website.", img: "/assets/images/success_stories/ags.png", link: "/success_stories/ags" },
  { title: "DABB", desc: "End to end Digital Platform for real estate and home services.", img: "/assets/images/success_stories/dabb.png", link: "/success_stories/dabb" },
  { title: "Daydoc", desc: "Home Healthcare now a click away!", img: "/assets/images/success_stories/daydoc.png", link: "/success_stories/daydoc" },
  { title: "Znap", desc: "#1 cashback app in UAE", img: "/assets/images/success_stories/Znap.png", link: "/success_stories/znap" },
  { title: "Maidpro", desc: "Maid Service App in Boston", img: "/assets/images/success_stories/Maidpro.png", link: "/success_stories/maidpro" },
  { title: "Mediyoga", desc: "#1 Digital Prescription platform for Doctors", img: "/assets/images/success_stories/Mediyoga.png", link: "/success_stories/mediyoga" },
  { title: "Spony", desc: "Event Sponsorship connection building App", img: "/assets/images/success_stories/Spony.png", link: "/success_stories/spony" },
  { title: "NIR", desc: "Platform specially made for Roof Care", img: "/assets/images/success_stories/NIR.png", link: "/success_stories/nir" },
  { title: "Godmusic", desc: "Music app to enjoy Christian Devotional Songs.", img: "/assets/images/success_stories/GodMusic.png", link: "/success_stories/godmusic" },
  { title: "ATG", desc: "A devotional journal app to enjoy your walk with God", img: "/assets/images/success_stories/ATG.png", link: "/success_stories/atg" },
];

export default function CraftedAppsGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className="relative bg-[#f4f6f9] rounded-xl overflow-hidden flex flex-col pt-8 px-8 h-[440px] group border border-gray-100 shadow-sm transition-all">
              
              {/* Header Info */}
              <div className="mb-4">
                <h3 
                  className="text-[28px] font-bold text-[#111] mb-2 tracking-tight"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-[16px] text-[#555] leading-[1.4] max-w-[95%] font-medium"
                  style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                >
                  {study.desc}
                </p>
              </div>
              
              {/* Mockup Container (Using the asset as-is since it contains both phones) */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none">
                <div className="relative w-full h-[300px] flex items-end justify-center">
                  <Image 
                    src={study.img} 
                    alt={study.title} 
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain object-bottom drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              {/* Read Case Study Button (Exact Bottom Right Tab) */}
              <Link 
                href={study.link}
                className="absolute bottom-0 right-0 bg-[#545d7a] text-white flex items-center justify-center gap-3 px-6 py-4 rounded-tl-[24px] hover:bg-[#444c68] transition-all z-30 shadow-md"
              >
                <span className="text-[16px] font-bold">Read Case Study</span>
                <FiArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
