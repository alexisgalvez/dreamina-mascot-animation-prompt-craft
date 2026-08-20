# DESIGN.md — UI & Visual Design System Specification

## 1. Aesthetic Identity
A modern, dark glassmorphism interface tailored for 3D animators and vector artists. Combines deep slate surfaces with vibrant Dreamina purple and cyan accents.

---

## 2. Color Tokens
```css
:root {
  --bg-dark: #070a12;
  --bg-card: rgba(15, 23, 42, 0.72);
  --bg-card-hover: rgba(30, 41, 59, 0.85);
  --bg-card-border: rgba(255, 255, 255, 0.08);
  --bg-input: rgba(11, 17, 32, 0.90);
  --bg-input-border: rgba(255, 255, 255, 0.12);

  --color-primary: #8b5cf6;        /* Dreamina Purple */
  --color-primary-glow: rgba(139, 92, 246, 0.40);
  --color-cyan: #06b6d4;           /* Motion Cyan */
  --color-blue: #3b82f6;           /* Electric Blue */
  --color-emerald: #10b981;        /* Identity Lock Green */
  --color-amber: #f59e0b;          /* Highlight Amber */
  --color-danger: #ef4444;

  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Outfit', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 3. UI Component Layout
- **Header**: Mascot Animation Branding & Dreamina Seedance 2.5 Badges.
- **Top Bar**: 1-Click Character Animation Presets.
- **3-Column Workspace**:
  - Column 1: Mascot Reference Upload (`@Image 1`), Color Extractor, Style & Environment Selectors.
  - Column 2: Storyboard Timeline Builder (Action, Expression, Camera, FX per Beat).
  - Column 3: Dual Prompt Terminal (Seedance 2.5 Video & Seedream 5.0 Still Frame) with Copy-to-Clipboard.
