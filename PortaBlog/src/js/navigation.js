// Toggle mobile navigation menu visibility
function toggleNavigation() {
  const navigation = document.getElementById("primary-navigation");
  const isVisible = navigation.style.display === "block";

  // Toggle visibility
  navigation.style.display = isVisible ? "none" : "block";

  // Toggle the aria-expanded attribute for accessibility
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  toggleButton.setAttribute("aria-expanded", !isVisible);
}

// This function could also handle other navigation-related interactions, like highlighting active menu items
function updateActiveNavItem() {
  const links = document.querySelectorAll(".navigation a");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    if (link.href.includes(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleNavigation);
  }

  // Call to update active navigation item on page load
  updateActiveNavItem();
});
