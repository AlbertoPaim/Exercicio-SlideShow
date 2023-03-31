//SELETORES DO DOM 

let totalSliders = document.querySelectorAll(".item").length;

document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSliders})`;

document.querySelector(".slide--controls").style.height = 
`${document.querySelector(".slider").clientHeight}px`;


//VARIAVEIS DE AMBIENTE 

let currentSlide = 0;

function goPrev() {
    currentSlide--;
    if (currentSlide<0) {
        currentSlide = totalSliders -1
    }
    updateMargin()
}

function goNext() {
    currentSlide++
    if (currentSlide > (totalSliders -1)) {
        currentSlide = 0
    }
    updateMargin()
}

function updateMargin() {
let slideItemWidth = document.querySelector(".item").clientWidth
let newMargin = (currentSlide * slideItemWidth);
document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`
    
}

setInterval(goNext, 10000)