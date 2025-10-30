import { checkVisibilityProjects } from "./visibility.js";

let firstLoad = true;

export function filterProjects(category) {
  try {
    const projects = window.projectsJson[window.language].proyecto;

    if (!category || category === "") {
      insertProjects(projects);
      return;
    }

    const filteredProjects = projects.filter((project) => {
      return project.categoria.includes(category);
    });

    insertProjects(filteredProjects);
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
  }
}

export function insertProjects(projects) {
  const container = document.getElementById("proyecto");
  container.innerHTML = "";

  const projectsHTML = projects
    .map((project, index) => {
      const efectoClase = firstLoad
        ? index % 2 === 0
          ? "desde-la-izquierda"
          : "desde-la-derecha"
        : "";

      return `
        <div class="proyecto ${efectoClase}">
          <img src="${project.imagen}" alt="Imagen del proyecto ${
        project.nombre
      }" loading="lazy">
          <div class="proyecto-detalles">
            <h4>${project.nombre}</h4>
            <p>${project.descripcion}</p>
            <div class="botones">
              ${
                project.github
                  ? `<a href="${project.github}" target="_blank">${
                      project.verCodigo || "Ver Código"
                    }</a>`
                  : ""
              }
              ${
                project.githubBack
                  ? `<a href="${project.githubBack}" target="_blank">${
                      project.verCodigoBack || "Ver Código Backend"
                    }</a>`
                  : ""
              }
              ${
                project.demo
                  ? `<a href="${project.demo}" target="_blank">${
                      project.verDemo || "Ver Demo"
                    }</a>`
                  : ""
              }
            </div>
          </div>
          <div class="linea-separadora"></div>
          <div class="tecnologias">
            ${
              project.tec
                ?.map((tec) => `<span class="tec">${tec}</span>`)
                .join("") || ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = projectsHTML;

  firstLoad = false;

  checkVisibilityProjects();
}