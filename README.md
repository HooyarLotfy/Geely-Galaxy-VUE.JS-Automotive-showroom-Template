# Geely Galaxy Iran - Enhanced Nuxt.js Application

A modern, high-performance automotive showroom website built with **Nuxt 3**, featuring immersive animations, glassmorphism design, and a seamless user experience. This project is a complete migration and enhancement of the original static website.

## 🚀 Features

-   **Dynamic Showroom**: Interactive image sliders and feature cards showcasing multiple vehicle models (E8, L380, Star 8, L7, Starship 7).
-   **Immersive Visuals**: Full-screen video backgrounds and "Technology for a Better Life" video overlays.
-   **Premium UI/UX**:
    -   **Glassmorphism**: Frosted glass effects on forms and overlays.
    -   **Smooth Scrolling**: Integrated **Lenis** for buttery smooth scroll experiences.
    -   **Animations**: Advanced scroll-triggered animations using **GSAP** and **ScrollTrigger**.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Secure Contact Form**: Built-in contact form with **Zod** validation and a server-side API route (`/api/contact`).

## 🛠️ Tech Stack

-   **Framework**: [Nuxt 3](https://nuxt.com/) (Vue.js 3)
-   **Styling**: SCSS, CSS Variables
-   **Animations**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
-   **Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
-   **Validation**: [Zod](https://zod.dev/)
-   **Icons**: [Remix Icon](https://remixicon.com/)

## 📂 Project Structure

```bash
.
├── components/          # Reusable Vue components
│   ├── AppHeader.vue    # Navigation bar
│   ├── AppFooter.vue    # Global footer
│   ├── ImageSlider.vue  # Dynamic hero slider
│   ├── VideoSection.vue # Full-width video component
│   ├── CardsSection.vue # Dynamic feature cards
│   ├── FeaturesSection.vue # "Santorini" style feature layout
│   └── ContactForm.vue  # Glassmorphism contact form
├── pages/               # Application routes
│   ├── index.vue        # Home / Showroom page
│   ├── E8.vue           # Geely Galaxy E8 model page
│   ├── L380.vue         # Geely Galaxy L380 model page
│   └── Star8.vue        # Geely Galaxy Star 8 model page
├── server/
│   └── api/             # Server-side API routes
│       └── contact.post.ts # Contact form handler
├── assets/
│   └── css/             # Global styles (main.scss)
├── public/              # Static assets (Videos, Favicon)
└── nuxt.config.ts       # Nuxt configuration
```

## 📦 Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HooyarLotfy/GeelyIran.git
    cd GeelyIran
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Design Philosophy

The design focuses on **"Stunning Design"** and **"Advanced Technology"**, mirroring the brand's identity. Key design elements include:
-   **Dark Mode Aesthetic**: A sleek, dark theme that highlights the vehicles.
-   **Typography**: Uses `Montserrat` for headings and `Inter`/`Vazirmatn` for body text to ensure readability and style.
-   **Interactive Elements**: Hover effects, magnetic buttons, and scroll-driven reveals keep users engaged.

## 📄 License

[MIT License](LICENSE)
