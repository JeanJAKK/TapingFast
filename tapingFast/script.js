const listePhrase = [
  "Bonjour !","Ça va ?","Je suis prêt.","Allons-y !","C’est parti !","Pas de souci.","À demain.","Merci beaucoup.",
  "Bonne chance !","Je t’écoute.","C’est génial !","Pas maintenant.","Très bien.","Je comprends.","C’est fini.",
  "On y va ?","Je suis là.","Pas mal.","D’accord.","À plus tard.","C’est bon.","Je reviens.","Pas encore.", "Formidable !",
  "Tu peux y aller.","Je suis prêt.","On commence.","C’est trop tard.","Tu es rapide !","Ne t’inquiète pas.",
  "Je suis content.", "On continue ?", "Tu as réussi.","C’est ton tour.","Je suis occupé.","On fait une pause.",
  "Tu veux jouer ?","C’est amusant.","Je suis fatigué.","Tu es doué.","On recommence.", "On y est.", "Naturellement !"
];

const listeMot = [
  "lampe", "rideau", "coussin", "miroir", "frigo", "four", "horloge", "tapis", "étagère", "placard", "courage",
  "forêt", "désert", "volcan", "cascade", "prairie", "glacier", "grotte", "falaise", "sable", "racine",
  "robot", "satellite", "laser", "circuit", "pixel", "clavier", "écran", "moteur", "algorithme", "réseau",
  "rouge", "bleu", "vert", "jaune", "violet", "doux", "froid", "chaud", "brillant", "sombre", "entropie", "gloire",
  "chat", "chien", "oiseau", "poisson", "cheval", "lion", "tigre", "singe", "éléphant", "renard", "miséricorde",
  "chat", "chien", "maison", "voiture", "soleil", "lune", "arbre", "fleur", "eau", "feu", "ambition", "victoire",
  "air", "terre", "livre", "stylo", "table", "chaise", "porte", "fenêtre", "mur", "toit", "fortune", "richesse",
  "route", "chemin", "rue", "ville", "campagne", "montagne", "rivière", "lac", "océan", "plage", "pouvoir", "amour",
  "neige", "pluie", "vent", "orage", "nuage", "ciel", "étoile", "temps", "jour", "nuit", "espoir", "processus", "syntropie"
];
const titre = document.querySelector("h1");
const paragraphe = document.querySelector(".body_p");
const btn = document.querySelector(".box");

window.addEventListener('load', () => {
    titre.classList.add("show_titre");
    paragraphe.classList.add("show_p");
    btn.classList.add("show_btn")
})
// Éléments DOM
const proposition = document.getElementById("proposition");
const saisiUser = document.getElementById("userSaisi");
const compteur = document.getElementById("time");
const InitialScore = document.getElementById("score");
const choixMot = document.querySelector('input[value="mot"]');
const choixPhrase = document.querySelector('input[value="phrase"]');
const radios = document.querySelectorAll('input[name="choix"]');
document.getElementById('playground').classList.add('fade-in');


let score = 0;
let temps = 60;
let timer;
let indexMot = 0;
let indexPhrase = 0;

// Décompte du temps
function secondeRestante() {
  clearInterval(timer); // évite les doublons
  score = 0;
  temps = 60;
  compteur.textContent = temps;
  InitialScore.textContent = 0;

  timer = setInterval(() => {
    if (temps > 0) {
      temps--;
      compteur.textContent = temps;
    } else {
      //clearInterval(temps);
      compteur.textContent = "0";
      document.getElementById('playground').title =  "";
      document.getElementById('playground').innerHTML =  `
          <div style="
            font-size: 2rem;
            color: #fff;
            text-align: center;
            background-color: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 0 15px linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            margin: 120px auto 50px auto;
            max-width: 400px;
            
          ">
             <br>
            ⏱️ Temps écoulé !<br>
            <span style="font-weight: bold; font-size: 2.5rem;">Score : ${score}</span>
            <br> <br>
            <a href="jouer.html">
            <input type="button" value="Recommencer" id="valider" title="Clicker pour recommencer">
            </a>
          </div>`
      saisiUser.disabled = true;
    }
  }, 1000);
}


// Proposer un mot
function saisiDemanderMot() {
  indexMot = Math.floor(Math.random() * listeMot.length);
  proposition.textContent = listeMot[indexMot];
}

// Proposer une phrase
function saisiDemanderPhrase() {
  indexPhrase = Math.floor(Math.random() * listePhrase.length);
  proposition.textContent = listePhrase[indexPhrase];
}

// Scheduler : écoute les changements de radio
function scheduler() {
  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (choixMot.checked) {
        saisiDemanderMot();
      } else if (choixPhrase.checked) {
        saisiDemanderPhrase();
      }
    });
  });
}

// Vérification de la saisie
saisiUser.addEventListener("input", function () {
  if (saisiUser.value.trim() === proposition.textContent.trim()) {
    if (choixMot.checked) {
       score++;
       InitialScore.textContent = score;
       saisiUser.value = ""
      saisiDemanderMot();
    } else if (choixPhrase.checked) {
        score+=3;
       InitialScore.textContent = score;
       saisiUser.value = ""
      saisiDemanderPhrase();
    }
  }
});

// Démarrage du jeu
saisiUser.addEventListener("click", function () {
  scheduler(); // à appeler une seule fois
  secondeRestante();
  if (choixMot.checked) {
    saisiDemanderMot();
  } else if (choixPhrase.checked) {
    saisiDemanderPhrase();
  }
});

// Recommencer
retry = document.getElementById("valider")
retry.addEventListener("click" , function() {
  location.reload()
});