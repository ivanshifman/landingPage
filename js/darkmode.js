export function initializeDarkModeToggle() {
  const checkbox = document.getElementById("checkbox");
  const elements = [
    document.body,
    document.querySelector("header.slice-top"),
    document.querySelector("main"),
    document.getElementById("footer"),
    document.querySelector(".checkbox-label"),
    document.getElementById("contacto"),
  ];

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    elements.forEach((el) => el.classList.toggle("dark-mode", isChecked));
  });
}
