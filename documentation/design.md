---
theme: light
font: "Inter"
colors:
  primary: "#4F46E5"
  secondary: "#10B981"
  tertiary: "#F59E0B"
  neutral: "#0F172A"
  background: "#FBFBFC"
---

# AeroLogix Design System: Light Mode Edition

## Color Palette

- **Primary:** `#4F46E5` (Indigo) - Used for primary actions, buttons, and active states.
- **Secondary:** `#10B981` (Emerald) - Used for positive semantic status, success states, and on-time metrics.
- **Tertiary:** `#F59E0B` (Amber) - Used for warnings, delayed status, and secondary highlights.
- **Neutral:** `#0F172A` (Slate) - Used for text, structural borders, and the base dashboard background layer.
- **Background:** `#FBFBFC` (Off-white) - Used as the main application canvas background.

## Font

- **Primary Font:** Inter

---

## Overview

The AeroLogix (Industrial Logistics Module 4) design system is built entirely around an ultra-premium, ultra-clean **Light Mode / White UI** aesthetic. It completely rejects heavy dark modes and focuses on crisp data visualization, high legibility, glassmorphism, and minimal but impactful color accents.

## Core Layers

### 1. Base Layer (Backgrounds)
The application never uses harsh `#FFFFFF` for the main canvas. It uses subtle layers to create depth.
- **Main Canvas:** `bg-[#FBFBFC]` or `bg-slate-50` — This creates a soft, non-straining foundation.
- **Content Cards / Modals:** `bg-white` (`#FFFFFF`) — pure white is strictly reserved for the elevated foreground elements (cards, modals, dropdowns) to make them pop off the canvas.

### 2. Typography & Structural (Slate Scale)
- **Primary Text / Headings:** `text-slate-900` — High contrast for titles and major numbers.
- **Secondary Text / Body:** `text-slate-600` or `text-slate-500` — Muted text for descriptions and table rows.
- **Tertiary Text / Micro-copy:** `text-slate-400` — Used sparingly for timestamps or extremely subtle metadata.
- **Borders & Dividers:** `border-slate-100` or `border-slate-200` — Barely visible borders to separate content without creating harsh grid lines.

## UI/UX Principles & Patterns

### 1. The "Zero-Trust" Modal Pattern
Modals never just "appear." They use a specific animation sequence to build trust and show progress:
1. **Backdrop:** A dark, blurred backdrop (`bg-slate-900/40 backdrop-blur-sm`).
2. **Animation:** Framer Motion is used for a subtle scale/fade in (`initial={{ scale: 0.95, opacity: 0 }}`).
3. **Execution:** The modal displays a loading state (e.g., a pulsing QR code or spinning icon).
4. **Resolution:** A clear, green "Success" state appears before the modal can be dismissed.

### 2. Power BI / Dashboard Data Density
When displaying complex data (like the Driver Profile):
- **Hidden Scrollbars:** Native scrollbars are hidden to prevent visual clutter.
- **Strict Grids:** Data is organized in tight CSS grids.
- **Micro-charts:** Instead of just numbers, data is paired with small inline visuals (e.g., SVG Donut charts, animated bar charts).
- **Density:** Padding is kept tight to fit more actionable data on the screen without looking messy.

### 3. Rejection of Dark Mode
This module explicitly avoids "Dark Mode" styling. Even high-tech telemetry views (like the Live Tracking Radar) are rendered on clean white surfaces with indigo strokes, proving that enterprise data tools can be both powerful and luminous.
