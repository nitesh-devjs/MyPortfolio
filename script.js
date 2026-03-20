$(document).ready(function () {

  // =========================
  // Sticky Navbar + Scroll Button
  // =========================
  $(window).scroll(function () {

    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if ($(this).scrollTop() > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

  });

  // =========================
  // Scroll To Top
  // =========================
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // =========================
  // Smooth Scroll for Menu
  // =========================
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // =========================
  // Mobile Menu Toggle
  // =========================
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // =========================
  // Typed Animation
  // =========================
  var typed1 = new Typed(".typing", {
    strings: [
      "FrontEnd Developer",
      "Software Developer",
      "Python Developer",
      "Java Developer",
      "JavaScript Developer",
      "React JS Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

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

  // =========================
  // Owl Carousel
  // =========================
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
      },
      
    }
  });

});
