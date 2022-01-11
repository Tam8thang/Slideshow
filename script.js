function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if(n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block";
}

function boot(n) {
  document.getElementById('sumbnails').style.display = 'none';
  document.getElementById('views').style.display = 'block';
  currentSlide(n)
}

function backToTop() {
  document.getElementById('sumbnails').style.display = 'flex';
  document.getElementById('views').style.display = 'none';
}
