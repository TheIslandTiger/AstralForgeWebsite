document.addEventListener("DOMContentLoaded", () => {
  let slidesEvent = document.getElementById("mySlides");
  let dots = document.getElementById("dots");
  let events = document.getElementsByClassName("past-event");

  // Convert HTMLCollection → Array
  const arr = Array.from(events);

  const chunks = chunkArray(arr);
  for(i = 0; i < chunks.length; i++){
    dots.innerHTML += "<span class='dot'></span>\n  "
  }  

  document.getElementById("next").addEventListener("click", function() { 
    plusSlides(1); 
  }, false);

  document.getElementById("prev").addEventListener("click", function() { 
    plusSlides(-1); 
  }, false);

  for(let i = 0; i < dots.children.length; i++) {
    dots.children[i].addEventListener("click", function() {
      currentSlide(i);
    })
  };

  let slideIndex = 0;
  showSlides();

  function plusSlides(n) {
    slideIndex = (slideIndex + n) % chunks.length;
    showSlides();
  }

  function currentSlide(n) {
    slideIndex = n;
    showSlides();
  }

  function showSlides() {
    for (i = 0; i < slidesEvent.children.length; i++) {
      slidesEvent.children[i].style.display = "none";
	  }

    for (i = 0; i < dots.children.length; i++) {
      dots.children[i].className = dots.children[i].className.replace(" active", "");
    }

    for(i = 0; i< chunks[slideIndex].length; i++) {
      chunks[slideIndex][i].style.display = "block";
    }

    dots.children[slideIndex].className += " active";
  }

    function chunkArray(arr) {
    let result = [];
    const size = 4;
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }
});