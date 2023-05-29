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
const agencyName = 'Code Crafters';

let index = 0;

function type() {
  textTitle.textContent += agencyName.charAt(index);
  index++;
  setTimeout(type, 250);
  
}

type()

// Flipping the about us cards 
function flipCard(button) {
  let aboutBox = button.parentNode;
  aboutBox.classList.toggle("box-flipped");
    
  let front = aboutBox.querySelector(".box-front");
  let back = aboutBox.querySelector(".box-back");
  
  if (aboutBox.classList.contains("box-flipped")) {
    front.style.display = "none";
    back.style.display = "block";
  } else {
    front.style.display = "block";
    back.style.display = "none";
  }
}

let elenaButton = document.getElementById('elenaButton');
let laurieButton = document.getElementById('laurieButton');

elenaButton.addEventListener('click', function () {
  elenaButton.classList.toggle("box-flipped");
  if (elenaButton.innerHTML == "Flip back") {
    elenaButton.innerHTML = "More info";
  } else {elenaButton.innerHTML = "Flip back"};
});

laurieButton.addEventListener('click', function () {
  laurieButton.classList.toggle("box-flipped");
  if (laurieButton.innerHTML == "Flip back") {
    laurieButton.innerHTML = "More info";
  } else {laurieButton.innerHTML = "Flip back"};
});