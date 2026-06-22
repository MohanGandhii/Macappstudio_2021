import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const CASE_STUDIES = [
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
    <section className="py-12 bg-white w-full overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1440px]:grid-cols-4 gap-6 md:gap-8">
          {CASE_STUDIES.map((study, index) => {
            const slug = study.link.split("/").pop()?.toLowerCase() || "";
            const isWideCard = ["atg", "nir", "godmusic"].includes(slug);
            return (
            <div key={index} className="relative bg-[#f4f6f9] hover:bg-[#eceef2] rounded-xl overflow-hidden flex flex-col pt-6 md:pt-8 px-6 md:px-8 h-[380px] sm:h-[400px] md:h-[440px] group border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200/80 transition-all duration-300">
              
              {/* Header Info */}
              <div className="mb-4 relative z-10">
                <h3 
                  className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-[#111] mb-2 tracking-tight"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-[14px] md:text-[16px] text-[#555] leading-[1.4] max-w-full sm:max-w-[95%] font-medium"
                  style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                >
                  {study.desc}
                </p>
              </div>
              
              {/* Mockup Container */}
              {isWideCard ? (
                /* Wide card special layout: image positioned to right side, larger scale */
                <div className="absolute bottom-0 right-[-10px] sm:right-[-20px] pointer-events-none w-[85%] sm:w-[80%] md:w-[75%] h-[240px] sm:h-[280px] md:h-[340px]">
                  <Image 
                    src={study.img} 
                    alt={study.title} 
                    fill
                    className="object-contain object-right-bottom drop-shadow-lg group-hover:scale-[1.03] group-hover:-translate-y-2 transition-transform duration-500"
                    priority={index < 6}
                  />
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none px-4 sm:px-6">
                  <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-end justify-center">
                    <Image 
                      src={study.img} 
                      alt={study.title} 
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain object-bottom drop-shadow-lg group-hover:scale-[1.03] group-hover:-translate-y-2 transition-transform duration-500"
                      priority={index < 6}
                    />
                  </div>
                </div>
              )}
              
              {/* Read Case Study Button (Exact Bottom Right Tab) */}
              <Link 
                href={study.link}
                className="absolute bottom-0 right-0 bg-[#545d7a] group-hover:bg-[#0052FF] text-white flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-tl-[20px] sm:rounded-tl-[24px] hover:!bg-[#0041cc] transition-all z-30 shadow-md"
              >
                <span className="text-[13px] sm:text-[14px] md:text-[16px] font-bold">Read Case Study</span>
                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" />
              </Link>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
