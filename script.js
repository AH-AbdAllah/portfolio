// ----------------------------------------------------
// Structured Data Layer
// ----------------------------------------------------
const PORTFOLIO_DATA = {
  about: "I am a second-year Computer Engineering student at Al-Qasemi Academic College with a focus on high-performance front-end systems, clean software architectures, and hardware-software integration. Seeking internship and junior software developer opportunities.",
  projects: [
    {
      name: "C# Interactive Academy",
      description: "Interactive visual learning platform for mastering C# and .NET from first principles. Features real-time visualizers for generics, binary trees, stack/queue simulators, memory/GC engines, and a live workbench with a simulated terminal compiler.",
      tech: ["JavaScript", "HTML5", "CSS3", "SVG"],
      github: "https://github.com/AH-AbdAllah/C-",
      live: "https://csharp-five.vercel.app/"
    },
    {
      name: "DevToolBox",
      description: "Secure, offline-first developer command center. A suite of 19+ client-side tools including a JSON formatter/validator, JWT decoder, Base64 encoder, RSA/AES encryption sandbox, UUID generator, and AI-powered GitHub repo analyzer.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Web APIs", "Client-Side Cryptography"],
      github: "https://github.com/AH-AbdAllah/DevToolBox",
      live: "https://dev-tool-box-chi.vercel.app"
    },
    {
      name: "TaskFlow Enterprise API",
      description: "Enterprise-grade project and sprint task management system. Implements PostgreSQL-backed real-time audit logs, Kanban board routing, project analytics dashboards, team membership systems, and JWT-based authentication.",
      tech: ["C#", "ASP.NET Core", "PostgreSQL", "REST API", "Entity Framework Core", "JWT Auth"],
      github: "https://github.com/AH-AbdAllah/Task-Management-Enterprise-API",
      live: "https://task-management-api-xxiu.onrender.com"
    },
    {
      name: "Social Media API",
      description: "Production-ready social media REST API featuring JWT dual-token auth, personalized feeds, follow system, posts with image uploads (Cloudinary), nested comments, likes, saved posts, and user search. Dual-database architecture using PostgreSQL (Prisma ORM) for relational data and MongoDB (Mongoose) for activity logs.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "JWT Auth", "Cloudinary", "Zod"],
      github: "https://github.com/AH-AbdAllah/Social-Media-API",
      live: "https://social-media-api-t4ky.onrender.com"
    },
    {
      name: "ChronoDiff Git Explorer",
      description: "Lightweight git diff renderer and directory timeline comparator, built entirely with vanilla JavaScript for maximum speed. Provides high-performance parsing of git modifications and side-by-side directory diff comparisons.",
      tech: ["JavaScript", "HTML5", "CSS3", "Git API"],
      github: "https://github.com/AH-AbdAllah/ChronoDiff",
      live: null
    }
  ],
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Responsive Layouts"],
    backend: ["C#", "ASP.NET Core", "Node.js", "REST APIs", "SQL", "PostgreSQL", "Entity Framework Core"],
    tools: ["Git & GitHub", "Docker", "Assembly (x86)", "Embedded C / Arduino"]
  },
  timeline: [
    {
      year: "2024",
      title: "Began Computer Engineering",
      institution: "Al-Qasemi Academic College",
      description: "Focused on assembly programming, computer architectures, digital systems logic, and foundational programming algorithms."
    },
    {
      year: "2025",
      title: "Core Software & Frontend Development",
      institution: "Personal & Academic Projects",
      description: "Built responsive interactive browser tools, studied algorithms complexity, software testing, and object-oriented systems design."
    },
    {
      year: "2026",
      title: "Advanced Front-End & System Integrations",
      institution: "Current Focus",
      description: "Developing modern UX systems, high-efficiency client-side rendering frameworks, and interfacing web controllers with hardware APIs."
    }
  ]
};

// ----------------------------------------------------
// CLI Terminal State
// ----------------------------------------------------
const terminalState = {
  history: [],
  historyIndex: -1
};

let terminalOutput;
let terminalInput;

// ----------------------------------------------------
// Dynamic Page Renderers
// ----------------------------------------------------
function initDynamicContent() {
  // 1. Render Projects Grid
  const projectsGrid = document.getElementById("projectsGrid");
  if (projectsGrid) {
    projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map((p, i) => `
      <div class="project-card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="project-top">
          <h3>${p.name}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fa-brands fa-github"></i> Source Code
          </a>
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // 2. Render Skills Grid
  const skillsWrapper = document.getElementById("skillsWrapper");
  if (skillsWrapper) {
    skillsWrapper.innerHTML = `
      <div class="skills-category">
        <h3><i class="fa-solid fa-laptop-code"></i> Frontend</h3>
        <div class="skills-list">
          ${PORTFOLIO_DATA.skills.frontend.map(s => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>
      <div class="skills-category">
        <h3><i class="fa-solid fa-server"></i> Backend & Systems</h3>
        <div class="skills-list">
          ${PORTFOLIO_DATA.skills.backend.map(s => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>
      <div class="skills-category">
        <h3><i class="fa-solid fa-screwdriver-wrench"></i> Hardware & Tools</h3>
        <div class="skills-list">
          ${PORTFOLIO_DATA.skills.tools.map(s => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // 3. Render Timeline
  const timelineContainer = document.getElementById("timelineContainer");
  if (timelineContainer) {
    timelineContainer.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${item.year}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-institution">${item.institution}</div>
        <p class="timeline-description">${item.description}</p>
      </div>
    `).join('');
  }
}

// ----------------------------------------------------
// CLI Helper Printer (Type-Safe Factory)
// ----------------------------------------------------
function printLine(content, type = "default") {
  if (!terminalOutput) return;
  const line = document.createElement("div");
  line.className = `terminal-line line-${type}`;
  
  if (content instanceof HTMLElement) {
    line.appendChild(content);
  } else {
    line.innerHTML = content;
  }
  
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// ----------------------------------------------------
// Terminal Command Registry
// ----------------------------------------------------
const terminalCommands = {
  help: () => {
    printLine("Available commands:", "success");
    printLine("  about      - Developer summary and objective", "info");
    printLine("  projects   - Show highlights of featured applications", "info");
    printLine("  skills     - List technical skillset categories", "info");
    printLine("  contact    - Print direct ways to get in touch", "info");
    printLine("  clear      - Clear the console logs screen", "info");
  },
  about: () => {
    printLine(PORTFOLIO_DATA.about, "default");
  },
  projects: () => {
    PORTFOLIO_DATA.projects.forEach(p => {
      printLine(`• ${p.name} - ${p.description}`, "success");
      printLine(`  Tech: ${p.tech.join(', ')}`, "info");
    });
  },
  skills: () => {
    printLine("Frontend Tools:", "success");
    printLine(`  ${PORTFOLIO_DATA.skills.frontend.join(', ')}`, "default");
    printLine("Backend & Systems:", "success");
    printLine(`  ${PORTFOLIO_DATA.skills.backend.join(', ')}`, "default");
    printLine("Tools & Hardware Integrations:", "success");
    printLine(`  ${PORTFOLIO_DATA.skills.tools.join(', ')}`, "default");
  },
  contact: () => {
    printLine("Connect with Abdallah:", "success");
    printLine("  LinkedIn: https://www.linkedin.com/in/abd-allah-abo-helal-a6677434a/", "info");
    printLine("  GitHub:   https://github.com/AH-AbdAllah", "info");
    printLine("  Email:    abdabohelal@gmail.com", "info");
  },
  clear: () => {
    if (terminalOutput) {
      terminalOutput.innerHTML = "";
    }
  }
};

// ----------------------------------------------------
// Terminal Engine Pipeline
// ----------------------------------------------------
function executeCommand(inputString) {
  const trimmed = inputString.trim();
  
  // 1. Output the echo of prompt command
  const promptDiv = document.createElement("div");
  promptDiv.className = "terminal-line line-command";
  promptDiv.innerHTML = `<span class="prompt-user">visitor@abdallah:~$ </span><span class="prompt-cmd"></span>`;
  promptDiv.querySelector(".prompt-cmd").textContent = trimmed;
  printLine(promptDiv);

  if (!trimmed) {
    return;
  }

  // Add to command history
  if (terminalState.history.length === 0 || terminalState.history[terminalState.history.length - 1] !== trimmed) {
    terminalState.history.push(trimmed);
  }
  terminalState.historyIndex = -1;

  // Command Router
  const lower = trimmed.toLowerCase();
  if (terminalCommands.hasOwnProperty(lower)) {
    terminalCommands[lower]();
  } else {
    printLine(`Unknown command: '${trimmed}'. Type 'help' to see list of valid commands.`, "error");
  }
}

function focusTerminal() {
  if (terminalInput) {
    terminalInput.focus();
  }
}

// Terminal Initial Setup
function initTerminal() {
  terminalOutput = document.getElementById("terminalOutput");
  terminalInput = document.getElementById("terminalInput");

  if (!terminalInput || !terminalOutput) return;

  printLine("Welcome to Abdallah Abo Helal's interactive CLI console v1.0.0", "success");
  printLine("Type 'help' to view the list of available commands.", "info");
  printLine(" ", "default");
  
  // Focus listener and UI classes toggle
  const container = document.querySelector(".terminal-container");
  if (container) {
    terminalInput.addEventListener("focus", () => {
      container.style.borderColor = "var(--border-focus)";
    });
    terminalInput.addEventListener("blur", () => {
      container.style.borderColor = "var(--border)";
    });
  }

  // Terminal Keyboard Navigation Logic
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = terminalInput.value;
      executeCommand(value);
      terminalInput.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (terminalState.history.length > 0) {
        if (terminalState.historyIndex === -1) {
          terminalState.historyIndex = terminalState.history.length - 1;
        } else if (terminalState.historyIndex > 0) {
          terminalState.historyIndex--;
        }
        terminalInput.value = terminalState.history[terminalState.historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (terminalState.history.length > 0) {
        if (terminalState.historyIndex !== -1 && terminalState.historyIndex < terminalState.history.length - 1) {
          terminalState.historyIndex++;
          terminalInput.value = terminalState.history[terminalState.historyIndex];
        } else {
          terminalState.historyIndex = -1;
          terminalInput.value = "";
        }
      }
    }
  });
}

// ----------------------------------------------------
// UI - Simple Contact Form Client-Side Validation
// ----------------------------------------------------
async function handleContactSubmit(event) {
  event.preventDefault();
  
  const nameVal = document.getElementById("formName").value.trim();
  const emailVal = document.getElementById("formEmail").value.trim();
  const msgVal = document.getElementById("formMessage").value.trim();
  
  const nameFeedback = document.getElementById("nameFeedback");
  const emailFeedback = document.getElementById("emailFeedback");
  const messageFeedback = document.getElementById("messageFeedback");
  
  let isValid = true;
  
  // Validate Name
  if (!nameVal) {
    nameFeedback.style.display = "block";
    isValid = false;
  } else {
    nameFeedback.style.display = "none";
  }
  
  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal || !emailRegex.test(emailVal)) {
    emailFeedback.style.display = "block";
    isValid = false;
  } else {
    emailFeedback.style.display = "none";
  }
  
  // Validate Message
  if (!msgVal) {
    messageFeedback.style.display = "block";
    isValid = false;
  } else {
    messageFeedback.style.display = "none";
  }
  
  if (isValid) {
    const submitBtn = event.target.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    try {
      const response = await fetch("https://formspree.io/f/xrewzyzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameVal, email: emailVal, message: msgVal })
      });

      if (response.ok) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("formSuccess").style.display = "block";
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      alert("Network error. Please check your connection and try again.");
    }
  }
}

// ----------------------------------------------------
// Scroll Indicator Active Link Handler
// ----------------------------------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= (sectionTop - 120)) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// ----------------------------------------------------
// App Initialization
// ----------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initDynamicContent();
  initTerminal();
  initTypewriter();
  initScrollReveal();
  initBackToTop();
  initStatsCounter();
  initMobileMenu();
});

// ============================================
// Typewriter Effect
// ============================================
const TYPEWRITER_STRINGS = [
  "Computer Engineering Student",
  "Full-Stack Developer",
  "REST API Engineer",
  "Front-End Developer"
];

function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  let strIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = TYPEWRITER_STRINGS[strIndex];
    el.textContent = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);
    isDeleting ? charIndex-- : charIndex++;

    let speed = isDeleting ? 45 : 75;
    if (!isDeleting && charIndex === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      strIndex = (strIndex + 1) % TYPEWRITER_STRINGS.length;
      speed = 350;
    }
    setTimeout(type, speed);
  }
  type();
}

// ============================================
// Scroll Reveal (IntersectionObserver)
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ============================================
// Back to Top
// ============================================
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Stats Counter Animation
// ============================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const steps = Math.ceil(duration / 16);
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

function initStatsCounter() {
  const statsEl = document.querySelector(".hero-stats");
  if (!statsEl) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-num").forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statsEl);
}

// ============================================
// Copy Email to Clipboard
// ============================================
function copyEmail(event) {
  event.preventDefault();
  event.stopPropagation();
  const btn = document.getElementById("copyEmailBtn");
  if (!btn) return;
  navigator.clipboard.writeText("abdabohelal@gmail.com").then(() => {
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 2200);
  });
}

// ============================================
// Hamburger Mobile Menu
// ============================================
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  if (hamburger) { hamburger.classList.remove("open"); hamburger.setAttribute("aria-expanded", false); }
  if (mobileNav) mobileNav.classList.remove("open");
}
