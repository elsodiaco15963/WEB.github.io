let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);

window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

function mostrarMision() {
    document.getElementById("mensajeMision").style.display = "block";
    document.getElementById("mensajeVision").style.display = "none";
    document.getElementById("botonMision").disabled = true;
    document.getElementById("botonVision").disabled = false;
}

function mostrarVision() {
    document.getElementById("mensajeMision").style.display = "none";
    document.getElementById("mensajeVision").style.display = "block";
    document.getElementById("botonMision").disabled = false;
    document.getElementById("botonVision").disabled = true;
}

mostrarMision();

document.getElementById("botonMision").addEventListener("click", mostrarMision);
document.getElementById("botonVision").addEventListener("click", mostrarVision);