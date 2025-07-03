document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".navigation button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-section");

      // Remove active from all
      buttons.forEach(btn => btn.classList.remove("active"));
      sections.forEach(sec => sec.classList.remove("active"));

      // Add active to selected
      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});