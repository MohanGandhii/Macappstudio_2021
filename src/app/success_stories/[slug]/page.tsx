"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "../_data/caseStudies";
import { bannerBgColors, DEFAULT_BANNER_BG, slugOverrides } from "../_data/caseStudiesConfig";
import { PlatformItem, SplitSection, AppScreenCarousel } from "../_components/03_CaseStudyDetailComponents";
import SuccessStoriesCTA from "../_components/04_SuccessStoriesCTA";

const getCaseStudyData = (slug: string) => {
  const normalized = slug.toLowerCase();
  const lookupKey = slugOverrides[normalized] || normalized;
  return caseStudies[lookupKey];
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = React.use(params as any) as { slug: string };
  const slug = resolvedParams.slug;
  const data = getCaseStudyData(slug);

  if (!data) {
    notFound();
  }

  const heroBgColor = bannerBgColors[slug.toLowerCase()] || DEFAULT_BANNER_BG;

  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Hero Section - BOLD & SPACIOUS */}
      <section className={`relative pt-12 lg:pt-16 ${heroBgColor} overflow-visible`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row items-start min-h-[620px]">
            
            {/* Left Content */}
            <div className="w-full lg:w-[50%] z-10 py-10">
              <div className="mb-14">
                <Image 
                  src={data.logo} 
                  alt={`${data.title || slug} Logo`} 
                  width={320} 
                  height={100} 
                  className="object-contain max-h-[100px] w-auto"
                />
              </div>
              
              <h1 className="text-[38px] md:text-[52px] lg:text-[62px] font-black text-[#1a1a1a] leading-[1.1] mb-14 tracking-tighter max-w-[95%]">
                {data.title}
              </h1>
              
              {/* Stats List */}
              <ul className="space-y-8 mb-16">
                {data.stats && data.stats.map((stat: any, index: number) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Image src={stat.icon} alt="" width={40} height={40} className="object-contain" />
                    </div>
                    <p 
                      className="text-[20px] lg:text-[22px] text-[#444] font-medium leading-none tracking-tight [&>b]:text-[24px] [&>b]:lg:text-[28px] [&>b]:font-black [&>b]:text-[#1a1a1a]" 
                      dangerouslySetInnerHTML={{ __html: stat.html }} 
                    />
                  </li>
                ))}
              </ul>

              {/* Platforms Box */}
              {data.platforms && data.platforms.length > 0 && (
                <div className="space-y-5 pt-4">
                  <span className="text-[16px] font-bold text-[#222]">Platforms developed :</span>
                  <div className="flex flex-wrap items-center bg-white rounded-[4px] shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-gray-100 py-4 px-8 gap-8 w-fit">
                    {data.platforms.map((platform: any, index: number) => (
                      <React.Fragment key={index}>
                        {index > 0 && <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />}
                        <PlatformItem icon={platform.icon} label={platform.name} />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Mockup - MASSIVE FLOATING PHONES */}
            <div className="w-full lg:w-[50%] relative min-h-[500px] lg:min-h-0 self-stretch">
              <div className="lg:absolute lg:-top-10 lg:-right-20 lg:w-[850px] z-30 mt-16 lg:mt-0 transform lg:translate-y-24 translate-y-12">
                <Image 
                  src={data.bannerImg} 
                  alt={`${data.title || slug} Apps`} 
                  width={850} 
                  height={1100} 
                  className="w-full h-auto object-contain drop-shadow-[0_50px_70px_rgba(0,0,0,0.22)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlap Spacer */}
      <div className="h-32 lg:h-[320px] bg-white" />

      {/* 2. Overview Section */}
      <SplitSection 
        title="Overview" 
        content={data.overview}
        bgColor="bg-white"
      />

      {/* 3. Project Apps Mosaic */}
      {data.projectAppsImg && (
        <section className="bg-[#f4f6f9] py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
            <Image 
              src={data.projectAppsImg} 
              alt="Project Apps" 
              width={1240} 
              height={600} 
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* 4. Problem Faced & Goal */}
      {data.problem && (
        <SplitSection 
          title="Problem Faced" 
          content={data.problem}
          bgColor="bg-white"
        />
      )}
      {data.goal && (
        <SplitSection 
          title="Goal" 
          content={data.goal}
          bgColor="bg-white"
        />
      )}

      {/* 5. Solution Section */}
      {data.solutionHtml && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
              <div className="lg:w-1/3">
                <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Solution</h2>
              </div>
              <div className="lg:w-2/3">
                <div 
                  className="text-[18px] lg:text-[20px] text-[#444] leading-relaxed font-medium [&>p]:mb-6 [&>p:last-child]:mb-0 [&>b]:text-[#111] [&>b]:font-black"
                  dangerouslySetInnerHTML={{ __html: data.solutionHtml }}
                />
              </div>
            </div>
            
            {/* App Screen Carousel */}
            {data.appScreens && data.appScreens.length > 0 && (
              <AppScreenCarousel screens={data.appScreens} />
            )}
          </div>
        </section>
      )}

      {/* 6. Technology & Status Section */}
      <section className="py-24 bg-[#f7f8fa]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          {/* Technology Row */}
          {data.technology && data.technology.length > 0 && (
            <div className="grid lg:grid-cols-[260px_1fr] gap-14 pb-20 border-b border-gray-200">
              <div>
                <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Technology</h2>
              </div>
              <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
                {data.technology.map((tech: any, index: number) => (
                  <div key={index} className="flex flex-col items-center gap-4 min-w-[100px]">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 border border-gray-50">
                      <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain h-[50px] w-auto" />
                    </div>
                    <span className="text-[14px] font-bold text-[#666] text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Current Status Row */}
          {data.currentStatus && (
            <div className="grid lg:grid-cols-[260px_1fr] gap-14 pt-20">
              <div>
                <h2 className="text-[24px] font-black uppercase tracking-tight text-[#111]">Current Status</h2>
              </div>
              <div>
                <div 
                  className="text-[18px] leading-[2] text-[#3f3f3f] font-medium [&>p]:mb-6 [&>p:last-child]:mb-0 [&>b]:text-[#111] [&>b]:font-black [&_span]:font-black [&_span]:text-[#111]"
                  dangerouslySetInnerHTML={{ __html: data.currentStatus }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <SuccessStoriesCTA />
    </main>
  );
}
