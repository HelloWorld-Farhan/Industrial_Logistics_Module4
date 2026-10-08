# AeroLogix Design System: Light Mode Edition

## Overview

The AeroLogix (Industrial Logistics Module 4) design system is built entirely around an ultra-premium, ultra-clean **Light Mode / White UI** aesthetic. It completely rejects heavy dark modes and focuses on crisp data visualization, high legibility, glassmorphism, and minimal but impactful color accents.

## Core Color Palette

The UI relies heavily on a refined spectrum of Slate (for depth and typography), Indigo (for primary branding and actions), and Semantic accents (Emerald, Amber, Rose) for status indicators.

### 1. Base Layer (Backgrounds)
The application never uses harsh `#FFFFFF` for the main canvas. It uses subtle layers to create depth.
- **Main Canvas:** `bg-[#FBFBFC]` or `bg-slate-50` — This creates a soft, non-straining foundation.
- **Content Cards / Modals:** `bg-white` (`#FFFFFF`) — pure white is strictly reserved for the elevated foreground elements (cards, modals, dropdowns) to make them pop off the canvas.

### 2. Typography & Structural (Slate Scale)
- **Primary Text / Headings:** `text-slate-900` — High contrast for titles and major numbers.
- **Secondary Text / Body:** `text-slate-600` or `text-slate-500` — Muted text for descriptions and table rows.
- **Tertiary Text / Micro-copy:** `text-slate-400` — Used sparingly for timestamps or extremely subtle metadata.
- **Borders & Dividers:** `border-slate-100` or `border-slate-200` — Barely visible borders to separate content without creating harsh grid lines.

### 3. Primary Accent (Indigo)
Indigo is the only "brand" color. It is used to draw attention to primary actions, interactive elements, and key visual data points.
- **Primary Buttons:** `bg-indigo-600 hover:bg-indigo-700`
- **Subtle Highlights:** `bg-indigo-50 text-indigo-600` (e.g., Token ID badges, selected tab states).
- **Chart Data / Radar Rings:** Soft indigo strokes `stroke-indigo-200` to `stroke-indigo-500`.

### 4. Semantic Status Colors
All status indicators follow a strict, universally understood semantic palette. They are often used as "pills" (light background + colored text).
- **Positive / Active (Emerald):** `bg-emerald-50 text-emerald-600` (e.g., Active Drivers, Synced, On-Time).
- **Warning / Delayed (Amber):** `bg-amber-50 text-amber-600` (e.g., Delayed ETA, Moderate Risk).
- **Negative / Error (Rose):** `bg-rose-50 text-rose-600` (e.g., Incidents, Disconnected).

---

## UI/UX Principles & Patterns

### 1. The "Zero-Trust" Modal Pattern
Modals (like the Force Fleet Sync or the Trip Token Generator) never just "appear." They use a specific animation sequence to build trust and show progress:
1. **Backdrop:** A dark, blurred backdrop (`bg-slate-900/40 backdrop-blur-sm`).
2. **Animation:** Framer Motion is used for a subtle scale/fade in (`initial={{ scale: 0.95, opacity: 0 }}`).
3. **Execution:** The modal displays a loading state (e.g., a pulsing QR code or spinning `RefreshCcw`).
4. **Resolution:** A clear, green "Success" state (`CheckCircle`) appears before the modal can be dismissed.

### 2. Power BI / Dashboard Data Density
When displaying complex data (like the Driver Profile):
- **Hidden Scrollbars:** Native scrollbars are hidden (`[&::-webkit-scrollbar]:hidden`) to prevent visual clutter.
- **Strict Grids:** Data is organized in tight CSS grids.
- **Micro-charts:** Instead of just numbers, data is paired with small inline visuals (e.g., SVG Donut charts, animated bar charts).
- **Density:** Padding is kept tight (`p-4` to `p-6`) to fit more actionable data on the screen without looking messy.

### 3. Micro-Interactions
Every interactive element must react to the user:
- **Buttons:** `active:scale-95 transition-transform` (a subtle physical "press" feeling).
- **Hover States:** Slight background shifts (e.g., `hover:bg-slate-50`) rather than harsh color changes.
- **Pulsing Indicators:** Live data (like the Radar Blip or the "Live" badge) uses `animate-pulse` to feel "alive" and connected to the real world.

### 4. Rejection of Dark Mode
This module explicitly avoids "Dark Mode" styling. Even high-tech telemetry views (like the Live Tracking Radar) are rendered on clean white surfaces with indigo strokes, proving that enterprise data tools can be both powerful and luminous.
