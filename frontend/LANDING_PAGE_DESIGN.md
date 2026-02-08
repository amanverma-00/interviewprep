# Graphora Design System

## Core Aesthetic: "Developer Zenith"

We have moved away from generic SaaS templates to a high-contrast, developer-native aesthetic.

### 🎨 Color Palette

- **Void Black (`#0a0a0b`)**: The primary background. Deep, immersive, and screen-friendly.
- **Electric Green (`#2ecc71`)**: High-visibility accent color used sparingly for impact (cursors, active states).
- **Muted Slate**: Text hierarchy uses slate grays rather than transparency for better readability.

### 🔤 Typography

- **Heading Font**: `Outfit`. A geometric sans-serif that feels engineered, not just "clean".
- **Code Font**: `JetBrains Mono`. The industry standard for developer tooling.

### ✨ Motion & Interaction

- **Staggered Entrance**: Hero elements load in a sequence (Badge -> Title -> Subtitle -> CTA) to guide the eye.
- **Spring Physics**: The navbar active state uses a "spring" transition for a fluid, organic feel.
- **Glassmorphism**: The header uses a blur effect (`backdrop-filter`) to feel layered and premium.
- **Reactive Background**: A subtle CSS grid adds depth without clutter.

### 🧱 Component Architecture

- **Navbar**: Floating, glass-effect container. Focuses on navigation clarity.
- **Hero**: Minimalist content-first layout. No cartoons or generic illustrations.
- **Marquee**: Infinite scroll of partner companies using a CSS mask for smooth fading edges.

### 🚀 Tech Stack

- **Vite + React**: Fast compilation and HMR.
- **Framer Motion**: Production-grade animation library.
- **CSS Variables**: Semantic color naming for easier theming.
