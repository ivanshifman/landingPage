let firstLoad = true;
window.language = "es";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

async function loadJSON(file) {
  const response = await fetch(`./data/${file}`);
  if (!response.ok) throw new Error(`Error al cargar ${file}`);
  return await response.json();
}

async function initContent(lang = "es") {
  try {
    const [traducciones, proyectos, educacion, experiencia] = await Promise.all(
      [
        loadJSON("translation.json"),
        loadJSON("projects.json"),
        loadJSON("education.json"),
        loadJSON("experiences.json"),
      ]
    );

    window.language = lang;
    window.translation = traducciones[lang];
    window.projectsJson = proyectos;
    window.educationData = educacion;
    window.experienceData = experiencia;
    insertProjects(proyectos[lang].proyecto);
    insertEducation(educacion[lang].educacion);
    insertExperience(experiencia[lang].experiencia);
  } catch (error) {
    console.error("Error cargando contenido:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await initContent("es");
  const toggleLanguage = document.querySelector("#toggle-checkbox");

  toggleLanguage.addEventListener("change", async () => {
    language = toggleLanguage.checked ? "en" : "es";
    await initContent(language);
    loadLanguage();
  });

  setupNavbarLinks();
  initializeDarkModeToggle();
  setupPhotoFlip();
  setupFilterButtons();
  checkVisibility();
  checkPageEndVisibility();
});

function setupNavbarLinks() {
  const links = document.querySelectorAll("nav a");
  const navbar = document.querySelector("nav");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      if (!targetId.startsWith("#")) return;

      event.preventDefault();
      const targetElement = document.getElementById(targetId.substring(1));
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight + 50;
        const offset = targetElement.offsetTop - navbarHeight;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });
}

async function filterProjects(category) {
  try {
    const projects = projectsJson[language].proyecto;

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

function insertProjects(projects) {
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
      }">
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

function insertEducation(education) {
  const timeline = document.getElementById("timeline-education");
  timeline.innerHTML = "";

  education.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("timeline-element");

    element.innerHTML = `
      <div class="timeline-content educacion-item">
        <div class="timeline-date">${item.fecha}</div>
        <h3 class="vertical-timeline-element-title">${item.titulo}</h3>
        <h4 class="vertical-timeline-element-subtitle">${item.subtitulo}</h4>
        ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
      </div>
    `;

    timeline.appendChild(element);
  });

  checkVisibilityEducation();
}

function insertExperience(experiences) {
  const timeline = document.getElementById("timeline-experience");
  timeline.innerHTML = "";

  experiences.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("timeline-element");

    element.innerHTML = `
      <div class="timeline-content experiencia-item">
        <div class="timeline-date">${item.fecha}</div>
        <h3 class="vertical-timeline-element-title">${item.titulo}</h3>
        <h4 class="vertical-timeline-element-subtitle">${item.subtitulo}</h4>
        ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
      </div>
    `;

    timeline.appendChild(element);
  });

  checkVisibilityExperience();
}

function setupFilterButtons() {
  const buttonsFilter = document.querySelectorAll(".boton-filtrar");
  buttonsFilter.forEach((button) => {
    button.addEventListener("click", function () {
      buttonsFilter.forEach((b) => b.classList.remove("activo"));
      button.classList.add("activo");
    });
  });
}

function elementoVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function checkVisibility() {
  checkVisibilityProjects();
  checkVisibilityEducation();
  checkVisibilityExperience();
}

function checkVisibilityProjects() {
  const projects = document.querySelectorAll(".proyecto");
  projects.forEach((project) => {
    if (elementoVisible(project)) {
      project.classList.add("aparecer");
    }
  });
}

function checkVisibilityEducation() {
  const education = document.querySelectorAll(".educacion-item");
  education.forEach((item) => {
    if (elementoVisible(item)) {
      item.classList.add("aparecer");
    }
  });
}

function checkVisibilityExperience() {
  const experiences = document.querySelectorAll(".experiencia-item");
  experiences.forEach((item) => {
    if (elementoVisible(item)) {
      item.classList.add("aparecer");
    }
  });
}

function checkPageEndVisibility() {
  const footer = document.getElementById("footer");
  const heightPage = document.documentElement.scrollHeight;
  const heightWindow = window.innerHeight;
  const displacement = window.scrollY;

  if (displacement + heightWindow >= heightPage - 10) {
    footer.classList.add("slice-up");
    footer.classList.remove("hidden");
  }
}

function initializeDarkModeToggle() {
  const checkbox = document.getElementById("checkbox");
  const toggleElements = [
    document.body,
    document.querySelector("header.slice-top"),
    document.querySelector("main"),
    document.getElementById("footer"),
    document.querySelector(".checkbox-label"),
    document.getElementById("contacto"),
  ];

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    toggleElements.forEach((element) => {
      element.classList.toggle("dark-mode", isChecked);
    });
  });
}

function setupPhotoFlip() {
  const container = document.querySelector(".contenedor");
  const lead = container.querySelector(".delantera");
  const rear = container.querySelector(".trasera");

  setInterval(() => {
    lead.style.transform = "rotateY(180deg)";
    lead.style.visibility = "hidden";
    rear.style.transform = "rotateY(0deg)";
    rear.style.visibility = "visible";
    setTimeout(() => {
      lead.style.transform = "";
      lead.style.visibility = "";
      rear.style.transform = "";
      rear.style.visibility = "";
    }, 1000);
  }, 8000);
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("scroll", checkPageEndVisibility);

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

function loadLanguage() {
  const data = window.translation;

  document.querySelector(".inicio").textContent = data.inicio;
  document.querySelector(".habilidades").textContent = data.habilidades;
  document.querySelector(".educacion").textContent = data.educacion;
  document.querySelector(".experiencia").textContent = data.experiencia;
  document.querySelector(".proyectos").textContent = data.proyectos;
  document.querySelector(".contacto").textContent = data.contacto;
  document.querySelector(".desarrollador").textContent = data.desarrolladorWeb;
  document.querySelector(".presentacion-texto").innerHTML = data.presentacion;
  document.querySelector(".toggle-view").textContent = data.toggleView;
  document.querySelector(".herramientas h3").textContent =
    data.herramientasTitulo;
  document.querySelector(".idiomas-titulo").textContent = data.idiomasTitulo;
  document.querySelector(".idiomas-espanol").innerHTML = data.idiomasEspanol;
  document.querySelector(".idiomas-ingles").innerHTML = data.idiomasIngles;
  document.querySelector("#educacion h3").textContent = data.educacionTitulo;
  document.querySelector("#experiencia h3").textContent =
    data.experienciaTitulo;
  document.querySelector("#proyectos h3").textContent = data.proyectosTitulo;
  document.querySelector(".boton-filtrar.todos").textContent = data.todos;
  document.querySelector(".proyectos-github").textContent =
    data.proyectosGithub;
  document.querySelector("#contacto h4").textContent = data.contactoTitulo;
  document.querySelector("label[for='name']").textContent = data.formLabelName;
  document.querySelector("label[for='email']").textContent =
    data.formLabelEmail;
  document.querySelector("label[for='message']").textContent =
    data.formLabelMessage;
  document.querySelector("button[type='submit']").textContent =
    data.contactoSubmit;
  document.querySelector(".contacto-info p").textContent = data.contactoDesc;
  document.querySelector(".contacto-redes").textContent = data.contactoRedes;
  document.querySelectorAll("#footer p")[1].textContent = data.footerRights;
}

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
