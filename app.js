// JAVASCRIPT IMAGE SLIDER PROJECT
let slideIndex = 1;

const showSlides = (n) => {
  const slides = document.getElementsByClassName("slide"); //GRAB ALL SLIDES
  const dots = document.getElementsByClassName('dot');     //GRAB ALL DOTS

  if (n > slides.length) { // CHECK SLIDER INDEX => FORWARDS
    slideIndex = 1;
  }

  if (n < 1) {             // CHECK SLIDER INDEX => BACKWARDS 
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) { // HIDE ALL SLIDES
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) { // REMOVE .active CLASS FROM ALL DOTS
    if (dots[i].classList.contains('active')) {
      dots[i].classList.remove('active');
    }
  }


  slides[slideIndex - 1].style.display = "block"; // SHOW CORRESPONDING SLIDE
  dots[slideIndex - 1].classList.add('active');   // ADD .active CLASS 
                                                  // TO CORRESPONDING DOT

};

const plusSlide = (n) => {
  showSlides(slideIndex = slideIndex + n); // SWITCHING TO NEXT SLIDE => ARROWS
}

const currentSlide = (n) => {              // SWITCHING TO NEXT SLIDE => DOTS
  showSlides(slideIndex = n);
}

showSlides(slideIndex); // CALL showSlides FUNCTION WITH CORRESPONDING 
                        // INPUT VALUE => slideIndex