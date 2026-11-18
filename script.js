// Get the navigation elements so the small-screen menu can open and close.
const menuButton = document.getElementById("menu-toggle");
const navigationLinks = document.getElementById("nav-links");

// Show or hide the navigation when the menu button is clicked.
menuButton.addEventListener("click", function () {
  const menuIsOpen = navigationLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.textContent = menuIsOpen ? "×" : "☰";
});

// Close the phone menu after a visitor chooses a section.
navigationLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigationLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Validate the visible demo form and show a simple success message.
const demoForm = document.getElementById("demo-form");
const formMessage = document.getElementById("form-message");

demoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!demoForm.checkValidity()) {
    demoForm.reportValidity();
    return;
  }

  formMessage.textContent = "Thanks! Your demo request is ready.";
  demoForm.reset();
});
