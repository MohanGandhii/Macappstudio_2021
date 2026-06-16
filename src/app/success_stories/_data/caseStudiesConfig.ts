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
    rightContainerClass?: string;
    sectionOverflow?: string;
    styleOverrides?: React.CSSProperties;
    titleFontFamily?: string;
    titleFontWeight?: string;
    titleTracking?: string;
    titleTextColor?: string;
}
> = {
  spony: {
    topClass: "md:top-[20px] lg:top-[30px] xl:top-[40px]",
    widthClass: "w-[50%] lg:w-[54%] xl:w-[58%] max-w-[820px]",
    rightClass: "right-[10px] lg:right-[30px] xl:right-[50px]",
    containerMinHeight: "md:min-h-[500px]",
    spacerClass: "h-0 md:h-[140px] lg:h-[180px]",
  },
  dabb: {
    widthClass: "w-[65%] lg:w-[55%] max-w-[820px]",
    rightClass: "right-[0px] lg:right-[0px]",
    topClass: "top-auto bottom-[0px]",
    leftClass: "w-full md:w-[50%] lg:w-[40%] relative z-10",
    imageZIndex: 0,
    containerMinHeight: "md:min-h-[550px] lg:min-h-[600px]",
    titleFontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    titleFontWeight: "font-black",
    titleTracking: "tracking-[-1.6px]",
    titleTextColor: "text-[#2B2B2B]",
  },
  znap: {
    widthClass: "w-[85%] md:w-[65%] lg:w-[52%] max-w-[850px]",
    rightClass: "right-[-40px] md:right-[-60px] lg:right-[-60px]",
    topClass: "top-[50%] md:top-[55%] lg:top-[55%] -translate-y-1/2",
    containerMinHeight: "md:min-h-[550px] lg:min-h-[600px]",
    leftClass: "w-full md:w-[60%] lg:w-[56%] relative z-10",
    titleFontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    titleFontWeight: "font-black",
    titleTracking: "tracking-[-1.6px]",
    titleTextColor: "text-[#2B2B2B]",
  },
  fasttrack: { topClass: "md:top-[40px] lg:top-[50px]" },
  howdy: { topClass: "md:top-[30px] lg:top-[40px]" },
  sarva: { 
    widthClass: "w-full",
    rightClass: "right-0",
    topClass: "top-0",
    leftClass: "w-full md:w-1/2 relative z-10",
    styleOverrides: {
      width: '850px',
      maxWidth: '55vw',
      top: '-40px',
      right: '-80px',
      filter: 'brightness(1.05)'
    }
  },
  speed: { topClass: "md:top-[30px] lg:top-[45px]" },
  speedlearning: { topClass: "md:top-[30px] lg:top-[45px]" },
  propcierge: { topClass: "md:top-[30px] lg:top-[40px]" },
  maidpro: {
    topClass: "translate-y-[20px]",
    widthClass: "w-[120%] max-w-[550px] scale-[1.3] lg:scale-[1.45] origin-right",
    rightClass: "translate-x-[20px]",
    containerMinHeight: "md:min-h-[350px]",
    pyClass: "py-2 md:py-4 -translate-y-[15px]",
  },
  atg: {
    topClass: "md:top-[80px] lg:top-[100px] xl:top-[120px]",
    widthClass: "w-[52%] lg:w-[55%] xl:w-[57%] max-w-[740px]",
    rightClass: "right-[-20px] lg:right-[-50px] xl:right-[-70px]",
    containerMinHeight: "md:min-h-[500px]",
    spacerClass: "h-0 md:h-[120px] lg:h-[140px]",
  },
  godmusic: {
    topClass: "top-1/2 -translate-y-1/2 mt-2",
    widthClass: "w-[48%] lg:w-[52%] xl:w-[55%] max-w-[700px]",
    rightClass: "right-[0px] lg:right-[-10px] xl:right-[-20px]",
    containerMinHeight: "md:min-h-[550px] lg:min-h-[620px]",
    spacerClass: "hidden",
    pyClass: "pt-16 lg:pt-24 pb-16 lg:pb-24",
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
