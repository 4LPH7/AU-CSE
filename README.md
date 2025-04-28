# 🎓 AUCSE 2.0 Website

A modern, fast, and visually appealing website for the **Department of Computer Science and Engineering**, Annamalai University. Built with ⚡ Vite.js, powered by Vue 3/React (your choice), styled with Tailwind CSS, enhanced with smooth GSAP animations, and enriched using real data scraped from the [official AU website](https://annamalaiuniversity.ac.in/).

> This is a complete refresh of the original departmental site – faster, sleeker, and way more interactive.

---

## 🚀 Features

- ⚡ **Vite.js** for lightning-fast build & dev experience
- 🌈 **GSAP animations** for smooth entrance effects, parallax, and page transitions
- 📦 **Tailwind CSS** for responsive and utility-first styling
- 🔥 **Dynamic data** parsed from the [Annamalai University](https://annamalaiuniversity.ac.in/) website
- 📱 Fully responsive and mobile-first
- 🎯 Accessible and SEO-optimized
- 🌐 Multi-section layout: Home, About, Faculty, Curriculum, Research, Events, Contact, etc.

---

## 📁 Project Structure

```
AU-CSE
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ About.tsx
│  │  ├─ Activities.tsx
│  │  ├─ Auth.tsx
│  │  ├─ Chatbot.tsx
│  │  ├─ CustomCursor.tsx
│  │  ├─ Facilities.tsx
│  │  ├─ Faculty.tsx
│  │  ├─ FacultyProfile.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Newsletter.tsx
│  │  ├─ Programs.tsx
│  │  ├─ ScrollToTop.tsx
│  │  ├─ TrainingPlacement.tsx
│  │  └─ Vision.tsx
│  ├─ data
│  │  └─ faculty.json
│  ├─ hooks
│  │  └─ useGSAPAnimation.ts
│  ├─ index.css
│  ├─ lib
│  │  └─ supabase.ts
│  ├─ main.tsx
│  ├─ styles
│  │  └─ animations.css
│  └─ vite-env.d.ts
├─ supabase
│  └─ migrations
│     └─ 20250327131428_raspy_dune.sql
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

---

## 🔧 Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/aucse-2.0.git
cd aucse-2.0
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the dev server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

---

## ✨ Animations with GSAP

- Scroll-triggered entrances (fade, slide-in, scale-up)
- Parallax on banners and images
- Smooth content transitions between pages
- Animated counters (faculty stats, research papers, etc.)

All animations are modular and reusable via the `/src/animations` folder.

---

## 🧠 Scraped Data

Real-time or statically extracted data from the [official AU site](https://annamalaiuniversity.ac.in/) includes:

- 🧑‍🏫 Faculty profiles and designations
- 📜 Course curriculum and syllabi
- 📅 Academic calendar and events
- 🏆 Research achievements and publications

Scraped data is stored as JSON in `src/data/` and mapped dynamically into the UI.

> ⚠️ This project is for **educational/demo purposes**. Ensure proper attribution and get permission if hosting publicly.

---


## 🤝 Contributing

Pull requests are welcome! If you have ideas for improvements, animations, or data sources, feel free to fork the project and make a PR.

---


## 🙏 Credits

- Data: [Annamalai University Official Website](https://annamalaiuniversity.ac.in/)
- Icons: [Lucide](https://lucide.dev), [FontAwesome](https://fontawesome.com/)
- Animations: [GSAP](https://greensock.com/gsap/)
- Dev tools: Vite, Tailwind, and Vue/React

---

