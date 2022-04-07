function dblclickForm(){
    window.open('form.html','_parent');
}

function greet(){
    alert("Welcome to PlasmaBank");
}

var slideIndex = 1;
var last = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    slides[last-1].style.display = "none";
    dots[last-1].className = dots[last-1].className.replace(" active", "");
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    last = slideIndex;  
}