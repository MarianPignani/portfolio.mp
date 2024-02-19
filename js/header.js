const barra = document.querySelector(".barra");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".one");
const cerra = document.querySelector(".two");
const cerr = document.querySelector(".three");
const cer = document.querySelector(".four");
const ce = document.querySelector(".five");


abrir.addEventListener("click", () => {
    barra.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    barra.classList.remove("visible");
})

cerra.addEventListener("click", () => {
    barra.classList.remove("visible");
})

cerr.addEventListener("click", () => {
    barra.classList.remove("visible");
})

cer.addEventListener("click", () => {
    barra.classList.remove("visible");
})

ce.addEventListener("click", () => {
    barra.classList.remove("visible");
})