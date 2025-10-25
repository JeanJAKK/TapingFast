let temps = 60
let zero = 0
const compteur = document.getElementById("time")
let secondeRestante = setInterval(() => {
    temps --;
    compteur.textContent = temps;
    if (temps < 0) {
        compteur.textContent = zero;
    }
}, 1000);

