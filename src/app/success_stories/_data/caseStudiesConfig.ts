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
};

// Default fallback background color if an app doesn't have an explicit entry
export const DEFAULT_BANNER_BG = "bg-[#edeafd]";

// 2. Custom slug-to-data-key mappings (lower-case slug -> caseStudies.ts dictionary key)
export const slugOverrides: Record<string, string> = {
  speed: "speedlearning",
  atg: "ATG",
};
