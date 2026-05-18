import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function InitiativesSection() {
  return (
    <section className="py-24 bg-white" id="our_initiatives_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">Our Initiatives</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            As we grow bigger, it is our responsibility to give back and support our society. As an initiative to give back, MacAppStudio is humbled and committed to providing valuable support to society throughout our journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-gray-50 rounded-[40px] p-10 lg:p-16 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <Image src="/assets/images/who_we_are/bridge.svg" alt="Bridge" width={250} height={80} className="h-16 w-auto mb-10 object-contain" />
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Free Online Training Program for honest and hard working people to change their lives for better.
            </p>
            <a 
              href="https://macappstudiobridge.com/" 
              target="_blank" 
              className="inline-flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all group"
            >
              <span>Visit Website</span>
              <FiArrowRight size={24} />
            </a>
          </div>

          <div className="bg-gray-50 rounded-[40px] p-10 lg:p-16 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <Image src="/assets/images/who_we_are/uthavi.svg" alt="Uthavi" width={250} height={80} className="h-16 w-auto mb-10 object-contain" />
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Enabling education to everyone because it is the only way we can change the world.
            </p>
            <a 
              href="https://uthavi.org/" 
              target="_blank" 
              className="inline-flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all group"
            >
              <span>Visit Website</span>
              <FiArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
