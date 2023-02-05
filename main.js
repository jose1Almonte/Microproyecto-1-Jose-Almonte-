
// Procedemos a realizar el codigo de HERO (Carrusel, Slider)
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
// Insertamos la ultima imagen de primera
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveralaDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

function moveralaIzquierda(){
    // let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnRight.addEventListener('click', function(){
    moveralaDerecha();
});

btnLeft.addEventListener('click', function(){
    moveralaIzquierda();
});

setInterval(function(){
    moveralaDerecha();
}, 5000);