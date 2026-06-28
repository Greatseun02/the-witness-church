# The Witness Church — Website Implementation Guide

> A living reference document for building the official website of The Witness Church, Lagos, Nigeria.

---

## Project Overview

**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4  
**Goal:** A minimalistic, engaging, mobile-first church website with subtle animations, Unsplash placeholder images, and a cohesive design system derived from the church logo.

---

## Design System

### Color Palette

Derived directly from the church logo — a pinwheel of human figures in red, blue, and pink/magenta.

| CSS Variable | Hex | Use |
|---|---|---|
| `--color-navy` | `#1A3A6E` | Dark sections, navbar (when dark), footer, sermon player, overlays |
| `--color-navy-deep` | `#0F2347` | Deeper dark cards, hero overlay |
| `--color-red` | `#E53935` | Primary CTAs, "Watch Live", LIVE badge, section accents |
| `--color-red-dark` | `#B71C1C` | Red button hover state |
| `--color-pink` | `#D81B60` | Category tags, secondary badges, hover accents |
| `--color-pink-light` | `#FCE4EC` | Light pink tag backgrounds |
| `--color-white` | `#FFFFFF` | Navbar, cards, forms |
| `--color-gray-bg` | `#F7F8FA` | Light section backgrounds |
| `--color-gray-2` | `#EFEFEF` | Borders, dividers |
| `--color-text` | `#1A1A2E` | Primary body text |
| `--color-muted` | `#6B7280` | Captions, meta text, placeholders |

**Rules:**
- **Navy** → hero bg, dark sections (devotion, games, giving, footer), sermon player
- **Red** → ALL primary buttons, LIVE badge, active states, CTA lines
- **Pink** → tags, secondary highlights, hover accents, category pills
- **White / Gray** → navbar, light sections (welcome, announcements, sermons, directory)
- **No gold** from the hi-fi prototype — entirely replaced by this logo-based palette

### Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| Headings / Display | `Playfair Display` | 600, 700 | Google Fonts |
| Body / UI | `DM Sans` | 300, 400, 500, 600 | Google Fonts |

Load via `next/font/google` in `app/layout.tsx`. Replace the default Geist fonts.

**Scale:**
| Level | Size | Font | Usage |
|---|---|---|---|
| Display | 54px | Playfair Display 700 | Hero H1 |
| H2 | 38px | Playfair Display 700 | Section titles |
| H3 | 22px | Playfair Display 600 | Card titles |
| Body | 15–16px | DM Sans 400 | Paragraphs |
| UI / Label | 13px | DM Sans 500–600 | Buttons, nav links |
| Caption | 10–12px | DM Sans 600 | ALL-CAPS tags, badges, metadata |

### Spacing & Layout

- **Section vertical padding:** `py-20` (80px)
- **Section horizontal padding:** `px-6 md:px-12 lg:px-16 xl:px-[60px]`
- **Max content width:** `max-w-7xl mx-auto`
- **Navbar height:** 72px
- **Card border-radius:** `rounded-2xl` (large cards), `rounded-xl` (small cards)
- **Grid gaps:** `gap-4` (tight) · `gap-6` (standard) · `gap-8` (spacious)

### Animation Principles

- **Scroll reveal:** All sections fade-in-up on entering viewport — `IntersectionObserver` + CSS `@keyframes fadeInUp`. No library dependency.
- **Card hover:** `transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`
- **Button hover:** `transition-all duration-150` — scale slightly + darken
- **LIVE dot:** `@keyframes pulse` — opacity + scale loop
- **Navbar:** adds `shadow-md` on scroll (`window.scrollY > 10`)
- **Image cards (Welcome grid):** `group-hover:scale-105` on the image inside

---

## Component Architecture

```
src/
  components/
    content/
      HomePageContent.tsx           ← root home page composition
    ui/
      Button.tsx                    ← variant="primary" | "outline" | "ghost"
      Typography.tsx                ← SectionTag, Heading, Subtext, Caption
    homeContent/
      sections/
        HeroSection.tsx
        WelcomeSection.tsx
        DevotionSection.tsx
        AnnouncementsSection.tsx
        SermonsSection.tsx
        SocialClipsSection.tsx
        GamesSection.tsx
        YouTubeDirectorySection.tsx
        PrayerRequestSection.tsx
        GivingSection.tsx
      cards/
        SermonCard.tsx
        AnnouncementCard.tsx
        GameCard.tsx
        ClipCard.tsx
        VideoCard.tsx
    shared/
      Navbar.tsx
      LiveBanner.tsx
      Footer.tsx
```

Each **feature section** lives in `homeContent/sections/`. Its sub-components (cards, list items) live in `homeContent/cards/`. Shared layout primitives (nav, footer, banner) live in `shared/`.

---

## Sections — Specification

### 1. Navbar — `src/components/shared/Navbar.tsx`

- **White background**, sticky (`sticky top-0 z-50`)
- Scroll behaviour: add `shadow-md` when `scrollY > 10`
- **Left:** Logo — cross icon (in red) + "The Witness Church" (Playfair, navy) + "Lagos · Nigeria" (small caps, muted)
- **Center/Right links:** Home · Sermons · Devotion · Community · Events `[badge]` · Give
- **Right CTA:** "Watch Live" — red filled button
- **Mobile (< md):** Hamburger icon → full-height slide-in drawer with all links + CTA

---

### 2. Live Banner — `src/components/shared/LiveBanner.tsx`

- Thin red banner (`bg-red-600`) below the navbar
- Layout: `[● pulsing dot] LIVE NOW | Sermon title — Pastor name | [Join Stream →]`
- Toggled via `isLive: boolean` prop (default `true` for now)
- Mobile: title truncates with ellipsis

---

### 3. Hero Section — `src/components/homeContent/sections/HeroSection.tsx`

- **Full viewport** (`min-h-screen`) with Unsplash background image + dark navy overlay
- **Unsplash image:** `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80`
- **Content (left-aligned on desktop, centered on mobile):**
  - Eyebrow: `WELCOME TO THE WITNESS CHURCH` (small caps, red)
  - H1: "Where Faith **Meets** Community" — white, with "Meets" in red
  - Subtext: "A place of authentic worship, transformative teaching, and a community that walks with you through every season of life."
  - CTAs: `[▶ Watch Latest Sermon]` (red filled) + `[Plan Your Visit]` (white outline)
- **Stats bar** (bottom of hero, glass card):
  - 3,200+ Members · 12 Life Groups · 18 Years · 5 Service Times
  - `backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl`
- **Mobile:** full-bg image, content centered, stats bar scrolls below hero

---

### 4. Welcome Section — `src/components/homeContent/sections/WelcomeSection.tsx`

> Inspired by CCI Image #2: clean space, 3-column image card grid.

- **Background:** `--color-gray-bg` (light)
- **Header block (left):**
  - SectionTag: "Welcome to Witness"
  - H2: "Welcome Home!"
  - Subtext: "Dive into our teachings, events, and community. Your journey of faith begins here."
- **3-column card grid:**

| Card | Label | Title | CTA | Image Query |
|---|---|---|---|---|
| 1 | WHO WE ARE | About Us | Learn More → | `photo-1529070538774-1843cb3265df` (community/people) |
| 2 | JOIN OUR COMMUNITY | Connect with Us | Sign Up → | `photo-1529156069898-49953e39b3ac` (people smiling) |
| 3 | UPCOMING | Celebrations & Events | Learn More → | `photo-1540575467063-178a50c2df87` (celebration) |

- **Card design:** Full-bleed image (`h-64`), dark gradient overlay at bottom, label (small caps, white 70%), title (white, Playfair 20px), CTA (white, 12px)
- **Hover:** `group-hover:scale-105` on image (overflow hidden), overlay slightly lightens
- **Mobile:** Single column stack

---

### 5. Daily Devotion — `src/components/homeContent/sections/DevotionSection.tsx`

- **Background:** Navy (`--color-navy`)
- **Header:**
  - SectionTag: "Daily Devotion" (pink pill on navy)
  - H2: "Start Your Day in The Word" (white)
  - "View Full Plan →" link (right)
- **Grid layout (3 cols):**
  - **Main card (span 2):** Date label · Devotion title · Scripture reference · Verse quote box (red left-border) · Devotion body text · Action buttons (Read Full Chapter · Bookmark · Listen · Share)
  - **Side panel (in main card):** Study notes textarea · 7-day streak tracker (day circles) · Reading plan progress bar
  - **Memory Verse card (col 1):** Pink/red gradient background · "Memory Verse Challenge" label · Verse text · "Practice Verse" button
- **Mobile:** Single column, side panel stacks below main text

---

### 6. Announcements — `src/components/homeContent/sections/AnnouncementsSection.tsx`

- **Background:** `--color-gray-bg`
- **Layout:** `grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6`
- **Left sidebar** (`AnnouncementCard.tsx` × 4):
  - Date (small caps, muted) · Title (navy, semibold) · Category tag pill
  - Active: red left-border + light red bg
  - Categories: Service (blue pill) · Event (green pill) · Youth (purple pill)
- **Right — Featured announcement:**
  - Unsplash banner image (`h-48`)
  - Category badge (red filled) · Title (Playfair) · Body text · Date/time/location chips · "RSVP Now" red button
- **Mobile:** Sidebar becomes horizontal scroll row of `AnnouncementCard` chips; featured stacks below

---

### 7. Sermons — `src/components/homeContent/sections/SermonsSection.tsx`

- **Background:** White
- **Layout:** `grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8`
- **Left — Sermon Player (navy card, `rounded-2xl overflow-hidden`):**
  - Top artwork area (`h-56`) with Unsplash image + dark overlay + "Latest Message" badge + centered play circle
  - Body: Series label (pink) · Title (Playfair, white) · Pastor + date (muted) · Progress bar · Time stamps · Playback controls (⏮ ⏪ ▶ ⏩ ⏭)
- **Right — Sermon List** (`SermonCard.tsx` × 4):
  - Thumbnail square (navy placeholder) + title + pastor/date + duration pill
  - Active: red border
  - "Browse All 240+ Messages →" link at bottom
- **Mobile:** Player stacks above list; player height reduces

---

### 8. Social Clips — `src/components/homeContent/sections/SocialClipsSection.tsx`

- **Background:** `--color-gray-bg`
- **4-column grid** (`ClipCard.tsx` × 4):
  - Unsplash thumbnail (`h-52`)
  - Dark gradient overlay (`to top`)
  - Centered play circle button
  - Bottom info: platform dot + platform name + clip title + view count
- **Platforms & dot colors:** YouTube `#FF0000` · Instagram `#E040FB` · Facebook `#1877F2` · TikTok `#69C9D0`
- **Mobile:** `grid-cols-2` (2×2 grid)

---

### 9. Games — `src/components/homeContent/sections/GamesSection.tsx`

- **Background:** Navy gradient (`from-[#1A3A6E] to-[#0F2347]`)
- **Header:** SectionTag (pink) · H2 "Christian Games & Bible Challenges" (white) · Subtext (white 55%)
- **4-column grid** (`GameCard.tsx` × 4):

| Game | Emoji | Badge |
|---|---|---|
| Bible Quiz Battle | 📖 | 🔥 Popular (red pill) |
| Verse Scramble | ✏️ | ⚡ Daily (blue pill) |
| Bible Lands Explorer | 🗺️ | 🌍 New (green pill) |
| The Word — Wordle | 🔤 | 📅 Daily (red pill) |

- **Card:** `bg-white/5 border border-white/10 rounded-2xl p-6` · emoji (40px) · title (white) · description (white 55%) · badge
- **Hover:** `hover:-translate-y-1 transition-transform`
- **Mobile:** `grid-cols-2` (2×2 grid)

---

### 10. YouTube Directory — `src/components/homeContent/sections/YouTubeDirectorySection.tsx`

- **Background:** White
- **Header:** SectionTag · H2 "Church Sessions on YouTube" · Subtext · "Open on YouTube →"
- **3-column grid** (`VideoCard.tsx` × 3):

| Title | Series | Pastor | Views | Duration |
|---|---|---|---|---|
| When God Seems Silent — Full Service | Unshakeable Faith Series | Pastor E. Okafor | 34.2k | 1:02:44 |
| Fearfully & Wonderfully Made | Witness Women's Conference | Min. Grace Adeyemi | 21.8k | 58:12 |
| Generation Z: Called for This Moment | Youth Summit 2024 | Youth Pastor David Nwosu | 18.5k | 44:55 |

- **Card:** Unsplash thumbnail (`h-44`) + duration badge (bottom-right) + play overlay on hover + series (pink small caps) + title (navy) + pastor + views
- **Mobile:** Single column

---

### 11. Prayer Request — `src/components/homeContent/sections/PrayerRequestSection.tsx`

> **Departure from hi-fi:** No public prayer wall. Form only — requests go directly to Pastor.

- **Background:** `--color-gray-bg`, centered, `max-w-2xl mx-auto`
- **Header:**
  - SectionTag: "Community Prayer" (pink)
  - H2: "Send a Prayer Request"
  - Subtext: "Your request goes directly to Pastor Emmanuel. Our intercessory team prays over every request submitted."
- **Form fields:**
  - Your Name (optional) — text input
  - Prayer Category — `<select>`: Health & Healing · Family · Finance & Career · Salvation of a Loved One · Marriage · Breakthrough
  - Your Prayer Request — `<textarea>` (min 5 rows)
  - "Make this anonymous" — checkbox
- **Submit:** `[🙏 Submit Prayer Request]` — full-width red button
- **Note below button:** "Your privacy is respected. All requests are confidential."
- **No prayer cards displayed anywhere**

---

### 12. Giving — `src/components/homeContent/sections/GivingSection.tsx`

- **Background:** Navy (`--color-navy`), centered
- **Header:**
  - SectionTag: "Online Giving" (pink pill)
  - H2: "Give. Sow. Trust." (white)
  - Subtext: "Honor God with your firstfruits. Your generosity fuels the mission of The Witness Church locally and beyond." (white 55%)
- **Amount grid** (`grid grid-cols-3 gap-3`):
  - ₦5,000 — Tithe
  - ₦10,000 — Offering (default active)
  - ₦25,000 — Missions
  - ₦50,000 — Building Fund
  - ₦100k+ — Special Seed
  - Custom — Enter Amount
- **Active state:** `border-red-500 bg-red-500/10`
- **Inactive state:** `border-white/20`
- **CTA:** `[Give Securely Online →]` — red filled, large
- **Caption:** "🔒 Secured by Paystack · All transactions encrypted" (white 30%)
- **Mobile:** `grid-cols-2`

---

### 13. Footer — `src/components/shared/Footer.tsx`

- **Background:** `#070E17` (very dark navy)
- **4-column grid:** Brand · Ministries · Resources · Visit Us
- **Brand column:** Logo + tagline + social icons (Twitter/X · Facebook · Instagram · TikTok)
- **Ministries:** Children's Ministry · Youth Ministry · Women's Fellowship · Men's Brotherhood · Marriage Ministry · Prayer Ministry
- **Resources:** Sermon Archive · Daily Devotion · Bible Reading Plan · Giving Portal · Church App
- **Visit Us:** Service Times · Location & Directions · New Here? · Contact Us · Pastoral Care · Volunteering
- **Bottom bar:** "© 2025 The Witness Church · Lagos, Nigeria" + "Privacy Policy · Terms · Cookie Settings"
- **Mobile:** Single column stack

---

## Implementation Order

Follow this exact sequence to avoid import errors and build incrementally:

```
Step 1 — Foundation
  app/layout.tsx          → swap fonts to Playfair Display + DM Sans
  app/globals.css         → CSS variables + @keyframes (fadeInUp, pulse)
  next.config.ts          → add images.unsplash.com to remotePatterns

Step 2 — UI Primitives
  src/components/ui/Button.tsx
  src/components/ui/Typography.tsx

Step 3 — Shared Layout
  src/components/shared/Navbar.tsx
  src/components/shared/LiveBanner.tsx
  src/components/shared/Footer.tsx

Step 4 — Home Page Shell
  src/components/content/HomePageContent.tsx

Step 5 — Sections (top to bottom)
  HeroSection.tsx
  WelcomeSection.tsx
  DevotionSection.tsx
  AnnouncementsSection.tsx  + AnnouncementCard.tsx
  SermonsSection.tsx        + SermonCard.tsx
  SocialClipsSection.tsx    + ClipCard.tsx
  GamesSection.tsx          + GameCard.tsx
  YouTubeDirectorySection.tsx + VideoCard.tsx
  PrayerRequestSection.tsx
  GivingSection.tsx

Step 6 — Responsive Pass
  Test at 375px, 768px, 1280px — fix any breakpoint issues

Step 7 — Animation Pass
  Add IntersectionObserver scroll-reveal to each section root
```

---

## Files to Create / Modify

| File | Action | Notes |
|---|---|---|
| `app/layout.tsx` | Modify | Replace Geist with Playfair Display + DM Sans; update metadata |
| `app/globals.css` | Modify | Add CSS vars, `@keyframes fadeInUp`, `@keyframes pulse` |
| `app/page.tsx` | Keep | Already renders `<HomePageContent />` |
| `next.config.ts` | Modify | Add `images.unsplash.com` remote pattern |
| `src/components/content/HomePageContent.tsx` | Replace | Full section composition |
| `src/components/ui/Button.tsx` | Implement | — |
| `src/components/ui/Typography.tsx` | Implement | — |
| `src/components/shared/Navbar.tsx` | Create | — |
| `src/components/shared/LiveBanner.tsx` | Create | — |
| `src/components/shared/Footer.tsx` | Create | — |
| `src/components/homeContent/sections/HeroSection.tsx` | Create | — |
| `src/components/homeContent/sections/WelcomeSection.tsx` | Create | — |
| `src/components/homeContent/sections/DevotionSection.tsx` | Create | — |
| `src/components/homeContent/sections/AnnouncementsSection.tsx` | Create | — |
| `src/components/homeContent/sections/SermonsSection.tsx` | Create | — |
| `src/components/homeContent/sections/SocialClipsSection.tsx` | Create | — |
| `src/components/homeContent/sections/GamesSection.tsx` | Create | — |
| `src/components/homeContent/sections/YouTubeDirectorySection.tsx` | Create | — |
| `src/components/homeContent/sections/PrayerRequestSection.tsx` | Create | — |
| `src/components/homeContent/sections/GivingSection.tsx` | Create | — |
| `src/components/homeContent/cards/SermonCard.tsx` | Create | — |
| `src/components/homeContent/cards/AnnouncementCard.tsx` | Create | — |
| `src/components/homeContent/cards/GameCard.tsx` | Create | — |
| `src/components/homeContent/cards/ClipCard.tsx` | Create | — |
| `src/components/homeContent/cards/VideoCard.tsx` | Create | — |

---

## Unsplash Image Placeholders

Add `images.unsplash.com` to `next.config.ts` `remotePatterns`. All images use `next/image` with explicit `width` and `height`. Replace with real church photos when available.

| Location | Unsplash Photo ID | Description |
|---|---|---|
| Hero background | `1516450360452-9312f5e86fc7` | Worship crowd / concert |
| Welcome Card 1 (About) | `1529070538774-1843cb3265df` | Community of people |
| Welcome Card 2 (Connect) | `1529156069898-49953e39b3ac` | People smiling together |
| Welcome Card 3 (Events) | `1540575467063-178a50c2df87` | Celebration / event hall |
| Sermon Player artwork | `1511367461429-433e1f3e83db` | Dark stage / spotlight |
| Announcement banner | `1505236858219-8359eb29e329` | Church / event space |
| Clip cards | Use CSS gradients (navy → dark variants) | No faces needed |
| YouTube thumbnails | `1511367461429-433e1f3e83db` (reuse + tint) | Dark stage |

---

## Verification Checklist

- [ ] `npm run dev` — site loads at `localhost:3000` with no console errors
- [ ] All 13 sections render correctly in sequence
- [ ] Navbar is white, sticky, shows shadow on scroll
- [ ] Live Banner pulses correctly below navbar
- [ ] Hero image loads from Unsplash; overlay and stats bar render
- [ ] Welcome grid shows 3 image cards with hover effects
- [ ] Prayer Request section has ONLY the form — no prayer wall cards
- [ ] Giving section amount selection state works (click to select)
- [ ] `npm run build` — zero TypeScript errors, successful build
- [ ] Mobile (375px): navbar collapses to hamburger, sections stack correctly
- [ ] Tablet (768px): 2-column layouts where specified
- [ ] Desktop (1280px): full layouts match this spec
- [ ] Scroll-reveal animations fire once per section on enter
