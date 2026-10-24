# Project Architecture

## Overview

The portfolio is designed as a high-performance, single-page application (SPA) with deep-dive technical project case studies, interactive architectural diagrams, responsive navigation, and strict status transparency. It is engineered with modern React, TypeScript, and Vite, utilizing a tailored vanilla CSS token-driven design system. The architecture emphasizes instant render times, zero unnecessary runtime dependencies, modular component boundaries, and straightforward deployment to Vercel and GitHub.

## Tech Stack

Frontend: React 18 / 19, TypeScript, Vite, Vanilla CSS Design System with CSS Custom Properties, Lucide Icons  
Backend: Serverless ready (Vercel Functions compatible / Form handling API)  
Database: Not required for client portfolio; structured static content store with strict typing  
Authentication: None (Public portfolio website)  
Hosting: Vercel with automatic GitHub CI/CD  
Other Tools: Git, npm, TypeScript compiler (`tsc`), Vite build pipeline  

## System Components

### Frontend

- **Navigation & Header (`Navbar.tsx`)**: Sticky navigation with blur backdrop, section progress tracking, mobile responsive drawer, and direct Resume download action.
- **Hero Engine (`Hero.tsx`)**: Clean typography, professional headline, CTA links (Explore Projects, GitHub, Resume), and an interactive technical system visualization illustrating data pipelines and neural node activations.
- **About Module (`About.tsx`)**: Authentic narrative presenting Srimathi S. as a versatile AI/ML engineer and full-stack software developer working across computer vision, agentic systems, RAG, and backend workflows.
- **Skills Matrix (`Skills.tsx`)**: Categorized technical skills (AI/ML, Computer Vision, Backend & Software Engineering, Data & Processing, Developer Tools) with clean tags and no fabricated percentage bars.
- **Projects Gallery (`ProjectsGallery.tsx`)**: Interactive filterable gallery (All, AI/ML, Computer Vision, Intelligent Automation, Backend/Software) with search capability, verified status badges (Implemented, In Progress, Prototype), and instant case study triggers.
- **Case Study Modal & Deep Dive (`ProjectModal.tsx`)**: Comprehensive case studies for each of the 5 projects (Meiporul, MAIA, Makkal Hub, Super Memory, Meizhi) featuring:
  - Overview, Problem Statement, System Architecture, Implemented vs. Planned feature matrix, Engineering decisions & trade-offs, and verifiable GitHub links.
- **Interactive Architecture Visualizers (`ArchitectureDiagram.tsx`)**: Custom, responsive SVG-based workflow and component interaction diagrams illustrating verified execution flows and documented architectures.
- **Engineering Approach (`EngineeringApproach.tsx`)**: 7-stage systematic engineering lifecycle visualization (Problem definition, constraint analysis, pipeline design, model selection, incremental testing, error inspection, and evidence-based iteration).
- **Contact & Footer (`Contact.tsx`, `Footer.tsx`)**: Professional engagement form with client-side validation, direct links to GitHub, LinkedIn, and LeetCode, with clear configuration notes.

### Backend

- Static distribution with static asset serving (`/Srimathi_S_Resume.pdf`).
- Form submission abstraction allowing plug-and-play connection to Formspree, Formkeep, or serverless API route.

### Database

- Typed static data store (`src/data/projectsData.ts`, `src/data/skillsData.ts`) providing immutable single-source-of-truth project records, preventing data drift and ensuring honest feature labeling.

### APIs

- Form handling integration interface.
- External links to GitHub, LinkedIn, and LeetCode with secure `rel="noopener noreferrer"` attributes.

## Folder Structure

```
d:/all_my_crap/sri_portfolio/
├── public/
│   ├── Srimathi_S_Resume.pdf      # Verified resume PDF asset
│   ├── favicon.svg                # Modern technical favicon
│   └── og-image.png               # Social sharing preview banner
├── src/
│   ├── components/
│   │   ├── Icons.tsx              # Standalone SVG social & platform icons
│   │   ├── Navbar.tsx             # Responsive sticky navigation
│   │   ├── Hero.tsx               # Hero banner with system animation
│   │   ├── About.tsx              # Authentic professional bio & highlights
│   │   ├── Skills.tsx             # Structured technical skills cards
│   │   ├── ProjectsGallery.tsx    # Filterable project catalog
│   │   ├── ProjectCard.tsx        # Card with status badge and summary
│   │   ├── ProjectModal.tsx       # Deep-dive case study modal dialog
│   │   ├── ArchitectureDiagram.tsx# Visual component/flow diagram
│   │   ├── EngineeringApproach.tsx# 7-stage engineering methodology
│   │   ├── Contact.tsx            # Contact form and social profiles
│   │   └── Footer.tsx             # Footer with copyright and quick links
│   ├── data/
│   │   ├── projectsData.ts        # Typed project records for 5 core projects
│   │   └── skillsData.ts          # Structured technical categories
│   ├── types/
│   │   └── index.ts               # Project, Skill, Filter TypeScript definitions
│   ├── styles/
│   │   ├── variables.css          # Color tokens, typography, glassmorphism
│   │   ├── base.css               # Reset, typography, layout utilities
│   │   └── components.css         # Component styling and micro-animations
│   ├── App.tsx                    # Main layout and view state manager
│   ├── main.tsx                   # React root entry point
│   └── index.css                  # Global styles aggregator
├── index.html                     # Semantic HTML5 entry with SEO & OG tags
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript compiler options
├── tsconfig.node.json             # Vite TypeScript config
├── vite.config.ts                 # Vite bundler configuration
├── vercel.json                    # Vercel deployment & routing config
├── .gitignore                     # Git ignore rules for node_modules/dist
├── current.md                     # Live project state
├── architecture.md                # System design and technical architecture
├── plan.md                        # Execution plan and milestones
└── rules.md                       # Governance and change control
```

## Data Flow

1. **User Landing**: Visitor lands on `index.html`. Browser downloads minified CSS and bundled TypeScript chunk.
2. **State Initialization**: `App.tsx` initializes active project filter ('All'), search term (''), active case study modal state (`null`), and mobile navigation state (`false`).
3. **Interactive Filtering**: Selecting a domain tag or typing in search recomputes visible project items with zero server roundtrips.
4. **Deep-Dive Inspection**: Clicking "Explore Case Study" or card opens `ProjectModal.tsx`, rendering verified problem statement, architecture diagram, implemented vs. planned matrices, and GitHub actions.
5. **Resume Download**: Clicking Resume triggers direct download of `public/Srimathi_S_Resume.pdf`.
6. **Form Handling**: Contact submission validates email, subject, and message fields on client-side, showing clear status feedback.

## Architecture Decisions

Decision 1: Use React + TypeScript with Vite instead of complex SSR framework  
Reason: This is a client-facing personal portfolio. Vite generates a lightning-fast static bundle with zero server maintenance, optimal Lighthouse scores, near-instant initial render, and effortless deployment to Vercel or GitHub Pages.

Decision 2: Use Token-based Vanilla CSS instead of Tailwind CSS  
Reason: Per core web application development guidelines, Vanilla CSS provides maximum control over rich aesthetics (custom dark navy/charcoal glassmorphism, precise glowing cyan/violet accents, high-contrast typography, and smooth CSS keyframe micro-animations) without build-step purging issues or runtime overhead.

Decision 3: Maintain Typed Data Store for Projects (`projectsData.ts`)  
Reason: Centralizing project metadata, architecture diagrams, verified tags, and honest implementation statuses in strongly typed TypeScript objects guarantees consistency, eliminates fabricated claims, and allows easy maintenance as new features are built.
