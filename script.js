function flipCard(card) {
    card.classList.toggle("flip");

    // Verifica si todas las cartas están volteadas
    const allFlipped = document.querySelectorAll(".card.flip").length === document.querySelectorAll(".card").length;
    if (allFlipped) {
        setTimeout(() => {
            document.querySelector(".final-message").classList.add("show");
        }, 1000);
    }
}
