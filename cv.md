# Stanislav Tolmachov

**Go Backend Developer**

Norway · Open to remote and relocation · Full right to work in Norway
+47 920 43 450 · stan@tolmachov.dev · linkedin.com/in/stan-tolmachov · synaply.me

---

## Summary

Backend developer working with Go since 2022. Over the past four months I designed and shipped
**Synaply**, a production language-learning platform running at synaply.me — REST API, background
worker, PostgreSQL and Redis, deployed in Docker behind TLS with a full CI pipeline. It is being
piloted in a Norwegian secondary school. Before software
I spent 13 years in film post-production, the last eight running my own studio delivering to Netflix,
Amazon and Lionsgate. Looking for a backend role in a team with code review.

---

## Technical Skills

**Languages:** Go, SQL
**Backend:** REST APIs, chi, net/http, JWT authentication, sessions, middleware, goroutines, context, sync
**Data:** PostgreSQL, pgx, goose migrations, Redis
**Integrations:** Anthropic Claude API (tool use, strict JSON schemas), DeepL API, SMTP
**Infrastructure:** Docker, multi-stage builds, Docker Compose, GitHub Actions CI, Caddy (auto-TLS), Linux
**Observability:** Prometheus, Grafana, Loki, Alertmanager
**Testing:** go test, table-driven tests, integration tests against real PostgreSQL via testcontainers
**Tools:** Git, Swagger / OpenAPI, Postman, GoLand

---

## Projects

### Synaply — AI-powered language learning platform
*Go · PostgreSQL · Redis · Docker · Claude API* — synaply.me (private repository — walkthrough on request)

Solo-built production service: REST API, background worker, PostgreSQL storage and Redis session
state, deployed behind Caddy with automatic TLS. 300+ commits since April 2026. **Piloted with two
classes (~45 students) at a Norwegian secondary school (April–May 2026); a second pilot with the
current version starts September 2026.**

- Built the authentication layer from scratch — JWT access and refresh sessions, email verification,
  password reset, and role-based middleware on top of chi.
- Implemented the core learning engine: vocabulary management and lesson flow combining **FSRS v4**
  spaced repetition with a Redis-backed round-robin queue that recycles failed words within a session
  before scheduling them for long-term review.
- Integrated the **Anthropic Claude API** for word analysis and exercise generation using tool use with
  strict JSON schemas, plus DeepL for translation — producing explanations and phonetic transcriptions
  in each learner's own alphabet, since the pilot classes mix students from many countries and native
  languages.
- Structured the service in a layered architecture (handler → service → repository) covering 200+ REST
  endpoints documented with Swagger, on a PostgreSQL schema managed through 60+ versioned migrations;
  covered the repository layer with integration tests running against a real PostgreSQL instance in a container.
- Set up the delivery pipeline: multi-stage Docker builds, GitHub Actions CI running build, vet,
  govulncheck, race-enabled unit tests and integration tests on ephemeral PostgreSQL/Redis containers, container releases to GHCR, and a Prometheus / Grafana / Loki
  stack with alerting.

---

## Experience

**Full-time transition to software engineering** — Norway | 2024 – present
- Building Synaply while completing an advanced Go mentorship program; freelance post-production alongside.

**Teaching Assistant, Information & Media Production** — Nord-Troms High School, Norway | 2023 – 2024
- Mentored students one-on-one and ran workshops on technical tools and software.

**Studio Owner & Post-Production Supervisor** — MOVIESTIME.GROUP, Kyiv | 2015 – 2023
- Ran a post-production studio delivering to international clients including Netflix, Amazon, Lionsgate and Company 3.
- Designed and optimized production and technical delivery workflows under fixed release deadlines.
- Administered Linux and macOS systems and SAN/NAS storage (QNAP, RAID); managed data I/O and secure delivery of multi-terabyte assets.
- Contributed to 10+ award-winning feature films, including the Oscar-nominated documentary *Winter on Fire*.

**Film & Finishing Editor** — KINOTUR / WIZARDPOST, Kyiv | 2010 – 2015

---

## Education

- **Go Development, Advanced Mentorship Program** | 2025 – 2026
- **Backend Go Development**, online program | 2022 – 2024
- **Computer Systems Technician**, Zaporizhzhia Polytechnic National University | 2004 – 2008

---

## Languages

Ukrainian (native) · Russian (native) · English (B1)
