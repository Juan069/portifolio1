const menuMobile = document.querySelector("menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", moveMenuLateral);

function moveMenuLateral(){
  if (menuMobile.classList.contains("bi-list")){
    menuMobile.classList.raplace("bi-list", "bi-x");
  } else {
    menuMobile.classList.raplace("bi-x", "bi-list");
  }

  body.classList.toggle("menu-nav-active");
}