let slidePosition = 0;
let setaEsquerda = document.getElementById('gliderPrev')
let setaDireita = document.getElementById('gliderNext')
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
        return
    }

    if (slidePosition === totalSlides - 2) {
        setaDireita.classList.remove('opacidade')
    } else {
        setaEsquerda.classList.add('opacidade')
    }
    
    slidePosition++

    atualizarSlidePosition();
}

function retrocederSlide() {
    if (slidePosition === 0) {
        return
    }

    if (slidePosition === totalSlides - 3) {
        setaEsquerda.classList.remove('opacidade')
    } else {
        setaDireita.classList.add('opacidade')
    }
    
    slidePosition--

    atualizarSlidePosition();
}

