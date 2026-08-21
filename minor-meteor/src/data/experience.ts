export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  stack?: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: "2024 – present",
    role: "Full-time transition to software engineering",
    company: "Independent · Building Synaply",
    location: "Norway",
    highlights: [
      "Designing and shipping Synaply, a production Go service running at synaply.me and piloted in a Norwegian secondary school",
      "Completing an advanced Go mentorship program alongside freelance post-production work",
      "Working with Go since 2022: REST APIs on chi, PostgreSQL and Redis, Docker, GitHub Actions CI",
    ],
    stack: ["Go", "chi", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Linux"],
    current: true,
  },
  {
    period: "2023 – 2024",
    role: "Teaching Assistant, Information & Media Production",
    company: "Nord-Troms High School",
    location: "Storslett, Norway",
    highlights: [
      "Mentored students one-on-one and ran workshops on technical tools and software",
      "Supported classroom production work across editing, media handling and delivery",
    ],
  },
  {
    period: "2015 – 2023",
    role: "Studio Owner & Post-Production Supervisor",
    company: "MOVIESTIME.GROUP",
    location: "Kyiv, Ukraine",
    highlights: [
      "Ran a post-production studio delivering to international clients including Netflix, Amazon, Lionsgate and Company 3",
      "Designed and optimized production and technical delivery workflows under fixed release deadlines",
      "Administered Linux and macOS systems and SAN/NAS storage (QNAP, RAID); managed data I/O and secure delivery of multi-terabyte assets",
      "Contributed to 10+ award-winning feature films, including the Oscar-nominated documentary \"Winter on Fire\"",
      "Led a cross-functional team of engineers, editors and artists",
    ],
    stack: ["Linux", "macOS", "SAN/NAS", "QNAP", "RAID", "FFmpeg", "Aspera", "DaVinci Resolve", "Avid Media Composer"],
  },
  {
    period: "2010 – 2015",
    role: "Film & Finishing Editor",
    company: "KINOTUR · WIZARDPOST",
    location: "Kyiv, Ukraine",
    highlights: [
      "Conformed and finished media for theatrical and TV releases, including quality control before delivery",
      "Handled digital archival and cataloging of project records; exports to DCP and broadcast specifications",
    ],
    stack: ["Avid Media Composer", "DaVinci Resolve", "Adobe Premiere", "Final Cut Pro"],
  },
];
