let temps = 60
let zero = 0

const titre = document.querySelector("h1");
const paragraphe = document.querySelector(".body_p")
const btn = document.querySelector(".box")

const compteur = document.getElementById("time")
let secondeRestante = setInterval(() => {
    temps --;
    compteur.textContent = temps;
    if (temps < 0) {
        compteur.textContent = zero;
    }
}, 1000);

// animation au chargement de la page
window.addEventListener('load', () => {
    titre.classList.add("show_titre");
    paragraphe.classList.add("show_p");
    btn.classList.add("show_btn")
})