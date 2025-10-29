export function setupNavbarLinks() {
  const links = document.querySelectorAll("nav a");
  const navbar = document.querySelector("nav");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId.startsWith("#")) return;
      e.preventDefault();

      const targetElement = document.getElementById(targetId.substring(1));
      if (targetElement) {
        const offset = targetElement.offsetTop - (navbar.offsetHeight + 50);
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });
}

export function setupFilterButtons() {
  const buttons = document.querySelectorAll(".boton-filtrar");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("activo"));
      button.classList.add("activo");
    });
  });
}
