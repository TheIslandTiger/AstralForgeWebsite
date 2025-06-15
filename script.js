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

// Allowing the user to pause and play the home video.
var homeVideoStatusL = "play";
var homeVideoStatusS = "play";

// Large screens
function HomeVideoL() { 
  if(homeVideoStatusL == "play") {
    homeVideoStatusL = "pause";
    document.getElementById("HBWHomeVideoL").pause();
  }
    
  else if (homeVideoStatusL == "pause"){
    homeVideoStatusL = "play";
    document.getElementById("HBWHomeVideoL").play();
  }
} 
// Small screens
function HomeVideoS() { 
  if(homeVideoStatusS == "play") {
    homeVideoStatusS = "pause";
    document.getElementById("HBWHomeVideoS").pause();
  }
    
  else if (homeVideoStatusS == "pause"){
    homeVideoStatusS = "play";
    document.getElementById("HBWHomeVideoS").play();
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

// Jobs dropdowns
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function jobTeamFilter() {  
  document.getElementById("jobTeamDropdown").classList.toggle("jobTeamShow");
}

function jobLocationFilter() {  
  document.getElementById("jobLocationDropdown").classList.toggle("jobLocationShow");
}

// Forms 
function validateForm() {
  let formName = document.forms["myForm"]["fName"].value;
  let formEmail = document.forms["myForm"]["fEmail"].value;
  let formConEmail = document.forms["myForm"]["fConEmail"].value;
  let formSurname = document.forms["myForm"]["fSurname"].value;
  let formPhone = document.forms["myForm"]["fPhone"].value;
  let formResume = document.forms["myForm"]["fResume"].value;
  
  if (formName == "") {
    alert("First name must be filled out");
    return false;
  }  
  else if (formEmail == "") {
    alert("Email must be filled out");
    return false;
  }  
  else if (formConEmail == "" || formConEmail != formEmail) {
    alert("Confirm email must be filled out and match the original email");
    return false;
  }  
  else if(formSurname == "") {
    alert("Surname must be filled out");
    return false;
  } 
  else if (formPhone == "" || formPhone.length != 11) {
    alert("Phone number must be filled out with the format 0XXXXXXXXXX");
    return false;
  }
}
