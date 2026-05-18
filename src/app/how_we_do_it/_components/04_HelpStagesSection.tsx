import Image from "next/image";

const HELP_STAGES = [
  { 
    title: "Start", 
    desc: "If you have an idea, we can help you get started and launch to the market in days.", 
    icon: "/assets/images/how_we_do_it/start.svg" 
  },
  { 
    title: "Scale", 
    desc: "If you have an existing small business, we can help you scale it across the globe.", 
    icon: "/assets/images/how_we_do_it/scale.svg" 
  },
  { 
    title: "Streamline", 
    desc: "If you are a big company, we can help you streamline the processes and growth in the long term.", 
    icon: "/assets/images/how_we_do_it/streamilne.svg" 
  },
];

export default function HelpStagesSection() {
  return (
    <section className="w-full bg-white py-20 pb-32">
      <div className="container mx-auto px-4 lg:px-12">
        
        <div className="text-center mb-20">
          <h2 
            className="text-[48px] leading-tight font-bold text-[#222] tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            How we can help you?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {HELP_STAGES.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="mb-8 h-20 flex items-center">
                <Image 
                  src={stage.icon} 
                  alt={stage.title} 
                  width={72} 
                  height={72} 
                  className="mix-blend-multiply" 
                />
              </div>
              <h3 
                className="text-[32px] font-bold text-[#222] mb-5 tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {stage.title}
              </h3>
              <p 
                className="text-[#333] text-[20px] leading-[1.6] font-normal"
                style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
              >
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
