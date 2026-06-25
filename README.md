# 🚀 Abdallah Abo Helal — Developer Portfolio

<div align="center">
  
  [![GitHub Languages](https://img.shields.io/github/languages/top/AH-AbdAllah/portfolio?color=00f2fe&style=flat-square)](https://github.com/AH-AbdAllah/portfolio)
  [![GitHub Repository Size](https://img.shields.io/github/repo-size/AH-AbdAllah/portfolio?color=4facfe&style=flat-square)](https://github.com/AH-AbdAllah/portfolio)
  [![License](https://img.shields.io/github/license/AH-AbdAllah/portfolio?color=a855f7&style=flat-square)](https://opensource.org/licenses/MIT)

</div>

A modern, dark-themed personal portfolio website featuring an **interactive CLI terminal**, custom interactive animations, and a structured developer resume showcase.

**Live at:** [abdallah.dev](https://ah-abdallah.github.io/portfolio/)

---

## ✨ Features

- 🖥️ **Interactive CLI Terminal** — Type commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`) to explore the portfolio.
- 📁 **Projects Section** — Dynamically rendered cards with GitHub & Live Demo links.
- 📐 **3D Perspective Tilt** — Cards tilt dynamically by up to 5° responding to mouse movements.
- 🌈 **Custom Accent Branding** — Each featured project card is styled with its own distinct accent color glow.
- 🛠️ **Vibrant Skills Grid** — Technical skills categorized and color-coded based on technology type.
- 🕐 **Timeline Section** — Animated milestones detailing academic and project progress.
- 📬 **Contact Form** — Client-side validation with real email delivery powered by [Formspree](https://formspree.io).
- 🎨 **Premium UI Design** — Fixed ambient radial gradients in the background combined with custom glassmorphism components.
- 📱 **Fully Responsive** — Stretched layout optimized for desktop, tablet, and mobile browsers.
- 📈 **Scroll Progress Indicator** — Responsive progress bar showing real-time reading progress.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (Semantic) |
| Styling | Vanilla CSS3 (Custom Design System) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Inter, Outfit, JetBrains Mono |
| Icons | Font Awesome 6 |
| Email | Formspree |

> **No frameworks. No dependencies. Pure performance.**

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML structure, landing sections & SEO tags
├── cv.html          # Professional web-based and printable CV page
├── style.css        # Custom CSS variables, glassmorphism UI & layout
├── script.js        # Dynamic card renderers, CLI router & interactions
└── README.md        # Repository documentation
```

---

## 🖥️ Terminal Commands

| Command | Description |
|---|---|
| `help` | List available commands |
| `about` | Developer summary and objective |
| `projects` | Show featured projects |
| `skills` | List technical skill categories |
| `contact` | Print contact information |
| `clear` | Clear the terminal screen |

---

## 🗂️ Featured Projects

| Project | Tech | Links |
|---|---|---|
| **NEON BOARD** | React, Node.js, Express, Firestore, SSE | [GitHub](https://github.com/AH-AbdAllah/NEON-BOARD) · [Live](https://neon-board.onrender.com/) |
| **C# Interactive Academy** | JS, HTML5, CSS3, SVG | [GitHub](https://github.com/AH-AbdAllah/C-) · [Live](https://csharp-five.vercel.app/) |
| **DevToolBox** | Next.js, React, Tailwind, Web APIs | [GitHub](https://github.com/AH-AbdAllah/DevToolBox) · [Live](https://dev-tool-box-chi.vercel.app) |
| **TaskFlow Enterprise API** | C#, ASP.NET Core, PostgreSQL, JWT | [GitHub](https://github.com/AH-AbdAllah/Task-Management-Enterprise-API) · [Live](https://task-management-api-xxiu.onrender.com) |
| **Social Media API** | Node.js, Express, PostgreSQL, MongoDB | [GitHub](https://github.com/AH-AbdAllah/Social-Media-API) · [Live](https://social-media-api-t4ky.onrender.com) |

---

## 🚀 Getting Started

No build step required. Just open the file directly:

```bash
# Clone the repository
git clone https://github.com/AH-AbdAllah/portfolio.git
cd portfolio

# Open in browser
start index.html       # Windows
open index.html        # macOS
xdg-open index.html    # Linux
```

Or use a local dev server (recommended for live reload):

```bash
# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 📬 Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To set up your own:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint
3. Update the fetch URL in `script.js`:

```js
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... });
```

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">
  Made by <a href="https://github.com/AH-AbdAllah">AH-AbdAllah</a>
</div>
