let temps = 60
const compteur = document.getElementById("time")
let secondeRestante = setInterval(() => {
    temps --
    compteur.textContent = temps
}, 1000);

