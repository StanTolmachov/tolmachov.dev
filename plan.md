
# Детальный план реализации сайта-портфолио tolmachov.dev

---

## Стек и инфраструктура

**Технологии:** Astro 5 + TypeScript + Tailwind CSS v4 + Lucide Icons  
**Деплой:** GitHub Pages (статический экспорт через `astro build`)  
**Цель:** Lighthouse Score 100 по всем метрикам

---

## Фазы реализации

---

### Фаза 1 — Инициализация проекта

**Шаг 1.1 — Создание Astro-проекта**
```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install
npm install
```

**Шаг 1.2 — Установка зависимостей**
```bash
npm install @astrojs/tailwind tailwindcss@next lucide-astro
npm install -D @astrojs/sitemap
```

**Шаг 1.3 — Конфигурация `astro.config.mjs`**
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tolmachov.dev',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
```

**Шаг 1.4 — Настройка `tailwind.config` (v4 через CSS)**  
В `src/styles/global.css` подключить `@import "tailwindcss"` и задать CSS-переменные дизайн-системы.

**Шаг 1.5 — Настройка GitHub Actions**  
Файл `.github/workflows/deploy.yml` — автодеплой на `gh-pages` ветку при пуше в `main`.

---

### Фаза 2 — Дизайн-система

**Шаг 2.1 — Цветовая палитра (CSS-переменные)**

| Переменная | Значение | Назначение |
|---|---|---|
| `--color-bg` | `#0a0f1a` | Основной фон (глубокий тёмно-синий) |
| `--color-surface` | `#0f1624` | Поверхность карточек |
| `--color-border` | `rgba(255,255,255,0.05)` | Бордер по умолчанию |
| `--color-border-hover` | `rgba(255,255,255,0.20)` | Бордер при hover |
| `--color-accent` | `#00ADD8` | Go Blue — основной акцент |
| `--color-accent-2` | `#10b981` | Изумрудный — вторичный акцент |
| `--color-text` | `#e2e8f0` | Основной текст |
| `--color-muted` | `#64748b` | Приглушённый текст |

**Шаг 2.2 — Типографика**
- Заголовки: `Inter` или `Geist` (Google Fonts / self-hosted)
- Моноширинный: `JetBrains Mono` — для подзаголовка, тегов технологий, кода
- Подключение через `<link>` в `<head>` с `preconnect`

**Шаг 2.3 — Утилитарные CSS-классы (micro-interactions)**
```css
/* Базовый класс карточки */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  transition: all 300ms ease-out;
}
.card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 0 20px rgba(0, 173, 216, 0.15);
}

/* Теги технологий */
.tech-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(0, 173, 216, 0.1);
  color: var(--color-accent);
  transition: all 300ms ease-out;
}
.card:hover .tech-tag {
  background: rgba(0, 173, 216, 0.2);
  color: #38bdf8;
}
```

**Шаг 2.4 — Кнопки**
- **Primary (CTA):** фон `--color-accent`, hover — glow `box-shadow: 0 0 24px rgba(0,173,216,0.4)`
- **Secondary (Ghost):** прозрачный фон, бордер `--color-border`, hover — `--color-border-hover`
- **Icon-кнопки:** GitHub, LinkedIn, Telegram — SVG-иконки из Lucide, hover — `color: --color-accent`

---

### Фаза 3 — Структура файлов проекта

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── About.astro          ← Bento Grid
│   │   ├── Experience.astro     ← Timeline
│   │   ├── Projects.astro       ← Cards Grid
│   │   └── Contact.astro
│   └── ui/
│       ├── BentoCard.astro
│       ├── ProjectCard.astro
│       ├── TechTag.astro
│       ├── TimelineItem.astro
│       └── Button.astro
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

---

### Фаза 4 — Компоненты и секции

---

#### Шаг 4.1 — `BaseLayout.astro` (SEO + OpenGraph)

Мета-теги:
```html
<title>Stanislav Tolmachov — Backend Go Engineer</title>
<meta name="description" content="Backend Go Engineer & Technical Leader. Building robust, scalable Go systems backed by a decade of zero-fault tolerance leadership in the global film industry." />

<!-- OpenGraph -->
<meta property="og:title" content="Stanislav Tolmachov — Backend Go Engineer" />
<meta property="og:description" content="Building robust, scalable Go systems..." />
<meta property="og:image" content="https://tolmachov.dev/og-image.png" />
<meta property="og:url" content="https://tolmachov.dev" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />

<!-- Canonical -->
<link rel="canonical" href="https://tolmachov.dev" />
```

---

#### Шаг 4.2 — `Hero.astro`

Структура:
```
[Навигация — логотип ST + якорные ссылки]

[Бейдж: "Available for opportunities"]

[H1: Stanislav Tolmachov]
[H2 моноширинный: Backend Go Engineer | Technical Leader]
[Локация: 📍 Nordreisa, Norway]

[Хук-текст: "Building robust, scalable Go systems..."]

[CTA: [View Projects ↓]  [Contact]]
[Иконки: GitHub  LinkedIn  Telegram]

[Декоративный элемент: subtle grid/dot pattern или animated gradient blob]
```

Детали реализации:
- Анимация появления — CSS `@keyframes fadeInUp` с `animation-delay` для каждого элемента (staggered)
- Бейдж "Available" — пульсирующая зелёная точка (`animate-pulse`)
- Фоновый паттерн — SVG dot-grid с `opacity: 0.03`, абсолютное позиционирование

---

#### Шаг 4.3 — `About.astro` (Bento Grid)

**Сетка:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` с `gap-4`

| Плитка | Размер | Контент |
|---|---|---|
| **Story** | `lg:col-span-2` | Текст о переходе из кино в Go-разработку. Упоминание Netflix, Amazon, "Winter on Fire" |
| **Tech Stack** | `col-span-1` | Иконки + названия: Go, gRPC, PostgreSQL, Redis, Docker, GitHub Actions |
| **Soft Skills** | `col-span-1` | Extreme ownership, Crisis management, Zero-fault tolerance, Cross-team leadership |
| **Location** | `col-span-1` | 📍 Nordreisa, Norway + флаг Норвегии + "Open to remote" |
| **Languages** | `col-span-1` | EN B2, UK C2, RU C2 |

Каждая плитка — компонент `BentoCard.astro` с hover-эффектами из дизайн-системы.

---

#### Шаг 4.4 — `Experience.astro` (Вертикальный таймлайн)

Структура таймлайна (слева — вертикальная линия с точками):

```
● 2023 – present
  Backend Go Engineer (Freelance / Open to hire)
  Go · gRPC · PostgreSQL · Docker · Clean Architecture

● 2017 – 2023
  Owner, CEO & Digital Film Technical Supervisor
  MOVIESTIME.GROUP · Ukraine
  ↳ Netflix, Amazon, Lionsgate, "Winter on Fire"
  ↳ 10+ feature films, 20+ commercial projects
  ↳ Team of 10+, 0% downtime SAN infrastructure

● 2015 – 2017
  Post-Production Supervisor & Film Editor
  Freelance · Ukraine

● 2011 – 2015
  Editorial & Data I/O Technician
  KINOTUR DILab · Ukraine
  ↳ Oscar-Nominated "Winter on Fire"
```

Компонент `TimelineItem.astro`:
- Левая линия: `border-l-2 border-white/10`
- Точка: `w-3 h-3 rounded-full bg-accent` с `ring-4 ring-accent/20`
- Hover на item: подсветка точки, текст компании меняет цвет на `--color-accent`

---

#### Шаг 4.5 — `Projects.astro` (Portfolio Cards)

**Данные в `src/data/projects.ts`:**

```typescript
export const projects = [
  {
    title: "Synaply",
    subtitle: "Backend API for AI Educational Platform",
    description: "High-performance RESTful API for a bilingual language learning platform with AI-driven content generation via Google Gemini and DeepL APIs.",
    stack: ["Go", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions", "Gemini AI", "DeepL API"],
    github: "https://github.com/tolmachov",
    highlight: true,
  },
  {
    title: "User Management Microservice",
    subtitle: "gRPC & REST API",
    description: "Scalable user authentication service with dual-protocol support (gRPC + REST), JWT auth, bcrypt hashing, and full test coverage.",
    stack: ["Go", "gRPC", "Protocol Buffers", "JWT", "PostgreSQL", "testify", "mockery"],
    github: "https://github.com/tolmachov",
  },
  {
    title: "Weather & Holiday Telegram Bot",
    subtitle: "Concurrent Async Bot",
    description: "Highly concurrent Telegram bot with goroutine-based parallel API calls, cron-style background workers, and MongoDB persistence.",
    stack: ["Go", "Goroutines", "MongoDB", "Telegram API", "Google TimeZone API"],
    github: "https://github.com/tolmachov",
  },
];
```

**Компонент `ProjectCard.astro`:**
- Верхняя часть: иконка (Lucide `Code2` или `Server`), название, подзаголовок
- Средняя: описание (2-3 строки, `line-clamp-3`)
- Нижняя: теги стека + иконка GitHub (ссылка)
- Hover: весь набор micro-interactions из дизайн-системы

**Сетка:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

---

#### Шаг 4.6 — `Footer.astro`

```
[Логотип ST]  [Stanislav Tolmachov]

stanislav@tolmachov.dev  |  +47 920 43 450

[GitHub]  [LinkedIn]  [Telegram]

"Built with precision. Hosted on GitHub Pages."
© 2026 Stanislav Tolmachov
```

---

### Фаза 5 — Производительность и SEO

**Шаг 5.1 — Оптимизация шрифтов**
- Self-host через `fontsource` или `@font-face` с `font-display: swap`
- Preload критических шрифтов: `<link rel="preload" as="font">`

**Шаг 5.2 — OG-изображение**
- Создать статичный `public/og-image.png` (1200×630px)
- Тёмный фон, имя, должность, акцентный цвет Go Blue

**Шаг 5.3 — `robots.txt` и `sitemap.xml`**
- `robots.txt` — разрешить всё
- Sitemap генерируется автоматически через `@astrojs/sitemap`

**Шаг 5.4 — Lighthouse-оптимизации**
- Все изображения через Astro `<Image />` с `loading="lazy"` / `loading="eager"` для hero
- Нет блокирующего JS (Astro по умолчанию — zero JS)
- CSS инлайнится в `<head>` для критического пути

---

### Фаза 6 — GitHub Pages деплой

**Шаг 6.1 — `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
        with:
          folder: dist
```

**Шаг 6.2 — Настройка репозитория**
- В Settings → Pages → Source: `GitHub Actions`
- Добавить `CNAME` файл в `public/` с содержимым `tolmachov.dev`

---

### Порядок выполнения (приоритеты)

| # | Задача | Приоритет |
|---|---|---|
| 1 | Инициализация проекта + Tailwind + дизайн-система | 🔴 Критично |
| 2 | BaseLayout + SEO/OG мета-теги | 🔴 Критично |
| 3 | Hero Section | 🔴 Критично |
| 4 | Bento Grid (About) | 🟠 Высокий |
| 5 | Projects Cards | 🟠 Высокий |
| 6 | Experience Timeline | 🟠 Высокий |
| 7 | Footer | 🟡 Средний |
| 8 | Micro-interactions (hover, glow, transitions) | 🟠 Высокий |
| 9 | OG-изображение | 🟡 Средний |
| 10 | GitHub Actions деплой | 🟡 Средний |
| 11 | Финальный Lighthouse-аудит | 🟢 Финал |

---

### Итоговый результат

Сайт будет представлять собой одностраничное (SPA-like) портфолио с:
- **5 секциями:** Hero → About (Bento) → Experience (Timeline) → Projects → Footer
- **Нулевым клиентским JS** (только CSS-анимации)
- **Lighthouse 100** по всем метрикам
- **Полной мобильной адаптивностью** (Mobile First)
- **Профессиональным OG-превью** для LinkedIn/Telegram
- **Автодеплоем** на GitHub Pages через Actions
