import { elementVisible } from "./utils.js";

export function checkVisibility() {
  checkVisibilityProjects();
  checkVisibilityEducation();
  checkVisibilityExperience();
}

export function checkVisibilityProjects() {
  document.querySelectorAll(".proyecto").forEach((el) => {
    if (elementVisible(el)) el.classList.add("aparecer");
  });
}

export function checkVisibilityEducation() {
  document.querySelectorAll(".educacion-item").forEach((el) => {
    if (elementVisible(el)) el.classList.add("aparecer");
  });
}

export function checkVisibilityExperience() {
  document.querySelectorAll(".experiencia-item").forEach((el) => {
    if (elementVisible(el)) el.classList.add("aparecer");
  });
}

export function checkPageEndVisibility() {
  const footer = document.getElementById("footer");
  const scrollPos = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollPos >= docHeight - 10) {
    footer.classList.add("slice-up");
    footer.classList.remove("hidden");
  }
}
