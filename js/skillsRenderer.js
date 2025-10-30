export async function renderSkillsIcons() {
  try {
    const response = await fetch("./data/skillsData.json");
    if (!response.ok) throw new Error(`Error al cargar ${file}`);
    const skillsData = await response.json();

    Object.entries(skillsData).forEach(([category, icons]) => {
      const container = document.querySelector(
        `.${category === "tools" ? "herramientas" : category} .iconos`
      );

      if (container) {
        container.innerHTML = "";

        icons.forEach(({ name, icon }) => {
          const div = document.createElement("div");
          div.className = "icon-container";
          div.innerHTML = `
            <img src="${icon}" alt="${name}" loading="lazy" />
            <span class="tooltip">${name}</span>
          `;
          container.appendChild(div);
        });
      }
    });
  } catch (error) {
    console.error("Error cargando las skills:", error);
  }
}
