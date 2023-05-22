// Shows a message when the form is submitted
const contactForm = document.getElementById("contactForm");
const submitMessage = document.getElementById("submitMessage");

contactForm.addEventListener("submit", function() {
  submitMessage.textContent = "Thanks for getting in touch with us. We aim to respond to all queries within 24 hours.";
  });