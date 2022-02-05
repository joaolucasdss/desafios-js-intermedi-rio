let slidePosition = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

document.getElementById('gliderNext').addEventListener('click', function() {
    avancarSlide();
});

document.getElementById('gliderPrev').addEventListener('click', function() {
    retrocederSlide();
});

function atualizarSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('slide-visivel');
        slide.classList.add('slide--hidden');
    }

    slides[slidePosition].classList.add('slide-visivel');
}

function avancarSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    atualizarSlidePosition();
}

function retrocederSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    atualizarSlidePosition();
}

