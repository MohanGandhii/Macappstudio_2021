"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "../_data/caseStudies";
import { bannerBgColors, DEFAULT_BANNER_BG, slugOverrides } from "../_data/caseStudiesConfig";
import { AppScreenCarousel } from "../_components/03_CaseStudyDetailComponents";
import WhatToKnowMore from "../_components/WhatToKnowMore";

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

      {/* ── 1. HERO BANNER ── matches legacy exactly ── */}
      {/*
        LAYOUT NOTE:
        The section is full-viewport-width (like legacy .bannersec).
        The left content sits in a max-w-[1170px] centered container.
        The phone mockup is absolutely positioned relative to the SECTION
        (not the container) so right-10 / top-[20px] / w-[40%] are all
        viewport-relative — exactly matching the legacy CSS:
          #myGallery img { position:absolute; right:40px; top:20px; width:40% }
      */}
      <section className={`relative ${heroBgColor} overflow-visible mb-0`} id="bannersection">

        {/* LEFT CONTENT ─ inside the 1170px centred container */}
        <div className="w-full max-w-[1170px] mx-auto px-10 relative">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">

            {/* Left Content – 55% on desktop keeps it clear of the right image */}
            <div className="w-full lg:w-[55%] z-10 py-12 flex flex-col justify-center">

              {/* Logo */}
              {data.logo && (
                <Image
                  src={data.logo}
                  alt={`${data.title || slug} Logo`}
                  width={218}
                  height={68}
                  className="object-contain mb-[20px] w-[218px] h-auto"
                  priority
                />
              )}

              {/* Headline */}
              <h2 className="text-[26px] md:text-[34px] md:leading-[40px] font-black text-[#2B2B2B] m-0 pb-[38px] tracking-[-1.6px] max-w-[95%]">
                {data.title}
              </h2>

              {/* Mobile-only banner image */}
              <div className="w-full lg:hidden mt-2 mb-8 flex justify-center">
                <Image
                  src={data.bannerImg}
                  alt={`${data.title || slug} Apps`}
                  width={530}
                  height={680}
                  className="w-[75%] sm:w-[55%] md:w-[50%] max-w-[450px] h-auto object-contain"
                  priority
                />
              </div>

              {/* Stats list */}
              {data.stats && data.stats.length > 0 && (
                <ul className="list-none w-full m-0 p-0 mb-[30px]">
                  {data.stats.map((stat: any, index: number) => (
                    <li key={index} className="flex items-center pb-[15px]">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <Image
                          src={stat.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain w-[32px] h-auto"
                        />
                      </div>
                      <p
                        className="text-[17px] md:text-[22px] md:leading-[25px] text-[#2B2B2B] font-medium tracking-tight pl-[15px] m-0 [&>b]:font-bold"
                        dangerouslySetInnerHTML={{ __html: stat.html }}
                      />
                    </li>
                  ))}
                </ul>
              )}

              {/* Platforms developed box */}
              {data.platforms && data.platforms.length > 0 && (
                <div className="w-full">
                  <p className="text-[15px] font-semibold text-[#2B2B2B] m-0 pb-[10px]">
                    Platforms developed :
                  </p>
                  <ul className="inline-flex items-center list-none m-0 p-0 bg-white">
                    {data.platforms.map((platform: any, index: number) => (
                      <li
                        key={index}
                        className={`inline-flex items-center py-[5px] px-[10px] relative ${
                          index < data.platforms.length - 1
                            ? "after:content-[''] after:absolute after:right-0 after:top-[10%] after:h-[80%] after:w-[1px] after:bg-[#bbb]"
                            : ""
                        }`}
                      >
                        <Image
                          src={platform.icon}
                          alt={platform.name}
                          width={25}
                          height={25}
                          className="w-[25px] h-auto object-contain"
                        />
                        <span className="text-[15px] text-[#2B2B2B] font-medium pl-2">
                          {platform.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Invisible spacer column – stops left text from flowing under the image */}
            <div className="hidden lg:block lg:w-[45%]" />
          </div>

          {/* ── DESKTOP MOCKUP IMAGE ──
              Absolutely positioned relative to the container,
              so right-10 = 40px from container right edge, w-[45%] = 45% of container.
          */}
          <div className="hidden lg:block absolute right-10 top-[20px] w-[45%] z-20">
            <Image
              src={data.bannerImg}
              alt={`${data.title || slug} Apps`}
              width={600}
              height={750}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Spacer – lets the absolutely-positioned phone overflow into the white area */}
      <div className="h-0 lg:h-[150px] bg-white" />

      {/* ── 2. OVERVIEW ── */}
      {data.overview && (
        <SplitSection title="Overview" content={data.overview} bgColor="bg-white" />
      )}

      {/* ── 3. PROJECT APPS MOSAIC ── */}
      {data.projectAppsImg && (
        <section className="bg-[#f4f6f9] py-[50px]" id="project_apps_section">
          <div className="w-full max-w-[1170px] mx-auto px-10">
            <div className="w-full text-center">
              <Image
                src={data.projectAppsImg}
                alt="Project Apps"
                width={1170}
                height={550}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── 4. PROBLEM FACED & GOAL ── */}
      {data.problem && (
        <SplitSection title="Problem Faced" content={data.problem} bgColor="bg-white" />
      )}
      {data.goal && (
        <SplitSection title="Goal" content={data.goal} bgColor="bg-white" />
      )}

      {/* ── 5. SOLUTION ── */}
      {data.solutionHtml && (
        <section className="py-[50px] bg-[#fbfbfb]">
          <div className="w-full max-w-[1170px] mx-auto px-10">
            <div className="flex flex-col lg:flex-row mb-12">
              <div className="w-full lg:w-1/3">
                <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                  Solution
                </h2>
              </div>
              <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
                <div
                  className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
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

      {/* ── 6. TECHNOLOGY & CURRENT STATUS ── */}
      {(data.technology?.length > 0 || data.currentStatus) && (
        <section className="py-[50px] bg-[#fbfbfb] border-t border-gray-100">
          <div className="w-full max-w-[1170px] mx-auto px-10">

            {/* Technology */}
            {data.technology && data.technology.length > 0 && (
              <div className="flex flex-col lg:flex-row pb-12 border-b border-gray-200">
                <div className="w-full lg:w-1/3">
                  <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                    Technology
                  </h2>
                </div>
                <div className="w-full lg:w-2/3 mt-6 lg:mt-0 flex flex-wrap items-start gap-x-8 gap-y-6">
                  {data.technology.map((tech: any, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 border border-gray-100">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="object-contain h-[40px] w-auto"
                        />
                      </div>
                      <span className="text-[13px] font-bold text-gray-500 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Status */}
            {data.currentStatus && (
              <div className={`flex flex-col lg:flex-row ${data.technology?.length > 0 ? "pt-12" : ""}`}>
                <div className="w-full lg:w-1/3">
                  <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                    Current Status
                  </h2>
                </div>
                <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
                  <div
                    className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
                    dangerouslySetInnerHTML={{ __html: data.currentStatus }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── What to Know More ── */}
      <WhatToKnowMore currentSlug={slug} />
    </main>
  );
}

/* ─── LOCAL HELPERS ─────────────────────────────────────────────── */

function SplitSection({
  title,
  content,
  bgColor,
}: {
  title: string;
  content: string;
  bgColor: string;
}) {
  return (
    <section className={`py-[40px] border-b border-gray-100 ${bgColor}`}>
      <div className="w-full max-w-[1170px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
              {title}
            </h2>
          </div>
          <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
            <div
              className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
