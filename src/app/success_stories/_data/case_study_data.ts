export interface CaseStudyData {
  slug: string;
  title: string;
  tagline: string;
  logo: string;
  heroImage: string;
  stats: { label: string; value: string; icon: string }[];
  platforms: string[];
  overview: string;
  mosaicImage: string;
  problem: string;
  goal: string;
  solution: string;
  bottomImages: string[];
}

export const CASE_STUDY_DATA: Record<string, CaseStudyData> = {
  fasttrack: {
    slug: "fasttrack",
    title: "Fasttrack",
    tagline: "Cloud based end to end Uber Like Cab Aggregation Platform",
    logo: "/assets/images/success_stories/track.png", // Using the icon as logo for now
    heroImage: "/assets/images/success_stories/track.png",
    stats: [
      { label: "Drivers Managed Daily", value: "10,000", icon: "drivers" },
      { label: "Customers", value: "1.5 Million", icon: "customers" },
      { label: "Bookings Daily", value: "10,000", icon: "bookings" },
      { label: "Routes covered", value: "9000+", icon: "routes" },
    ],
    platforms: ["iOS", "Android", "Web"],
    overview: "Fasttrack offers the most reliable and hassle-free services throughout Tamilnadu, India covering major cities Chennai, Coimbatore, Madurai and Trichy for the past 19 years. Fasttrack provides both a station-led booking and local-cab services and operates the network and office at all major cities of Tamil Nadu. They have 10,000 professional drivers covering 9,000+ routes and having a customer base of 1.5 Million users.",
    mosaicImage: "/assets/images/how_we_do_it/pro_desc_img.png", // Placeholder for the mosaic
    problem: "Even though Fasttrack had a reputed brand name they did not have an end to end connected and transparent technology platform to run their business seamlessly. The apps and the platform they had was slow and had several issues reported by users and drivers like location accuracy, billing issues and allocation problems.",
    goal: "To create a world class end to end cloud based platform to manage the 100% operations of the Fasttrack business. The platform should be able to manage all the stakeholders of the business like users, drivers, owners, call centre operators, airport centre operators, corporate bookings etc. The platform also takes care the end to end business operations like bookings, driver allocations, location tracking, ride tracking, billing and admin operations like reports, driver onboarding, finance, price cards and compliance.",
    solution: "MacAppStudio designed and developed an end to end app cloud based cab management platform for Fasttrack. The project was started in June 2018 and the development was completed and beta testing was started in Oct 2018. The platform went live in Jan 2019 and MacAppStudio operated the platform for 6 months till June 2019. The platform was handed over to the internal technical team of Fasttrack in July 2019. MacAppStudio created a reliable, scalable and modular cab management platform with apps for users, drivers, owners and board of directors. The admin system was developed to control the end to end operations and get timely information and reports with modules like booking, driver dashboard, price cards, finance dashboard, live tracking dashboard, notification system etc. The system was made so exhaustive that the only other software that Fasttrack needs other than this platform is Tally for finance compliance and tax filing purposes.",
    bottomImages: [
      "/assets/images/success_stories/track.png",
    ],
  },
  // Add other case studies here...
};
