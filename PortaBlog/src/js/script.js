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
  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");

  // Validate the input fields
  if (!emailInput.value || !validateEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!messageInput.value) {
    alert("Please enter your message.");
    return;
  }

  if (!nameInput.value) {
    alert("Please enter your name.");
    return;
  }

  if (phoneInput && !validatePhone(phoneInput.value)) {
    alert("Please enter a valid phone number.");
    return;
  }

  console.log("Name:", nameInput.value);
  console.log("Email:", emailInput.value);
  console.log("Phone:", phoneInput.value);
  console.log("Message:", messageInput.value);

  // Here you could add AJAX code to actually send the data to a server
  alert("Thank you for your message!");

  // Clear the form fields after successful submission
  emailInput.value = "";
  messageInput.value = "";
  nameInput.value = "";
  if (phoneInput) phoneInput.value = "";
}

// Email validation function
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Phone validation function (simple pattern for demonstration)
function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // Event listener for mobile navigation toggle
  const toggleButton = document.querySelector(".mobile-nav-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleNavigation);
  }
});
