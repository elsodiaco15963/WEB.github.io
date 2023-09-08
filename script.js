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