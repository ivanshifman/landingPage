import { checkVisibilityExperience } from "./visibility.js";

export function insertExperience(experiences) {
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
