const formulaire = document.querySelector("#contactForm");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Merci ! Ton message a été envoyé.");

    formulaire.reset();
});
