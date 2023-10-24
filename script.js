document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".banner .slideshow .slide");
  var currentImage = 0;

  function showImage(index) {
    images[currentImage].style.display = "none";
    images[index].style.display = "block";
    currentImage = index;
  }

  function nextImage() {
    var newIndex = (currentImage + 1) % images.length;
    showImage(newIndex);
  }

  setInterval(nextImage, 3000);
  showImage(currentImage);

  var learnMoreLink = document.querySelector(".btn");
  var additionalInfo = document.getElementById("additional-info");
  additionalInfo.style.fontSize = "0.8rem";

  learnMoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
      additionalInfo.style.display = "block";
    } else {
      additionalInfo.style.display = "none";
    }
  });
});

function showFooter() {
  var footer = document.querySelector('footer'); // Përmirësim: merr elementin e "footer" brenda funksionit
  footer.style.opacity = 1; /* Ndërrojme opacity në 1 për ta shfaqur */
}

// Regjistrojmë një ngjarje për scroll-down
window.addEventListener('scroll', function() {
  // Nëse jemi në fund të faqes
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    showFooter();
  }
});

