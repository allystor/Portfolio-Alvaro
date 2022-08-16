function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i);
    })
}

const texto = document.querySelector('.animation-text');
typeWriter(texto);

const menuMobile = document.querySelector(".list-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("nav-menu-active");
});

const navlist = document.querySelectorAll(".navbar-toggle-icon")
navlist.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("nav-menu-active")) {
      body.classList.remove("nav-menu-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});