import { checkVisibilityEducation } from "./visibility.js";

export function insertEducation(education) {
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
