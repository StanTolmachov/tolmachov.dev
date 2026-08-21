export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  stack: string[];
  live?: string;
  liveLabel?: string;
  repoNote?: string;
  github?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "Synaply",
    subtitle: "AI-powered language learning platform",
    description:
      "Solo-built production service running at synaply.me: REST API, background processing, PostgreSQL storage and Redis session state, deployed in Docker behind Caddy with automatic TLS and a full CI pipeline. 300+ commits since April 2026. Piloted with two classes (~45 students) at a Norwegian secondary school in spring 2026; a second pilot with the current version starts in September 2026.",
    highlights: [
      "Authentication layer built from scratch — JWT access and refresh sessions, email verification, password reset and role-based middleware on top of chi.",
      "Core learning engine: vocabulary management and lesson flow combining FSRS v4 spaced repetition with a Redis-backed round-robin queue that recycles failed words within a session before scheduling them for long-term review.",
      "Anthropic Claude API integration for word analysis and exercise generation using tool use with strict JSON schemas, plus DeepL for translation — explanations and phonetic transcriptions in each learner's own alphabet.",
      "Layered architecture (handler → service → repository) covering 200+ REST endpoints documented with Swagger, on a PostgreSQL schema managed through 60+ versioned migrations; repository layer covered by integration tests against a real PostgreSQL instance in a container.",
      "Delivery pipeline: multi-stage Docker builds, GitHub Actions CI running build, vet, govulncheck, race-enabled unit tests and integration tests on ephemeral PostgreSQL/Redis containers, container releases to GHCR, and a Prometheus / Grafana / Loki stack with alerting.",
    ],
    stack: [
      "Go",
      "chi",
      "PostgreSQL",
      "pgx",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Claude API",
      "Caddy",
      "Prometheus",
    ],
    live: "https://synaply.me",
    liveLabel: "synaply.me",
    repoNote: "Private repository — walkthrough on request",
    highlight: true,
  },
];
