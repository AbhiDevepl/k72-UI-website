Here’s your Markdown cleaned up, with proper code block endings and consistent formatting:

````markdown
# Soixante Douze – Creative Agency Portfolio

This is a **React application** built with **Vite**, using **React Router** for routing, **GSAP** (with ScrollTrigger) for animations, and **Tailwind CSS** for styling.  

It serves as a **portfolio/agency website** for *Soixante Douze* (a creative agency), showcasing a hero video section, agency description, and a project gallery.

---

## ߚ Demo
ߔ [Live Preview](https://k-78.netlify.app/)

---

## ߓ Overview
- A **static frontend site** with smooth animations and responsive design.
- Pages:
  - **Home** – Hero section with video background and text overlays.  
  - **Agence** – Agency description with animated team member images.  
  - **Projects** – Grid of project cards with image thumbnails and GSAP height animations.  
- No backend – optimized as a **modern static website**.

---

## ✨ Features
- ߎ Video background on the homepage.  
- ߎ Responsive design powered by Tailwind CSS.  
- ߔ Page routing with React Router.  
- ߎ GSAP animations (ScrollTrigger for scroll-based effects).  
- ߓ Organized components for reusability (Navbar, FullScreenNav, project cards, etc.).  
.  

---

## ߗ Project Structure

```plaintext
.
├── public/                  # Static assets
│   ├── video.mp4            # Hero/background video
│   ├── fonts/               # Font files
│   └── images/              # Image assets
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation/      # Navbar, FullScreenNav
│   │   ├── Home/            # Video, HomeHeroText, HomeBottomText
│   │   └── Projects/        # Project cards
│   │
│   ├── pages/               # Main pages (Home, Agence, Projects)
│   ├── context/             # NavContext (navigation state)
│   ├── App.jsx              # Main router setup
│   └── main.jsx             # App entry point
│
├── index.html               # Root HTML file
├── package.json             # Project dependencies & scripts
└── tailwind.config.js       # Tailwind CSS configuration
````

---
 
## Technologies
* [React](https://react.dev/) – UI framework
* [Vite](https://vitejs.dev/) – Build tool
* [React Router](https://reactrouter.com/) – Routing
* [GSAP](https://greensock.com/gsap/) – Animations
* [Tailwind CSS](https://tailwindcss.com/) – Styling

---

## ⚙️ Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

---
