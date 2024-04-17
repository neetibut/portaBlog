// Toggle navigation menu on mobile devices
function toggleNavigation() {
  const navigation = document.getElementById("primary-navigation");
  const expanded = navigation.style.display === "block";
  navigation.style.display = expanded ? "none" : "block";
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  toggleButton.setAttribute("aria-expanded", !expanded);
}

// Simple function to handle form submissions
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  if (!emailInput.value || !messageInput.value) {
    alert("Please fill out both the email and message fields.");
    return;
  }

  console.log("Email:", emailInput.value);
  console.log("Message:", messageInput.value);

  // Here, you could add an AJAX call to send the form data to a server
  alert("Thank you for your message!");

  // Clear the form fields after submission
  emailInput.value = "";
  messageInput.value = "";
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // Event listener for mobile navigation toggle
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleNavigation);
  }
});
