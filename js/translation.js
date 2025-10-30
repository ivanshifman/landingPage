export function loadLanguage() {
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

export function updateMetaTags() {
  const data = window.translation;

  let metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) {
    metaDescription.setAttribute("content", data.metaDescription || data.presentacion.replace(/<[^>]+>/g, ""));
  }

  let ogDescription = document.querySelector("meta[property='og:description']");
  if (ogDescription) {
    ogDescription.setAttribute("content", data.metaDescription || data.presentacion.replace(/<[^>]+>/g, ""));
  }

  let ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) {
    ogTitle.setAttribute("content", `${data.metaOgTitle} | Iván Shifman`);
  }

  let metaKeywords = document.querySelector("meta[name='keywords']");
  if (metaKeywords) {
    metaKeywords.setAttribute("content", data.metaKeywords || "");
  }

  document.title = `${data.pageTitle}`;
}
