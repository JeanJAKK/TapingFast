const listePhrase = [
  "Bonjour !",
  "Ça va ?",
  "Je suis prêt.",
  "Allons-y !",
  "C’est parti !",
  "Pas de souci.",
  "À demain.",
  "Merci beaucoup.",
  "Bonne chance !",
  "Je t’écoute.",
  "C’est génial !",
  "Pas maintenant.",
  "Très bien.",
  "Je comprends.",
  "C’est fini.",
  "On y va ?",
  "Je suis là.",
  "Pas mal.",
  "D’accord.",
  "À plus tard."
]

const listeMot = [
  "chat", "chien", "maison", "voiture", "soleil", "lune", "arbre", "fleur", "eau", "feu",
  "air", "terre", "livre", "stylo", "table", "chaise", "porte", "fenêtre", "mur", "toit",
  "route", "chemin", "rue", "ville", "campagne", "montagne", "rivière", "lac", "océan", "plage",
  "neige", "pluie", "vent", "orage", "nuage", "ciel", "étoile", "temps", "jour", "nuit"
];

const saisiUser = document.querySelector("#userSaisi") //recupère le champs de saisi

const compteur = document.getElementById("time")     //recupère le span d' id time
let temps = 60               // contenu de l'elment d'id time

const proposition = document.getElementById("proposition")
let aSaisir = "taping fast"         //contenu de l'element d'id prposition

let secondeRestante = function(){setInterval(() => {
  if (temps > 0){
    temps --
    compteur.textContent = temps
    }else{
      compteur.textContent = 0
    }
}, 1000)} 

// demarrer le jeu après un click dans le champs de saisi

  saisiUser.addEventListener("click", function () {
    secondeRestante()
  })