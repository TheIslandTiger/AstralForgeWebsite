document.addEventListener("DOMContentLoaded", () => {
// Hamburger menu
  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("hamburger-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("visible");
    if(hamburger.innerHTML == "☓"){
      hamburger.innerHTML = "&#9776";
    }else{
      hamburger.innerHTML = "&#9747";
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target == menu) {
      menu.classList.toggle("visible");
    }
  });
});