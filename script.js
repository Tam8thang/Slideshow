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

document.onkeydown = checkKey

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '37') {
     // left arrow
     plusSlides(-1);
  }
  else if (e.keyCode == '39') {
     // right arrow
     plusSlides(1);
  }
}
