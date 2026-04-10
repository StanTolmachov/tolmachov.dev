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
    period: "2023 – present",
    role: "Backend Go Engineer",
    company: "Freelance / Open to hire",
    location: "Nordreisa, Norway",
    highlights: [
      "Building production-grade Go services: REST APIs, gRPC microservices, AI integrations",
      "Architecting systems with Clean Architecture, PostgreSQL, Redis, Docker",
      "CI/CD pipelines via GitHub Actions, Nginx reverse proxy, SSL automation",
    ],
    stack: ["Go", "gRPC", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    current: true,
  },
  {
    period: "2017 – 2023",
    role: "Owner, CEO & Digital Film Technical Supervisor",
    company: "MOVIESTIME.GROUP · DILab & Post Production",
    location: "Ukraine",
    highlights: [
      "Founded and scaled a leading digital film laboratory with global studio partnerships (Company 3, Lionsgate)",
      "Delivered 20+ feature films and numerous commercials/music videos for theatrical distribution in Ukraine, Europe, and the USA",
      "Designed and implemented post-production hardware workflows and software procedures from scratch",
      "Maintained high-performance Linux/Mac/Windows servers and SAN storage — 0% downtime during multi-TB transfers",
      "Managed massive data pipelines via HDD, FTP, Aspera, Google Drive, QNAP — strictly adhering to CDSA protocols",
      "Led cross-functional team of 10+ engineers, editors, and artists using Agile/JIRA/Asana",
      "Executed final QC and complex technical exports: DCP, Netflix, Amazon Prime specifications",
    ],
    stack: ["Linux", "SAN Storage", "FTP", "Aspera", "QNAP", "Python", "Bash", "DaVinci Resolve", "Avid Media Composer", "Adobe Premiere", "Autodesk Flame Premium", "JIRA"],
  },
  {
    period: "2015 – 2017",
    role: "Post-Production Supervisor & Film Editor",
    company: "Freelance — \"The One Who Does Not Sleep\", \"#SelfieParty\"",
    location: "Ukraine",
    highlights: [
      "Full-cycle technical supervision across all on-set and post-production departments (dailies, conform, VFX, editorial)",
      "Developed Python/Bash scripts to automate file management, naming conventions, and delivery pipelines",
      "Pulled VFX plates for vendors based on debayer and resolution settings unique to each project",
      "Assessed and corrected incoming VFX compositions from external vendors",
      "Managed DCP, TV, Amazon export to technical requirements; archival and cataloging of digital records",
      "Script doctor on \"The One Who Does Not Sleep\" — rewrote and improved specific aspects of the screenplay",
    ],
    stack: ["Python", "Bash", "DaVinci Resolve", "Avid Media Composer", "Adobe Premiere", "Final Cut Pro", "Autodesk Flame Premium", "FTP", "Aspera", "QNAP"],
  },
  {
    period: "2011 – 2015",
    role: "Editorial & Data I/O Technician / Film Editor",
    company: "KINOTUR DILab & Post Production",
    location: "Ukraine",
    highlights: [
      "Key technical role in processing and conforming media for major theatrical and TV releases",
      "Worked on Oscar-Nominated documentary \"Winter on Fire\" (Netflix)",
      "Pulled VFX plates, assessed VFX comps from external vendors, color grading QC",
      "Online editing, finishing, and digital archival of project records",
      "Export to technical requirements (DCP, TV broadcast)",
    ],
    stack: ["DaVinci Resolve", "Avid Media Composer", "Adobe Premiere", "Final Cut Pro", "Autodesk Flame Premium", "Linux", "SAN Storage", "FTP", "Bash"],
  },
  {
    period: "2010 – 2011",
    role: "Data I/O Technician / Film Editor / QC Artist",
    company: "WIZARD · TV Post Production",
    location: "Ukraine",
    highlights: [
      "Editing TV commercials and video engineering for broadcast",
      "Studied complex VFX creation techniques working with a large number of advertising directors",
      "Deep study of TV production technologies and editing practices",
    ],
    stack: ["Avid Media Composer", "DaVinci Resolve", "Adobe Premiere", "Final Cut Pro", "FTP", "Bash"],
  },
  {
    period: "2009 – 2010",
    role: "Film Editor",
    company: "PILOT · TV Production",
    location: "Ukraine",
    highlights: [
      "Editing TV shows and video engineering for broadcast",
      "Studied TV production technologies and diverse editing techniques",
    ],
    stack: ["Avid Media Composer", "Final Cut Pro"],
  },
];
