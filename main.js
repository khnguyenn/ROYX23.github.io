// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 5000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Enable manual navigation
  swiper2.on("slideChangeTransitionEnd", function () {
    swiper2.autoplay.start();
  });
  
  swiper2.on("mouseenter", function () {
    swiper2.autoplay.stop();
  });
  
  swiper2.on("mouseleave", function () {
    swiper2.autoplay.start();
  });

  
  // Navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",windowScrollY > 0);
  });
  
  
  // Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");
  
  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
  
    function hideIntroPage() {
      var introPage = document.querySelector('.intro-page');
      introPage.classList.add('hide');
    }

    
    document.addEventListener("DOMContentLoaded", function() {
      var introPage = document.querySelector('.intro-page');
      var splashScreen = document.querySelector('.splash-screen');
      var audioElement = document.getElementById('intro-audio');
  
      audioElement.addEventListener('canplaythrough', function() {
        // Commented out the autoplay for audioElement
        // audioElement.play();
      });
  
      setTimeout(function() {
        introPage.classList.add('hide');
        splashScreen.classList.add('hide');
        audioElement.play(); // Play the audio when hiding the intro page
      }, 4000);
  
      function hideIntroPage() {
        introPage.classList.add('hide');
        audioElement.play(); // Play the audio when hiding the intro page
      }
    });
 
    const cursor = document.querySelector(".cursor");
    var timeout;
  
    // Follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;
  
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";
  
      // Cursor effects when mouse stopped
      function mouseStopped() {
        cursor.style.display = "none";
      }
  
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });
  
    // Cursor effects when mouseout of the document
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  
    // Check if intro page and toggle cursor visibility
    if (document.body.classList.contains("intro-page")) {
      // Hide cursor only when mouse is inside the intro page content
      document.querySelector(".intro-page").addEventListener("mouseover", () => {
        cursor.style.display = "none";
      });
    } 
  
    // Function to update the header color when scrolling
  function updateHeaderColor() {
    const header = document.getElementById('header');
    const targetElement = document.querySelector('.img-tr');
    const scrollPosition = window.scrollY || window.pageYOffset;
    const targetElementOffset = targetElement.offsetTop;

    if (scrollPosition > 0 && scrollPosition < targetElementOffset) {
      header.classList.add('black-bg');
    } else {
      header.classList.remove('black-bg');
    }
  }

  // Event listener for scroll events
  window.addEventListener('scroll', updateHeaderColor);


// prevent f12 & inspect source
 $(document).keydown(function (event) {
                if (event.keyCode == 123) { // Prevent F12
                    return false;
                } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
                    return false;
                }
            });
            $(document).on("contextmenu", function (e) {
                e.preventDefault();
            });

// set debugger
            setInterval(function () {
                debugger;
            }, 50);
