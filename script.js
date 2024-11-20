document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let slideIndex = 0;

    function showSlides() {
        slides.forEach(slide => (slide.style.display = "none")); // Ukryj wszystkie slajdy
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1; // Powrót do pierwszego slajdu
        slides[slideIndex - 1].style.display = "block"; // Pokaż aktualny slajd
        setTimeout(showSlides, 7000); // Zmień slajd co 3 sekundy
    }

    showSlides(); // Rozpocznij pokaz slajdów
});
