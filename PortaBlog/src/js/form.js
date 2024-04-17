// Function to validate email format
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const errorMessages = [];

  // Validate the email field
  if (!emailInput.value || !validateEmail(emailInput.value)) {
    errorMessages.push("Please enter a valid email address.");
  }

  // Check if the message field is not empty
  if (!messageInput.value) {
    errorMessages.push("Please enter your message.");
  }

  // Display error messages or process the form
  if (errorMessages.length > 0) {
    alert("Error:\n" + errorMessages.join("\n"));
  } else {
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value);

    // Placeholder for AJAX call to submit the form data to a server
    alert("Thank you for your message!");

    // Optionally, clear the form fields after successful submission
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Attach event listeners to the form on DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});
