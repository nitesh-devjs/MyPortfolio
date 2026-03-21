$(document).ready(function () {

  // Scroll Event
  $(window).scroll(function () {

    // Sticky Navbar
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-Up Button Show/Hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

  });

  // Scroll-Up Button Click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Menu Item Click Smooth Scroll
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle Navbar Menu (Mobile)
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Animation 1
  var typed1 = new Typed(".typing", {
    strings: [
      "FrontEnd Developer",
      "Software Developer",
      "Python Developer",
      "Java Developer",
      "JavaScript Developer",
      "React JS"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Typing Animation 2
  var typed2 = new Typed(".typing-2", {
    strings: [
      "FrontEnd Developer",
      "Software Developer",
      "Python Developer",
      "Java Developer",
      "JavaScript Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      }
    }
  });

});