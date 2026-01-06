// Creating the hamburger menu
function myFunction() {
  var x = document.getElementById("menuLinks");
  document.getElementById("hamburgerMenu").innerHTML = "&#9747";
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x = "X";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    document.getElementById("hamburgerMenu").innerHTML = "&#9776";
  }
}


// Creating the quote slide show
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


document.addEventListener("DOMContentLoaded", function () {
	// Create the events slide show
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
	  let slidesEvent = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("dot");
	  if (n > slidesEvent.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slidesEvent.length}
	  for (i = 0; i < slidesEvent.length; i++) {
	    slidesEvent[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slidesEvent[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}
}


// Jobs dropdowns
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function jobTeamFilter() {  
  document.getElementById("jobTeamDropdown").classList.toggle("jobTeamShow");
}

function jobLocationFilter() {  
  document.getElementById("jobLocationDropdown").classList.toggle("jobLocationShow");
}
