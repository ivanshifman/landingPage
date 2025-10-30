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

  const savedDarkMode = localStorage.getItem("darkModeEnabled") === "true";

  if (savedDarkMode) {
    checkbox.checked = true;
    elements.forEach((el) => el.classList.add("dark-mode"));
  } else {
    checkbox.checked = false;
    elements.forEach((el) => el.classList.remove("dark-mode"));
  }

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    elements.forEach((el) => el.classList.toggle("dark-mode", isChecked));

    localStorage.setItem("darkModeEnabled", isChecked);
  });
}
