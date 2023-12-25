var slideIndex = 0;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides() {
    var slides = document.querySelectorAll('.reviews-list-item');

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    slides[slideIndex].style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    showSlides();
   
    document.querySelector('.slider-controls button:first-child').addEventListener('click', function () {
      plusSlides(-1);
    });

    document.querySelector('.slider-controls button:last-child').addEventListener('click', function () {
      plusSlides(1);
    });
    
    setInterval(function () {
      plusSlides(1);
    }, 9000); 
  });