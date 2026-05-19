# MacAppStudio Codebase Map 🚀

Welcome to the newly structured, step-by-step orderly codebase. This directory has been systematically reorganized so you can read and understand the entire site step-by-step from layout to individual sections, matching the visual flow of the website!

---

## 🛠️ Step-by-Step Layout System (`src/components/`)
All global, persistent, and shared elements are numbered in chronological order of their visual and interactive hierarchy:

```
src/components/
├── 01_Navbar/
│   └── Navbar.tsx               # Sticky header, desktop links, and slide-out mobile overlay drawer
├── 02_Footer/
│   └── Footer.tsx               # Unified sticky footer containing main CTA, social profiles, and links
├── 03_ProposalModal/
│   └── ProposalModal.tsx        # High-conversion interactive proposal popup modal overlay
├── 04_GetProposalButton/
│   └── GetProposalButton.tsx    # Reusable custom button designed to trigger the proposal popup modal
└── 05_Shared/
    ├── RecentWorksSection.tsx   # Universal high-fidelity recent case studies carousel section
    └── SolutionsSection.tsx     # Reusable specialized solutions grid section
```

---

## 📂 Step-by-Step Page Subcomponents (`src/app/`)
Each individual page route is accompanied by a private `_components/` folder where visual sections are numbered sequentially in exactly the order they appear from top to bottom on the screen:

### 🏠 1. Home Page (`src/app/(home)/`)
```
src/app/(home)/
├── page.tsx                     # Main entry route for the home page
└── _components/
    ├── 01_HeroSection.tsx       # Scrolling-text tagline hero banner with CTA button
    ├── 02_PlatformSection.tsx   # Light blue cross-platform capability showcase banner
    ├── 03_QuotesSection.tsx     # High-density custom customer review quote highlights grid
    ├── 04_ExpertiseSection.tsx  # Dynamic interactive cards for digital transformation expertise
    ├── 05_InnovationsSection.tsx# High-performance tabbed innovations and technologies section
    ├── 06_AwardsSection.tsx     # Intel BlackBelt and innovator recognition awards slider
    ├── 07_PartnersSection.tsx   # Self-fading partner logos layout
    ├── 08_WallOfFameSection.tsx # Wall of Fame high-density grid showing real user review screenshots
    └── 09_TestimonialsSection.tsx# Video testimonial stories collection
```

### 🤝 2. How We Do It Page (`src/app/how_we_do_it/`)
```
src/app/how_we_do_it/
├── page.tsx                     # How We Do It main layout
└── _components/
    ├── 01_HeroSection.tsx       # Clean black-background hero section introducing delivery excellence
    ├── 02_PromisesSection.tsx   # 6 core guarantees (ownership, speed, transparency, no resume, etc.)
    ├── 03_RapidFrameworkSection.tsx # Technical visual diagram detailing our rapid 4-step framework
    ├── 04_VideoContentBlocks.tsx# repeatable video demonstration sections detailing flowcharts
    ├── 05_MilestonesSection.tsx # Detailed billing & payment milestones timeline (15-day release cycles)
    └── 06_ModelSection.tsx      # Comprehensive custom vs standard pricing options layout
```

### 🏆 3. Success Stories Page (`src/app/success_stories/`)
```
src/app/success_stories/
├── page.tsx                     # Index page with hero and complete cards grid
├── [slug]/
│   └── page.tsx                 # Dynamic layout router loading customized styles and details on-the-fly
└── _components/
    ├── 01_HeroSection.tsx       # Auto-cycling product mockup banner slider and copy
    ├── 02_AppsGrid.tsx          # Crafted app list grid (restored with Sarva in its original position)
    ├── 03_CaseStudyDetailComponents.tsx # Modular dynamic layout segments (PlatformItem & SplitSection)
    └── 04_SuccessStoriesCTA.tsx # Bottom conversion CTA card redirecting to proposal modal
```

### 👥 4. Who We Are Page (`src/app/who_we_are/`)
```
src/app/who_we_are/
├── page.tsx                     # Who We Are main page layout
└── _components/
    ├── 01_OdysseyTimeline.tsx   # Beautiful chronological interactive milestone odyssey timeline
    └── 02_InitiativesSection.tsx# Dedicated team initiatives cards section
```

### 🚀 5. App Development Page (`src/app/appdevelopment/`)
```
src/app/appdevelopment/
├── page.tsx                     # App Development main service page layout
└── _components/
    ├── 01_CaseStudiesCarousel.tsx # High-fidelity dynamic slider showcasing tailored success stories
    └── 02_RapidFrameworkSection.tsx # Modular framework overview demonstrating our 10x delivery speed
```

---

## 🌟 Best Practices for Maintenance
1. **Maintain Orderly Prefixes**: When adding a new visual block to a page, always suffix/prefix it chronologically (e.g. `10_NewSection.tsx` inside `_components/`).
2. **Keep Core Routes Lightweight**: Let main route pages (`page.tsx`) act as high-level visual layouts importing sequential chunks from their private `_components/` folder. This makes debugging and updating a specific section extremely easy.
3. **Use Centralized Configurations**: Central configs like `src/app/success_stories/_data/caseStudiesConfig.ts` contain key background styling and normalization definitions so page styles never require hardcoded ad-hoc utilities.
