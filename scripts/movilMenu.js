let bars = document.getElementsByClassName("fa-solid fa-bars fa-3x")[0];
let menuHamburgesa = document.getElementById("desplegable-hamburguesa");

let menuDisplayed = false;

bars.addEventListener("click", () => {
  if (menuDisplayed) {
    menuDisplayed = !menuDisplayed;
    menuHamburgesa.style.display = "none";
  } else {
    menuDisplayed = !menuDisplayed;
    menuHamburgesa.style.display = "block";
  }
});
