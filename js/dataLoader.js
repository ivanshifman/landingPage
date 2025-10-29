import { insertProjects } from "./projects.js";
import { insertEducation } from "./education.js";
import { insertExperience } from "./experience.js";

export async function loadJSON(file) {
  const response = await fetch(`./data/${file}`);
  if (!response.ok) throw new Error(`Error al cargar ${file}`);
  return await response.json();
}

export async function initContent(lang = "es") {
  try {
    const [traducciones, proyectos, educacion, experiencia] = await Promise.all([
      loadJSON("translation.json"),
      loadJSON("projects.json"),
      loadJSON("education.json"),
      loadJSON("experiences.json"),
    ]);

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
