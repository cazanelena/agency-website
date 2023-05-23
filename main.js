// Burger menu
const button = document.getElementById("burger");
const div = document.querySelector(".openBurger");

button.addEventListener("click", function () {
  div.classList.toggle("openBurger");
  button.classList.toggle("open");
});

// Contact button
const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", function () {
  window.location.href = "form.html";
});

// Button to the top scroll
const buttonTop = document.querySelector(".btn-top");
const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      buttonTop.style.display = "block";
    } else {
      buttonTop.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  buttonTop.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

displayButton();
scrollToTop();
