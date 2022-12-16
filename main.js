const left_btn = document.querySelector("#left");
const right_btn = document.querySelector("#right");
const slides = document.querySelectorAll(".slider-container section");

const length = slides.length;
let counter = 0

setSlides()

// Event Listeners

left_btn.addEventListener('click', ()=>{
    if (counter == 0){
        counter = length-1
    }
    else{
        counter--;
    }
    setSlides()
})

right_btn.addEventListener('click', ()=>{
    if (counter == length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    setSlides()
})

// Function Definitions

function setSlides(){
    slides.forEach((slide)=>{
        slide.classList.remove('show');
    });
    slides[counter].classList.add('show');
}
