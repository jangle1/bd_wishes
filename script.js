// Tworzenie animacji konfetti
document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector(".confetti");

    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
});
