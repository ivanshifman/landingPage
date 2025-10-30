import { initContent } from "./dataLoader.js";
import { loadLanguage, updateMetaTags } from "./translation.js";
import { setupNavbarLinks, setupFilterButtons } from "./navigation.js";
import { initializeDarkModeToggle } from "./darkmode.js";
import { setupPhotoFlip } from "./photoFlip.js";
import { checkVisibility, checkPageEndVisibility } from "./visibility.js";
import { filterProjects } from "./projects.js";
import { renderSkillsIcons } from "./skillsRenderer.js";
import { updateYear } from "./year.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", async () => {
  const languageToggle = document.querySelector("#toggle-checkbox");
  const savedLanguage = localStorage.getItem("preferredLanguage") || "es";
  window.language = savedLanguage;

  languageToggle.checked = savedLanguage === "en";

  await initContent(savedLanguage);
  await renderSkillsIcons();
  loadLanguage();
  updateMetaTags();

  languageToggle.addEventListener("change", async (e) => {
    const newLanguage = e.target.checked ? "en" : "es";
    window.language = newLanguage;

    localStorage.setItem("preferredLanguage", newLanguage);

    await initContent(newLanguage);
    loadLanguage();
  });

  setupNavbarLinks();
  setupFilterButtons();
  initializeDarkModeToggle();
  setupPhotoFlip();
  checkVisibility();
  checkPageEndVisibility();
  updateYear();

  document.querySelectorAll(".boton-filtrar").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category") || "";
      filterProjects(category);
    });
  });

  document.getElementById("toggleView").addEventListener("click", function () {
    const iconContainers = document.querySelectorAll(".icon-container");

    iconContainers.forEach((container) => {
      container.classList.toggle("list-view");
    });

    if (window.language === "es") {
      this.textContent = this.textContent.includes("Nombres")
        ? "Mostrar Iconos"
        : "Mostrar Nombres";
    } else {
      this.textContent = this.textContent.includes("Names")
        ? "Show Icons"
        : "Show Names";
    }
  });
});

window.addEventListener("scroll", checkVisibility);
window.addEventListener("scroll", checkPageEndVisibility);

