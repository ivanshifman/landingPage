import { initContent } from "./dataLoader.js";
import { loadLanguage } from "./translation.js";
import { setupNavbarLinks, setupFilterButtons } from "./navigation.js";
import { initializeDarkModeToggle } from "./darkmode.js";
import { setupPhotoFlip } from "./photoFlip.js";
import { checkVisibility, checkPageEndVisibility } from "./visibility.js";
import { filterProjects } from "./projects.js";
import { updateYear } from "./year.js";

window.language = "es";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", async () => {
  await initContent("es");

  document
    .querySelector("#toggle-checkbox")
    .addEventListener("change", async (e) => {
      language = e.target.checked ? "en" : "es";
      await initContent(language);
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

    if (language === "es") {
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
