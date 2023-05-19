// Burger menu 
const button = document.getElementById("burger");
const div = document.querySelector(".openBurger");

button.addEventListener("click", function() {
  div.classList.toggle("openBurger");
  button.classList.toggle('open');
});