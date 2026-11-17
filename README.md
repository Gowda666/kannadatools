# 🟡🔴 ಕನ್ನಡಟೂಲ್ಸ್ (KannadaTools)

> **ಉಚಿತ ಮತ್ತು ಮುಕ್ತ ತಂತ್ರಾಂಶ ಕನ್ನಡ ಡಿಜಿಟಲ್ ಉಪಕರಣಗಳು**  
> *Free, open-source, mobile-first, zero-hosting-cost Kannada tools website.*

---

## 🎯 Goal & Architecture

KannadaTools is designed from the ground up to provide high-speed, accessible, and completely free digital tools for the Kannada language:
- **ಲಿಪ್ಯಂತರಣ (Transliteration)**: English phonetics to Kannada Unicode live in browser.
- **ಪಠ್ಯ ಶುದ್ಧೀಕರಣ (Text Cleaner)**: Unicode normalizer, space cleaner, and legacy Nudi/Baraha converter.
- **ಚಿತ್ರದಿಂದ ಪಠ್ಯ (OCR)**: In-browser Tesseract.js with `kan` Kannada training data.
- **ಧ್ವನಿಯಿಂದ ಪಠ್ಯ (Speech-to-Text)**: Audio transcription via free Hugging Face Spaces (Kannada-tuned Whisper).

### 💡 Zero Hosting Cost Strategy
- **Static First**: Powered by Astro + Tailwind CSS. Generated as static HTML/JS/CSS assets ready for **Cloudflare Pages** (100% free unlimited requests & bandwidth).
- **Client-Side Processing**: Heavy computations (Transliteration, Text Cleaning, OCR) run directly in the user's browser using WebAssembly and client-side JavaScript.
- **Bilingual (ಕನ್ನಡ + English)**: Kannada-first UI with an instant language toggle backed by `localStorage` persistence and fallback fonts (`Noto Sans Kannada`, `Tunga`, `Kedage`, `Mallige`, `Nirmala UI`, `Vijaya`) preventing missing glyphs (tofu/empty boxes).

---

## 📁 Project Structure

```text
kannadatools/
├── public/                 # Static assets
├── hf-space/               # Hugging Face Space for Kannada Speech-to-Text (Gradio + Whisper)
│   ├── app.py              # Gradio ASR application with Kannada Whisper model
│   ├── requirements.txt    # Python dependencies (gradio, transformers, torch)
│   └── README.md           # Step-by-step free deployment guide for Hugging Face Spaces
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.astro    # Navigation, logo, language switcher, mobile menu
│   │   ├── Footer.astro    # Bilingual footer, links, MIT license attribution
│   │   ├── ToolCard.astro  # Reusable card component for tool showcase
│   │   └── NewsletterSignup.astro # Free email subscription component
│   ├── layouts/
│   │   └── BaseLayout.astro# Base HTML layout, Noto Sans Kannada fonts, i18n hydration
│   ├── lib/                # Core utilities, state, and libraries
│   │   ├── i18n.ts         # Kannada & English translation dictionaries and helpers
│   │   ├── i18n.test.ts    # Unit tests for translation logic
│   │   ├── transliterate.ts# Live English-to-Kannada phonetic engine
│   │   ├── transliterate.test.ts # Transliteration unit tests
│   │   ├── cleaner.ts      # Unicode fixer, whitespace, punctuation, Nudi converter
│   │   ├── cleaner.test.ts # Text cleaner unit tests
│   │   ├── ocr.ts          # Image validation & Tesseract OCR helpers
│   │   ├── ocr.test.ts     # OCR unit tests
│   │   ├── speech.ts       # Audio validation, Hugging Face Gradio client helpers
│   │   └── speech.test.ts  # Speech-to-text unit tests
│   ├── pages/              # Static routes
│   │   ├── index.astro     # Home page showcasing all 4 live tools
│   │   ├── transliterate.astro # Live English-to-Kannada transliterator
│   │   ├── cleaner.astro   # Kannada text cleaner & Unicode repair tool
│   │   ├── ocr.astro       # In-browser Kannada OCR (image to text)
│   │   ├── speech.astro    # Kannada speech-to-text with audio upload & recording
│   │   ├── about.astro     # About page (stub, to be completed in Phase 7)
│   │   └── contact.astro   # Contact page (stub, to be completed in Phase 7)
│   └── styles/
│       └── global.css      # Tailwind directives & Kannada typography rules
├── astro.config.mjs        # Astro configuration (static output)
├── tailwind.config.mjs     # Tailwind configuration with Kannada font stack
├── tsconfig.json           # TypeScript configuration
├── package.json            # Scripts and dependencies
├── LICENSE                 # MIT License
└── README.md               # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **pnpm**

### Installation
```bash
npm install
```

### Development Server
Start the local development server at `http://localhost:4321`:
```bash
npm run dev
```

### Running Tests
Execute unit tests using Vitest:
```bash
npm test
```

### Production Build
Generate an optimized static build in `/dist`:
```bash
npm run build
```

### Preview Static Build
Preview the generated static output locally:
```bash
npm run preview
```

---

## 🚀 Free Zero-Cost Deployment

For complete, step-by-step instructions on deploying the website for $0/month, see **[`DEPLOYMENT.md`](./DEPLOYMENT.md)**.

### Summary
1. **Frontend (Cloudflare Pages)**:
   - Connect your GitHub repository to Cloudflare Pages.
   - Preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add environment variables: `NODE_VERSION=20`, `ASTRO_TELEMETRY_DISABLED=1`, `PUBLIC_HF_SPACE_URL=...`

2. **Backend (Hugging Face Spaces)**:
   - Create a free Space on [huggingface.co/new-space](https://huggingface.co/new-space) using **Gradio** and **CPU Basic (Free)** hardware.
   - Upload the contents of the [`hf-space/`](./hf-space/) folder.
   - Set the resulting Space URL in your Cloudflare Pages dashboard.

---

## ✅ Launch Checklist

Before launching to production, review the comprehensive **[`LAUNCH_CHECKLIST.md`](./LAUNCH_CHECKLIST.md)** covering tool tests, typography, accessibility, mobile widths, and SEO.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE). Free and open to the entire Kannada and developer community!

