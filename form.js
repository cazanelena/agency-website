// Shows a message when the form is submitted
const contactForm = document.getElementById("contactForm");
const submitMessage = document.getElementById("submitMessage");
const formTitle = document.getElementById("form-title");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();
    contactForm.style.display = 'none';
    formTitle.style.display = 'none';
    submitMessage.style.backgroundColor = 'rgb(202, 196, 196)'; 

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  // Create an object to store the form data
  const formData = {
    name: name,
    email: email,
    company: company,
    message: message
  };

  // Save the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Display the submit message
  submitMessage.textContent =
    "Thanks for getting in touch with us. We aim to respond to all queries within 24 hours.";

  // Reset the form
  contactForm.reset();
});