// --------------------for background----------------------- //
var slideImg = document.getElementById("slideImg");
var images = new Array (
    "./space1.jpg", 
    "./space2.png",
    "./space3.png",
    "./space4.png",
    "./space5.png",
    "./space6.png",
    "./space7.png",
    "./space8.png"
);

var len = images.length;
var i = 0;

function slider() {
    if (i>len-1) {
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout ('slider()',5000);
}
// --------------------------------------------------- //

//--------*---------*----------*----------*---------*---------//
const slides = document.querySelectorAll(".slides img");
var details = document.getElementsByClassName("myDetails");

let slideIndex = 0;
let intervalid = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider)

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        details[slideIndex].style.display = "block";
    }
}

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    for (i = 0; i < slides.length; i++) {
        details[i].style.display = "none";  
    }
    slides[slideIndex].classList.add("displaySlide"); 
    details[slideIndex].style.display = "block";
}

function prevSlide() {
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
//--------*---------*----------*----------*---------*---------//
