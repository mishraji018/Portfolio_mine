Pawan Mishra — Interactive Portfolio Design & UX Blueprint

Goal: Build a premium, interactive developer portfolio that feels distinctive and technically impressive without becoming an overloaded 3D/WebGL showcase.

Core direction: Minimal foundation + cinematic micro-interactions + strong typography + interactive project storytelling + subtle futuristic details.

1. Brand Direction

Brand personality

The portfolio should communicate:

Developer

Builder

AI/Web enthusiast

Curious and experimental

Technical but creative

Professional enough for recruiters

Young, modern, confident

Visual keywords

Editorial · Futuristic · Technical · Premium · Interactive · Dark · Clean

Avoid

Excessive neon

Cyberpunk everywhere

Giant 3D planets

5,000+ particle backgrounds

Excessive glassmorphism

Rainbow gradients

Too many font families

Every element moving constantly

Generic "AI developer" templates

2. Color System

Primary Theme — Dark

Use a near-black background rather than pure black.

--bg-primary: #08090B;
--bg-secondary: #0D0F12;
--bg-tertiary: #12151A;

--surface: #15181D;
--surface-hover: #1B1F26;

--text-primary: #F5F7FA;
--text-secondary: #A6ADB8;
--text-muted: #69717D;

--border: #242932;
--border-hover: #343B46;

--accent: #7C5CFC;
--accent-hover: #9278FF;
--accent-soft: rgba(124, 92, 252, 0.14);

--success: #5FE3A1;
--warning: #F4C95D;
--error: #FF6B7A;

Accent philosophy

Use one primary accent.

Recommended:

Electric Violet — #7C5CFC

It works well with:

AI

software

modern web

dark UI

developer branding

Do not use the accent on everything.

Use it for:

active navigation

CTA

small highlights

interactive states

selected project

progress indicators

important keywords

Optional secondary highlight

Use extremely sparingly:

--cyan: #61D9FF;

Only for special technical/AI visualizations.

3. Typography

Primary font

Sora

Use for:

Hero heading

Section headings

Project titles

Navigation

Large numbers

Important labels

Suggested weights:

400 — Regular
500 — Medium
600 — SemiBold
700 — Bold

Secondary font

Manrope

Use for:

Body text

Descriptions

Project details

Buttons

Metadata

Small UI text

Suggested weights:

400
500
600
700

Optional technical font

JetBrains Mono

Use ONLY for:

Terminal

code snippets

technical metadata

keyboard shortcuts

system/loading interface

small developer Easter eggs

Do not use it for the whole portfolio.

4. Typography Scale

Desktop:

Hero:
clamp(4rem, 9vw, 9rem)

Section heading:
clamp(2.5rem, 5vw, 5rem)

Project title:
clamp(2rem, 4vw, 4rem)

Subheading:
1.25rem – 1.5rem

Body:
1rem – 1.125rem

Small:
0.75rem – 0.875rem

Technical:
0.75rem – 0.9rem

Mobile:

Hero:
3rem – 4rem

Section:
2.25rem – 3rem

Body:
0.95rem – 1rem

Typography rule

Large text should create visual hierarchy.

Do NOT make every heading huge.

5. Logo / Personal Mark

Use:

PM

as the compact mark.

Full branding:

PAWAN MISHRA

Possible navbar:

PM                         WORK  ABOUT  LAB  CONTACT

Logo behavior

Normal:

PM

Hover:

PM → PAWAN MISHRA

Keep this subtle.

6. Profile Photo

Yes — use your profile photo.

The photo should appear primarily in the About section, not dominate the hero.

Recommended treatment

Use a professional portrait:

clean background

good lighting

face clearly visible

casual-professional clothing

no heavy filters

no distracting background

preferably high resolution

Photo style

Instead of a normal circular profile picture, use:

┌─────────────────────────┐
│                         │
│       PROFILE           │
│        PHOTO            │
│                         │
│                         │
└─────────────────────────┘

Use a rectangular editorial crop with slightly rounded corners.

Suggested:

border-radius: 18px;

Interactive photo effect

On hover:

image slightly zooms

subtle grain/noise

accent outline appears

small metadata appears

Example:

PAWAN MISHRA
Developer / Builder
2026

Do NOT turn the profile picture into a glowing neon avatar.

7. Background

The background should have depth without looking busy.

Base:

background: #08090B;

Add:

1. Subtle radial gradient

background:
radial-gradient(
  circle at 70% 20%,
  rgba(124,92,252,0.12),
  transparent 30%
),
#08090B;

2. Noise texture

Very low opacity:

opacity: 0.025 – 0.05

3. Grid

Optional for technical sections:

thin lines
very low opacity

Rule

The user should notice the content first, not the background.

8. UI Style

Borders

Use subtle borders:

border: 1px solid #242932;

Hover:

border-color: #343B46;

Radius

Recommended:

Cards:       18px
Buttons:     12px
Inputs:      12px
Modal:       20px
Large media: 20px

Avoid excessive pill-shaped UI.

Use pills only for:

tags

status

small filters

9. Navbar

Desktop:

┌──────────────────────────────────────────────────────────┐
│ PM       WORK       ABOUT       LAB       CONTACT    ↗   │
└──────────────────────────────────────────────────────────┘

Behavior

At top:

transparent

integrated into hero

After scrolling:

slightly blurred background

subtle border

compact height

Example:

background: rgba(8, 9, 11, 0.72);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(255,255,255,0.07);

Mobile

Use:

PM                          MENU

Menu opens as a full-screen overlay.

10. Hero Section

Layout

PAWAN MISHRA

I BUILD
digital experiences
that feel alive.

[ EXPLORE WORK ]

Developer / AI / Web
India · 2026

Hero visual

Use:

animated typography

subtle gradient

noise

mouse response

very subtle particles

Avoid a huge 3D model.

Hero interaction

Mouse movement:

background gradient follows cursor

letters shift by a few pixels

small elements move at different speeds

Scroll:

hero content moves upward

typography scales down

next section gradually appears

11. Loading Experience

Initial loader

Use a short cinematic loader.

Example:

PAWAN.MISHRA

INITIALIZING PORTFOLIO

INTERFACE       ████████████████ 100%
ASSETS          ██████████████░░  87%
PROJECTS        ████████████████ 100%

SYSTEM READY

Important

Never force a long loader.

If critical assets load in < 800ms:

minimize or skip the visible loader.

Target:

Visible loader: 0.5–2.5 sec

Loading architecture

App
│
├── AssetManager
├── LoadingProvider
├── LoadingScreen
└── Skeleton System

Only preload critical assets.

12. Skeleton System

Create reusable skeleton components.

Examples:

SkeletonText
SkeletonImage
SkeletonProjectCard
SkeletonProfile
SkeletonStats

Skeleton animation:

shimmer

Keep it subtle.

Do not use bright animated gradients.

13. Asset Loading Strategy

Critical assets

Load immediately:

fonts

hero assets

logo

critical SVG

first project image

Deferred assets

Lazy load:

project videos

secondary images

experiments

large visualizations

3D assets

non-visible sections

Architecture:

CRITICAL
   ↓
HERO READY
   ↓
USER CAN INTERACT
   ↓
BACKGROUND ASSETS LOAD
   ↓
EXPERIMENTAL ASSETS

Goal:

Heavy-looking, lightweight-feeling.

14. Projects Section

This should be the strongest section.

Layout

Instead of many small cards:

01  AI SUMMARIZER
02  FACE ATTENDANCE
03  3D AI STUDIO
04  JARVIS

Use large editorial project rows.

Example:

01

AI SUMMARIZER
AI-powered document intelligence

React · Python · AI · NLP

                         VIEW PROJECT ↗

Hover

On hover:

project row expands slightly

preview image appears

image follows cursor

title shifts

accent line grows

metadata appears

15. Project Preview

Use a floating image/video preview.

Behavior:

mouse enters project
        ↓
preview appears
        ↓
preview follows cursor
        ↓
mouse leaves
        ↓
preview exits

Use spring-based motion.

Do not make the preview too large.

Recommended:

320px – 500px width

depending on viewport.

16. Project Detail / X-Ray

Every major project should communicate engineering ability.

Structure:

OVERVIEW
↓
PROBLEM
↓
APPROACH
↓
ARCHITECTURE
↓
TECH STACK
↓
RESULT
↓
LIVE DEMO / GITHUB

X-Ray interaction

Button:

[ VIEW ARCHITECTURE ]

opens an interactive diagram.

Example:

USER
 ↓
FRONTEND
 ↓
API
 ↓
PROCESSING
 ↙       ↘
AI      DATABASE
 ↓
RESPONSE

Animate data flow.

17. Skills Section

Avoid a huge list of badges.

Create an interactive ecosystem.

                    AI
                    │
                    │
              PYTHON
                    │
WEB ──────────── CORE ─────────── DATA
                    │
                    │
                  SYSTEMS

Hover a category → relevant technologies appear.

Categories

WEB
AI / ML
LANGUAGES
TOOLS
DATABASE
IOT / HARDWARE

Use actual skill levels only if they are defensible.

Avoid fake percentage bars like:

React 95%
Python 90%

Prefer:

Working with
Learning
Exploring

or simply show technologies.

18. About Section

Keep it human.

Suggested structure:

WHO IS PAWAN?

I'm a B.Tech student who enjoys
building things with code, AI and
modern web technologies.

Currently exploring:
AI · Web · Computer Vision · 3D

Photo

Place photo beside the text.

Add small facts

B.Tech
Developer
Builder
AI / Web
2026

Keep it factual and simple.

19. Experience / Journey

Use an interactive timeline.

2024 ─────●──────── 2025 ─────────●──── 2026
          │                         │
       Started                  AI / Web
       coding                   projects

Hover/click a point → details appear.

Use scroll-triggered line drawing.

20. Experiments / Lab

This section can differentiate you from normal portfolios.

Title:

THE LAB

Show:

small AI experiments

WebGL experiments

computer vision

UI experiments

interesting prototypes

Each item can have:

EXPERIMENT 01
STATUS: ACTIVE

This communicates curiosity.

21. Custom Cursor

Do not use a giant glowing circle.

Default

●

Hover project

↗ VIEW

Hover GitHub

GH ↗

Drag

↔ DRAG

Implementation

Create:

CustomCursor
CursorLabel
CursorFollower

Disable custom cursor on:

touch devices

accessibility settings

reduced motion

22. Magnetic Buttons

Use only for important CTAs:

EXPLORE WORK
LIVE DEMO
GITHUB
CONTACT

Button moves slightly toward cursor.

Maximum movement:

5–12px

Do not make buttons chase the cursor aggressively.

23. Text Animations

Use split text reveal for:

hero

section headings

major project titles

Animation:

opacity: 0 → 1
y: 30px → 0

Stagger:

30–60ms

Avoid animating every paragraph.

24. Scroll System

Use smooth scrolling carefully.

Recommended:

Lenis
+
GSAP ScrollTrigger

Use scroll to control:

hero exit

heading reveals

project entrance

timeline drawing

image scaling

section transitions

Do not make the user fight the scroll.

25. Scroll Progress

Small top indicator:

━━━━━━━━━━━━░░░░░░

or:

03 / 06

Keep it minimal.

26. Page Transitions

For route changes:

current page
     ↓
short transition
     ↓
new page

Use:

opacity

clip-path

scale

slight blur

Avoid long cinematic transitions for every click.

Target:

300–700ms

27. Command Palette

Keyboard:

Ctrl + K

Mac:

⌘ + K

UI:

╭─────────────────────────────────╮
│ Search portfolio...             │
├─────────────────────────────────┤
│ → Work                          │
│ → About                         │
│ → Skills                        │
│ → Lab                           │
│ → GitHub                        │
│ → LinkedIn                      │
│ → Contact                       │
├─────────────────────────────────┤
│ ↑↓ Navigate   ↵ Open   ESC      │
╰─────────────────────────────────╯

Later commands:

projects
about
skills
github
linkedin
contact
resume
system

This should become one of the portfolio's signature features.

28. Developer Easter Eggs

Use 2–3 only.

Ideas:

Ctrl + Shift + P

Developer panel.

FPS      60
ASSETS   42/42
MODE     INTERACTIVE

/secret

Hidden experiment.

Konami Code

Small visual surprise.

Avoid making the portfolio feel like a game.

29. Browser Tab Details

Dynamic document title:

Pawan Mishra — Home
Pawan Mishra — Work
Pawan Mishra — About
Pawan Mishra — Lab
Pawan Mishra — Contact

Optional loading state:

Pawan Mishra — Loading...

30. Favicon

Use a simple:

PM

monogram.

Optional dynamic states:

normal → PM
loading → rotating mark
error → !

Keep it subtle.

31. Contact Section

Don't finish with a boring form only.

Large statement:

LET'S BUILD
SOMETHING
INTERESTING.

[ START A CONVERSATION ↗ ]

Then:

GitHub
LinkedIn
Email
Resume

Use a strong final visual.

32. Footer

Simple.

PAWAN MISHRA

Built with React · TypeScript · Tailwind

© 2026 Pawan Mishra

Optional:

STATUS ● ONLINE

33. Mobile UX

Mobile is NOT a smaller desktop.

Desktop:

cursor effects

hover previews

magnetic buttons

Mobile:

tap interactions

swipe

scroll reveal

touch-friendly cards

Minimum touch target:

44px+

Avoid tiny buttons.

34. Accessibility

Support:

@media (prefers-reduced-motion: reduce)

When enabled:

disable cursor effects

reduce parallax

remove complex transitions

keep content fully accessible

Also ensure:

keyboard navigation

visible focus states

semantic HTML

alt text

sufficient contrast

accessible buttons

modal focus handling

35. Responsive Breakpoints

Recommended:

Mobile:
< 640px

Tablet:
640px – 1024px

Desktop:
1024px – 1440px

Large:
> 1440px

Design mobile first where practical.

36. Animation Rules

Use three levels.

Level 1 — Micro

150–300ms

For:

hover

buttons

borders

icons

Level 2 — UI

300–700ms

For:

cards

modals

menu

navigation

page elements

Level 3 — Cinematic

700–1200ms

Only for:

hero

major project transitions

section entrances

Rule

If everything is cinematic, nothing feels cinematic.

37. Recommended Tech Stack

Current base:

React
Vite
TypeScript
Tailwind CSS

Add:

Framer Motion
GSAP
Lenis

Optional:

React Three Fiber
Three.js

Only add Three.js when a specific interaction justifies it.

38. Component Architecture

Recommended structure:

src/
│
├── components/
│   ├── ui/
│   │   ├── Button
│   │   ├── MagneticButton
│   │   ├── CustomCursor
│   │   ├── Skeleton
│   │   ├── Modal
│   │   └── PageTransition
│   │
│   ├── navigation/
│   │   ├── Navbar
│   │   ├── MobileMenu
│   │   └── CommandPalette
│   │
│   ├── projects/
│   │   ├── ProjectCard
│   │   ├── ProjectPreview
│   │   ├── ProjectDetail
│   │   └── ProjectXRay
│   │
│   └── effects/
│       ├── TextReveal
│       ├── Noise
│       ├── Parallax
│       └── CursorEffect
│
├── sections/
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Lab
│   └── Contact
│
├── hooks/
│   ├── useMousePosition
│   ├── useScrollProgress
│   ├── useReducedMotion
│   └── useMediaQuery
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── animations/
│   ├── hero.ts
│   ├── projects.ts
│   ├── transitions.ts
│   └── text.ts
│
└── utils/
    ├── assets.ts
    └── performance.ts

39. Performance Rules

This portfolio can look heavy but must remain fast.

Images

Use:

AVIF
WebP

where possible.

Videos

lazy load

compressed formats

poster images

don't autoplay huge videos on mobile

3D

If introduced:

lazy load

compress models

reduce polygon count

use appropriate texture sizes

pause when off-screen

JavaScript

Avoid installing libraries for tiny effects.

Target

Aim for:

Fast initial render
Smooth 60fps interaction
Low layout shift
Optimized images
Minimal blocking resources

40. SEO

Add:

<title>Pawan Mishra — Developer & Builder</title>

Meta description:

Portfolio of Pawan Mishra — developer building projects
across modern web technologies, AI and computer vision.

Also add:

Open Graph image

Twitter/X card metadata

canonical URL

semantic headings

sitemap

robots.txt

structured metadata where appropriate

41. Resume Integration

Do not put a giant "DOWNLOAD RESUME" button everywhere.

Use:

Resume ↗

in navbar or command palette.

Also include it in Contact.

42. GitHub / LinkedIn

Use real links.

Recommended navigation:

GitHub ↗
LinkedIn ↗

Do not create fake social stats.

If you display GitHub repositories/stats dynamically, lazy load them and show skeleton states.

43. Audio

Optional — not default.

Never autoplay sound.

If you want it:

SOUND OFF

User manually enables it.

Use tiny UI sounds only for:

menu

command palette

important interactions

Audio should never become annoying.

44. Final User Journey

The ideal experience:

USER OPENS SITE
       ↓
SHORT BOOT / LOADER
       ↓
HERO REVEAL
       ↓
USER MOVES MOUSE
       ↓
BACKGROUND + TYPOGRAPHY REACT
       ↓
SCROLL
       ↓
ABOUT / SKILLS
       ↓
PROJECTS
       ↓
PROJECT PREVIEW FOLLOWS CURSOR
       ↓
CLICK PROJECT
       ↓
PROJECT CASE STUDY
       ↓
ARCHITECTURE X-RAY
       ↓
LAB / EXPERIMENTS
       ↓
COMMAND PALETTE DISCOVERED
       ↓
CONTACT

The reaction you want:

"This isn't just a portfolio. Someone actually designed an experience around the work."

45. Implementation Roadmap

Phase 1 — Foundation

Audit existing repository

Clean unused components

Establish color tokens

Establish typography

Establish spacing

Establish radius/borders

Add responsive foundations

Phase 2 — Animation Engine

Add Framer Motion

Add GSAP

Add Lenis

Create animation utilities

Create reduced-motion support

Phase 3 — Loading

Asset manager

Loading provider

Initial loader

Progress indicator

Skeleton components

Lazy loading

Phase 4 — Hero

New hero layout

Split text animation

Cursor interaction

Background gradient

Noise texture

Scroll exit animation

Phase 5 — Projects

Redesign project list

Hover preview

Image/video preview

Magnetic CTA

Project detail

Project X-Ray

Architecture animation

Phase 6 — Content

About

Profile photo

Skills ecosystem

Experience timeline

Lab / experiments

Contact

Phase 7 — Navigation

Page transitions

Command palette

Scroll progress

Dynamic title

Mobile menu

Custom 404

Phase 8 — Polish

Cursor states

Micro-interactions

Favicon

Easter eggs

Image transitions

Final loading states

Phase 9 — Production

Mobile testing

Accessibility

Performance audit

Image optimization

SEO

Open Graph

Lighthouse/Core Web Vitals

Browser testing

Deployment

46. Priority Matrix

MUST HAVE

★★★★★
Typography
Color system
Hero
Projects
Project previews
Loading
Skeletons
Responsive design
Performance
Accessibility

HIGH VALUE

★★★★☆
Command Palette
Project X-Ray
Magnetic buttons
Custom cursor
Scroll progress
Page transitions
Timeline
Lab

NICE TO HAVE

★★★☆☆
Dynamic favicon
Developer panel
Easter eggs
Subtle particles
AI portfolio assistant

DO NOT PRIORITIZE YET

★★☆☆☆
Large Three.js scene
Heavy 3D models
Complex WebGL shaders
Background videos
Audio system

47. Final Design Principle

The portfolio should follow this ratio:

40%  Typography + Layout
25%  Content + Projects
20%  Interaction
10%  Visual effects
5%   Easter eggs

Not:

10% content
90% animation

Your portfolio should make recruiters understand who you are and what you build within 10–15 seconds, while giving technical visitors enough interactive details to explore for several minutes.

48. Final Target

The finished site should feel:

                 CLEAN
                   +
              INTERACTIVE
                   +
              TECHNICAL
                   +
                HUMAN
                   +
                UNIQUE

One-line design brief

A dark editorial developer portfolio with oversized Sora typography, Manrope body text, electric-violet accents, cinematic but restrained motion, interactive project previews, technical project X-Rays, subtle cursor/mouse interactions, a polished loading system, and hidden developer-oriented interactions.

Build Order — DO NOT SKIP

DESIGN SYSTEM
      ↓
LOADING SYSTEM
      ↓
HERO
      ↓
PROJECTS
      ↓
PROJECT X-RAY
      ↓
ABOUT + PHOTO
      ↓
SKILLS
      ↓
LAB
      ↓
NAVIGATION
      ↓
MICRO-INTERACTIONS
      ↓
MOBILE
      ↓
ACCESSIBILITY
      ↓
PERFORMANCE
      ↓
SEO
      ↓
DEPLOY

Do not start by adding random animations. Build the system first, then the effects.