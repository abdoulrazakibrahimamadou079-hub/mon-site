// 1. Gestion du formulaire de contact
const formulaire = document.querySelector("#contactForm");

if (formulaire) {
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Merci ! Ton message a été envoyé.");

        formulaire.reset();
    });
}

// 2. Gestion de l'affichage des cours
function afficherCours(idElement) {
    var cours = document.getElementById(idElement);
    if (cours) {
        // Si le cours est déjà affiché, on le cache, sinon on l'affiche
        if (cours.style.display === "block") {
            cours.style.display = "none";
        } else {
            cours.style.display = "block";
        }
    }
}

// 3. Fonction spécifique pour fermer le cours
function fermerCours(idElement) {
    var cours = document.getElementById(idElement);
    if (cours) {
        cours.style.display = "none";
    }
}
