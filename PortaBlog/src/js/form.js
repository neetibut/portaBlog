// Validate email format
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate phone number format
function validatePhone(phone) {
  const re = /^\d{10}$/; // Simple regex for US phone numbers
  return re.test(phone);
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Stop the form from submitting normally

  // Get form elements
  const form = event.target;
  const email = form.querySelector("#email");
  const message = form.querySelector("#message");
  const name = form.querySelector("#name");
  const phone = form.querySelector("#phone");

  // Validate input fields and collect errors
  let errors = [];
  if (!name.value.trim()) errors.push("Name is required.");
  if (!email.value || !validateEmail(email.value))
    errors.push("Enter a valid email address.");
  if (phone.value && !validatePhone(phone.value))
    errors.push("Enter a valid phone number with 10 digits.");
  if (!message.value.trim()) errors.push("Message cannot be empty.");

  // Display errors or process the form
  if (errors.length) {
    alert("Please correct the following errors:\n" + errors.join("\n"));
  } else {
    console.log("Form Submitted", {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    });
    // Placeholder for AJAX request to server
    alert("Thank you for your message! We will get back to you soon.");

    // Clear the form fields after submission
    form.reset();
  }
}

// Attach the form submission handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleFormSubmit);
});
