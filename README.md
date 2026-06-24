# 🚀 Abdallah Abo Helal — Developer Portfolio

A modern, dark-themed personal portfolio website featuring an **interactive CLI terminal**, a real projects showcase, skills grid, timeline, and a fully functional contact form.

**Live at:** [abdallah.dev](https://ah-abdallah.github.io/portfolio/)

---

## ✨ Features

- 🖥️ **Interactive CLI Terminal** — Type commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`) to explore the portfolio
- 📁 **Projects Section** — Dynamically rendered cards for all featured projects with GitHub & Live Demo links
- 🛠️ **Skills Grid** — Categorized technical skills (Frontend / Backend / Tools)
- 🕐 **Timeline** — Education and experience milestones
- 📬 **Contact Form** — Real email delivery powered by [Formspree](https://formspree.io)
- 🎨 **Dark Glassmorphism Design** — Cyan/blue gradient theme with smooth micro-animations
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts

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
├── index.html       # Main HTML structure & SEO meta tags
├── style.css        # Design system tokens, layout, components
├── script.js        # Data layer, terminal engine, dynamic renderers
└── README.md        # This file
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

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made by <a href="https://github.com/AH-AbdAllah">AH-AbdAllah</a>
</div>
