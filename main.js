// Burger menu
const button = document.getElementById("burger");
const div = document.querySelector(".openBurger");

button.addEventListener("click", function () {
  div.classList.toggle("openBurger");
  button.classList.toggle("open");
});

function menuOnClick() {
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

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


// Typing effect for the main title
const textTitle = document.getElementById('title-text');
const agencyName = 'Agency Name';

let index = 0;

function type() {
  textTitle.textContent += agencyName.charAt(index);
  index++;
  setTimeout(type, 250);
  
}

type()