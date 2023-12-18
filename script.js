
document.addEventListener("DOMContentLoaded", function () {
    
  // Select all elements with class "slide" inside the element with class "slideshow"
  const slides = document.querySelectorAll(".slideshow .slide");
  
  // Initialize the current slide index
  let currentSlide = 0;

  // Function to show a specific slide by changing its opacity
  function showSlide(index) {
      // Hide the current slide
      slides[currentSlide].style.opacity = 0;
      // Show the new slide
      slides[index].style.opacity = 1;
      // Update the current slide index
      currentSlide = index;
  }

  // Function to show the next slide in the sequence
  function nextSlide() {
      // Calculate the index of the next slide, looping back to the first slide if needed
      const nextIndex = (currentSlide + 1) % slides.length;
      // Call the function to show the next slide
      showSlide(nextIndex);
  }

  // Set an interval to automatically transition to the next slide every 2000 milliseconds (2 seconds)
  setInterval(nextSlide, 2000);

  // Show the initial slide when the page loads
  showSlide(currentSlide);
});





// Select the "Learn More" button
var learnMoreLink = document.querySelector(".btn");

// Select the additional information element by its ID
var additionalInfo = document.getElementById("additional-info");

// Set the initial font size for the additional info
additionalInfo.style.fontSize = "0.8rem";

// Add a click event listener to the "Learn More" button
learnMoreLink.addEventListener("click", function (event) {
    // Prevent the default behavior of the button (e.g., following a link)
    event.preventDefault();

    // Toggle the display of the additional info
    if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
        additionalInfo.style.display = "block"; // Show additional info
    } else {
        additionalInfo.style.display = "none"; // Hide additional info
    }
});



  
    // Show footer on scroll to the bottom
    function showFooter() {
      var footer = document.querySelector('footer');
      footer.style.opacity = 1;
    }
  
    window.addEventListener('scroll', function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showFooter();
      }
    });
  


  
  // Smooth scroll to section when a navigation link is clicked
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  
 // Subscription form handling
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the email input and subscribe button
  const emailInput = document.getElementById("email");
  const subscribeButton = document.getElementById("subscribe");

  // Add a click event listener to the subscribe button
  subscribeButton.addEventListener("click", function() {
    // Get the trimmed value of the email input
    const email = emailInput.value.trim();

    // Check if the email is not empty
    if (email !== "") {
      // Perform the subscription action, for example, show a success message.
      alert("Subscribed with email: " + email);
    } else {
      // Alert the user to enter a valid email address if it's empty
      alert("Please enter a valid email address.");
    }
  });
});
























// Function to compare predicted result with actual result
function comparePredictedResult(matchIndex) {
    const predictedScore = document.getElementById("predictedScore" + matchIndex).value;
    const actualScore = document.querySelectorAll(".football-table td:nth-child(6)")[matchIndex - 1].textContent;

    if (predictedScore === actualScore) {
        alert("Your prediction was correct!");
    } else {
        alert("Your prediction was incorrect. Try again!");
    }
}


// Function to automatically highlight the first team with Albanian flag colors (divided in half)
function autoHighlightFirstStandingTeam() {
    const standingsTable = document.querySelector(".Standings");
    const rows = standingsTable.querySelectorAll("tr");
    
    // Reset background colors and text colors for all rows
    rows.forEach((row) => {
        row.style.background = "";
        row.style.color = "";
    });

    // Define the Albanian flag colors
    const redColor = "red";
    const blackColor = "black";
    const whiteColor = "white";

    // Highlight the first team
    rows[1].style.background = `linear-gradient(to right, ${redColor} 50%, ${blackColor} 50%)`;

    rows[1].style.color = whiteColor;
}

// Automatically call the function when the page is loaded
window.onload = autoHighlightFirstStandingTeam;




// Function to sort the standings table by points
function sortStandingsByPoints(order) {
    const standingsTable = document.querySelector(".Standings");
    const rows = Array.from(standingsTable.querySelectorAll("tr")).slice(1);

    rows.sort((a, b) => {
        const pointsA = parseInt(a.querySelector("td:nth-child(6)").textContent);
        const pointsB = parseInt(b.querySelector("td:nth-child(6)").textContent);

        if (order === "asc") {
            return pointsA - pointsB;
        } else {
            return pointsB - pointsA;
        }
    });

    for (let i = 0; i < rows.length; i++) {
        standingsTable.appendChild(rows[i]);
    }
}





// Function to add a news article
function addNews(title, content, imageUrl, link) {
    // Create a new news article element
    var newsArticle = document.createElement("div");
    newsArticle.className = "news-article";

    // Create an image element for the news article
    var image = document.createElement("img");
    image.src = imageUrl;
    image.alt = title;

    // Create an h3 element for the title
    var newsTitle = document.createElement("h3");
    newsTitle.textContent = title;

    // Create a paragraph element for the content
    var newsContent = document.createElement("p");
    newsContent.textContent = content;

    // Create a "Read more" link
    var readMoreLink = document.createElement("a");
    readMoreLink.textContent = "Read more";
    readMoreLink.href = link;
    readMoreLink.target = "_blank"; // Open the link in a new tab

    // Append the elements to the news article
    newsArticle.appendChild(image);
    newsArticle.appendChild(newsTitle);
    newsArticle.appendChild(newsContent);
    newsArticle.appendChild(readMoreLink);

    // Append the news article to the news section
    var newsSection = document.querySelector(".news-section");
    newsSection.appendChild(newsArticle);
}

// Example usage:
addNews(
    'New Feature Released',
    'We have released an exciting new feature on our website.',
    'news1.jpg',
    '/news/new-feature'
);




window.addEventListener('scroll', function() {
  var recordsSection = document.querySelector('.Records');
  var offset = window.scrollY;

  var triggerOffset =1000 /* Cakto pozicionin e pragut për t'i shfaqur rekordet */;

  if (offset > triggerOffset) {
      recordsSection.style.display = 'block';
  }
});












