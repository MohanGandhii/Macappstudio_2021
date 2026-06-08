/**
 * Configuration and helpers for Success Stories case studies pages.
 * 
 * Edit this file to:
 * 1. Change or add custom Hero Banner background colors.
 * 2. Add custom URL route slug overrides (mapping URL slugs to the keys in caseStudies.ts).
 */

// 1. Custom Hero Banner background colors for each app
export const bannerBgColors: Record<string, string> = {
  fasttrack: "bg-[#fcfbe8]", // light yellow-green
  howdy: "bg-[#e4f6f8]",     // light cyan
  sarva: "bg-[#e6f4db]",     // light green
  speed: "bg-[#e5f6fd]",     // light blue
  speedlearning: "bg-[#e5f6fd]",
  propcierge: "bg-[#ecf6de]", // light pastel green
  ags: "bg-[#E4F3FF]",       // light blue
  dabb: "bg-[#ebebeb]",      // light grey
  atg: "bg-[#edeafd]",       // light purple-lavender
  godmusic: "bg-[#edeafd]",
  hometheatre: "bg-[#e5f3fe]",
  isurgeon: "bg-[#e5f3fe]",
  maidpro: "bg-[#edeafd]",
  mediyoga: "bg-[#edeafd]",
  nir: "bg-[#edeafd]",
  spony: "bg-[#edeafd]",
  tale: "bg-[#edeafd]",
  znap: "bg-[#edeafd]",
  daydoc: "bg-[#e0f5f5]",    // light teal for healthcare theme
};

// Default fallback background color if an app doesn't have an explicit entry
export const DEFAULT_BANNER_BG = "bg-[#edeafd]";

// 2. Custom slug-to-data-key mappings (lower-case slug -> caseStudies.ts dictionary key)
export const slugOverrides: Record<string, string> = {
  speed: "speedlearning",
  atg: "ATG",
};

// 3. Custom positioning styles for mockup images in the Hero Banner
export const bannerImageStyles: Record<
  string,
  {
    topClass: string;
    rightClass?: string;
    widthClass?: string;
    containerMinHeight?: string;
    spacerClass?: string;
    pyClass?: string;
    logoMbClass?: string;
    logoWidthClass?: string;
    titlePbClass?: string;
    statsMbClass?: string;
    statPbClass?: string;
    statTextClass?: string;
  }
> = {
  fasttrack: { topClass: "md:top-[40px] lg:top-[50px]" },
  howdy: { topClass: "md:top-[30px] lg:top-[40px]" },
  sarva: { topClass: "md:top-[30px] lg:top-[40px]" },
  speed: { topClass: "md:top-[30px] lg:top-[45px]" },
  speedlearning: { topClass: "md:top-[30px] lg:top-[45px]" },
  propcierge: { topClass: "md:top-[30px] lg:top-[40px]" },
  atg: {
    topClass: "md:top-[30px] lg:top-[20px] xl:top-[15px]",
    widthClass: "w-[48%] lg:w-[50%] xl:w-[52%] max-w-[640px]",
    rightClass: "right-[-10px] lg:right-[-20px] xl:right-[-30px]",
    containerMinHeight: "md:min-h-[500px]",
    spacerClass: "h-0 md:h-[120px] lg:h-[140px]",
  },
  godmusic: {
    topClass: "bottom-0",
    widthClass: "w-[40%] lg:w-[42%] xl:w-[44%] max-w-[530px]",
    rightClass: "right-[-10px] lg:right-[-20px] xl:right-[-30px]",
    containerMinHeight: "md:min-h-[460px]",
    spacerClass: "h-0 md:h-[20px] lg:h-[25px]",
    pyClass: "pt-12 pb-4",
  },
  nir: {
    topClass: "md:top-[50px] lg:top-[40px] xl:top-[30px]",
    widthClass: "w-[36%] lg:w-[38%] xl:w-[40%] max-w-[490px]",
    rightClass: "right-[20px] md:right-[30px] lg:right-[40px] xl:right-[50px]",
    containerMinHeight: "md:min-h-[460px]",
    spacerClass: "h-0 md:h-[20px] lg:h-[25px]",
    pyClass: "pt-10 pb-8",
  },
  ags: {
    topClass: "md:top-[60px] lg:top-[70px] xl:top-[80px]",
    widthClass: "w-[72%] lg:w-[76%] xl:w-[80%] max-w-[950px]",
    rightClass: "right-[-40px] lg:right-[-60px] xl:right-[-80px]",
    containerMinHeight: "md:min-h-[380px]",
    spacerClass: "h-0 md:h-[280px] lg:h-[340px] xl:h-[380px]",
    pyClass: "py-6 md:py-8",
    logoMbClass: "mb-3",
    logoWidthClass: "w-[180px]",
    titlePbClass: "pb-4",
    statsMbClass: "mb-4",
    statPbClass: "pb-2",
    statTextClass: "text-[16px] md:text-[19px] md:leading-[22px]",
  },
};
