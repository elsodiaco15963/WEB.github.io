document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);

    // Cambiar automáticamente de imagen cada 3 segundos
    setInterval(nextSlide, 3000);
});
