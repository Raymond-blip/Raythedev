(function ($) {
    "use strict";

    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
        }
    });

    
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

   // JavaScript function for form validation
   function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const emailInput = document.getElementById('email');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    // Clear previous feedback
    feedbackMessage.textContent = '';
    feedbackMessage.className = '';

    // Validate the email input
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      feedbackMessage.textContent = 'Please enter a valid email address.';
      feedbackMessage.className = 'text-danger';
      return false; // Don't submit the form if validation fails
    }
    
    // If email is valid, show success message and clear the form
    feedbackMessage.textContent = 'Thank you for subscribing! You will receive updates soon.';
    feedbackMessage.className = 'text-success';

    // Reset the form
    emailInput.value = '';
    return true; // Form submission is allowed
  }


//   SERVICES JAVASCRIPT


document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    // Add hover effect
    serviceItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease-in-out";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });

        // Add click functionality to toggle details
        item.addEventListener("click", () => {
            const isExpanded = item.classList.contains("expanded");
            // Collapse all
            serviceItems.forEach((i) => i.classList.remove("expanded"));
            // Expand the clicked one if not already expanded
            if (!isExpanded) {
                item.classList.add("expanded");
            }
        });
    });

    // Responsive adjustments
    const adjustLayout = () => {
        const isMobile = window.innerWidth < 768;
        serviceItems.forEach((item) => {
            if (isMobile) {
                item.style.marginBottom = "20px";
            } else {
                item.style.marginBottom = "10px";
            }
        });
    };

    // Run adjustments on load and resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation flags
    let isValid = true;

    // Reset error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("subjectError").style.display = "none";
    document.getElementById("messageError").style.display = "none";

    // Validate fields
    if (!name) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (!subject) {
        document.getElementById("subjectError").style.display = "block";
        isValid = false;
    }

    if (!message) {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Display success message
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
        // Reset the form
        document.getElementById("contactForm").reset();
    } else {
        // Display error message
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";
    }
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

// Toggle between light and dark modes
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Change icon depending on the mode
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  }
});
