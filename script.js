// =============================
// script.js - Logika untuk Website Guru KKA
// =============================

const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const THEME_KEY = "kka-theme";

function setTheme(mode) {
  if (mode === "light") root.classList.add("light");
  else root.classList.remove("light");
  localStorage.setItem(THEME_KEY, mode);
}

(function () {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) setTheme(saved);
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();

if (toggle) {
  toggle.addEventListener("click", () => {
    const next = root.classList.contains("light") ? "dark" : "light";
    setTheme(next);
  });
}

const nameEl = document.getElementById("teacherName");
const nameNav = document.getElementById("teacherNameNav");
const nameFooter = document.getElementById("teacherNameFooter");
const initialsEl = document.getElementById("initials");
const yearEl = document.getElementById("year");

function updateName(name) {
  nameEl.textContent = name;
  nameNav.textContent = name;
  nameFooter.textContent = name;
  const parts = name.split(/\s+/).filter(Boolean);
  const ini = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  if (initialsEl) initialsEl.textContent = ini || "NA";
  document.title = `${name} · Guru KKA`;
}

updateName("[Nama Anda]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
