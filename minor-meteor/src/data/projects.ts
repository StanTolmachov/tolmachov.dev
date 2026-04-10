export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "Synaply",
    subtitle: "Backend API for AI Educational Platform",
    description: "High-performance RESTful API for a bilingual language learning platform with AI-driven content generation via Google Gemini and DeepL APIs. Clean Architecture, PostgreSQL, Redis caching.",
    stack: ["Go", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions", "Gemini AI", "DeepL API"],
    github: "https://github.com/StanTolmachov/synaply",
    highlight: true,
  },
  {
    title: "User Management Microservice",
    subtitle: "gRPC & REST API",
    description: "Scalable user authentication service with dual-protocol support (gRPC + REST), JWT auth, bcrypt hashing, structured logging, and full test coverage via testify and mockery.",
    stack: ["Go", "gRPC", "Protocol Buffers", "JWT", "PostgreSQL", "testify", "mockery"],
    github: "https://github.com/StanTolmachov/User_Management",
  },
  {
    title: "Weather & Holiday Telegram Bot",
    subtitle: "Concurrent Async Bot",
    description: "Highly concurrent Telegram bot with goroutine-based parallel API calls, cron-style background workers for scheduled notifications, and MongoDB persistence for user preferences.",
    stack: ["Go", "Goroutines", "MongoDB", "Telegram API", "Google TimeZone API"],
    github: "https://github.com/StanTolmachov/WeatherBot",
  },
];
