let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// NAVBAR

const hamburger =  document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navBar = document.getElementById("main-nav")
const close = document.getElementById("close");

hamburger.addEventListener('click',()=>{
    navBar.style.height ="200px";
    navLinks.style.display ="none";
    hamburger.style.display =" none";
    close.style.display = "block";
})


close.addEventListener('click',()=>{
  navBar.style.height ="55px";
  navLinks.style.display ="none";
  hamburger.style.display =" flex";
  close.style.display = "none";
})