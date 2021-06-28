const healthbar = document.querySelectorAll(".vidas");

healthbar.forEach((vida) => {
  vida.textContent = "❤".repeat(vida.textContent);
});
