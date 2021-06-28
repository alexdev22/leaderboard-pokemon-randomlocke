const healthbar = document.querySelectorAll(".vidas");
const darkButton = document.querySelector(".dark-mode");
const body = document.querySelector("body");

healthbar.forEach((vida) => {
  vida.textContent = "❤".repeat(vida.textContent);
});

darkButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkButton.classList.toggle("dark-button");
});
