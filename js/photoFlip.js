export function setupPhotoFlip() {
  const container = document.querySelector(".contenedor");
  if (!container) return;

  const front = container.querySelector(".delantera");
  const back = container.querySelector(".trasera");

  setInterval(() => {
    front.style.transform = "rotateY(180deg)";
    front.style.visibility = "hidden";
    back.style.transform = "rotateY(0deg)";
    back.style.visibility = "visible";

    setTimeout(() => {
      front.style.transform = "";
      front.style.visibility = "";
      back.style.transform = "";
      back.style.visibility = "";
    }, 1000);
  }, 8000);
}
