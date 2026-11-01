# QuantaXore — Official Portfolio & Company Web Platform

> **"Digital work, considered."**  
> Hybrid Group of Companies • Digital • AI • Automation • SaaS

This is the official one-page modern web application for **QuantaXore**, designed and engineered around the official QuantaXore service catalog, multi-domain operating framework, and website pricing packages.

---

## 🚀 Quick Start

To run this project locally:

```bash
# 1. Navigate to the portfolio folder
cd "portfolio quantaxore"

# 2. Start the local Vite development server
npm run dev

# 3. Build for production release
npm run build

# 4. Preview production build locally
npm run preview
```

The application runs by default on `http://localhost:5173`.

---

## 📁 Structured Project Architecture

The codebase follows a scalable, modular component hierarchy:

```
portfolio quantaxore/
├── dist/                              # Production build bundle
├── public/                            # Static assets
│   └── favicon.svg                    # Custom Quantum Core SVG Favicon
├── src/
│   ├── components/
│   │   ├── common/                    # Shared reusable micro-components
│   │   │   ├── Badge.jsx              # Status & category pills
│   │   │   ├── GlowButton.jsx         # Gradient & glowing interactive buttons
│   │   │   └── Logo.jsx               # QuantaXore Quantum Core emblem & branding
│   │   ├── layout/                    # Page structure & chrome
│   │   │   ├── BackgroundGrid.jsx     # Ambient cyber mesh & glowing orbs
│   │   │   ├── Footer.jsx             # Comprehensive footer with roadmap vision
│   │   │   └── Navbar.jsx             # Fixed frosted-glass navigation bar
│   │   └── sections/                  # Discrete page sections
│   │       ├── Hero.jsx               # High-impact hero & interactive Quantum Core
│   │       ├── Philosophy.jsx         # Problem-First manifesto & Agency vs QX matrix
│   │       ├── ServicesMatrix.jsx     # 4 Core capability pillars with interactive tabs
│   │       ├── FeaturedProject.jsx    # Flagship Daycare client project & incubation teasers
│   │       ├── PackagesPricing.jsx    # PKR/USD pricing tiers & custom scope calculator
│   │       ├── DeliveryBlueprint.jsx  # Official 6-stage delivery lifecycle
│   │       └── ContactSection.jsx     # Direct WhatsApp channel & consultation form
│   ├── data/                          # Data files extracted from PDFs
│   │   ├── company.js                 # Brand mission, stats & expansion roadmap
│   │   ├── deliveryProcess.js         # The 6 delivery phases
│   │   ├── packages.js                # Official pricing packages & add-ons
│   │   ├── projects.js                # Flagship project & pipeline projects
│   │   └── services.js                # 4 Service pillars & deliverable architecture
│   ├── styles/
│   │   └── index.css                  # Custom styling, animations & scrollbar
│   ├── App.jsx                        # Single-page layout coordinator
│   └── main.jsx                       # React 19 entry point
├── index.html                         # HTML template with Tailwind CDN & typography
├── package.json                       # Scripts and dependencies
└── vite.config.js                     # Vite configuration
```

---

## 🎨 Design & Interaction Highlights

- **Not a Typical Agency Site**: Cyber-obsidian aesthetic (`#040711`), ambient neon cyan (`#00f2fe`) and electric violet glows, and glassmorphic translucent panels.
- **Interactive Quantum Core Console**: Hover or click through 4 live telemetry nodes in the Hero section (`Web Systems`, `AI Workflows`, `Custom Software`, `SaaS Prototypes`).
- **Interactive Device Viewport Switcher**: In the **Featured Work** section, toggle between **Desktop View**, **Mobile View**, and **Architecture Workflows** for the flagship daycare project.
- **Interactive Currency Switcher & Scope Estimator**: In **Pricing**, switch between **PKR (Pakistani Rupees)** and **USD ($)**, and dynamically toggle custom add-ons (WhatsApp Bot, Admin Dashboard, Client Portal, E-Commerce) to get an immediate estimated total!
- **Fast WhatsApp Channel**: Pre-configured instant inquiry buttons with pre-filled outreach templates based on the QuantaXore acquisition framework.

---

## 🔄 Placeholder Customization

- **Official Logo**: Integrated from [`public/logos/quantaxore-logo.jpg`](public/logos/quantaxore-logo.jpg) and styled with glowing backdrop effects across the navbar, footer, and interactive quantum core console.
- **Project Showcase**: Located in [`src/data/projects.js`](src/data/projects.js). You can easily update or add additional case studies as new projects are completed.
- **Contact Details**: Located in [`src/data/company.js`](src/data/company.js) to configure your official WhatsApp number and email.

