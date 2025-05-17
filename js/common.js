$(document).ready(function () {
  // Sticky Header		
  $(".top-menu").sticky({ topSpacing: 0 });

  //Mobile Menu Show and Hide
  $(".m-menu").click(function () {
    $(this).toggleClass('open');
    $(".mobile-menu").toggleClass('slow');
    $('body').toggleClass('over');
  });

  //Mobile Menu


  $(".mobile-menu ul li:has(ul) > a").click(function (e) {
    e.preventDefault();
    let $submenu = $(this).next("ul");
    let $parentLi = $(this).parent("li");

    if (!$parentLi.hasClass("active")) {
      $parentLi.siblings().removeClass("active").find("ul").slideUp();
      $parentLi.addClass("active");
      $submenu.slideDown();
    } else {
      $parentLi.removeClass("active");
      $submenu.slideUp();
    }
  });
  jsUpdateSize();

});

$(window).resize(function () {
  jsUpdateSize();

});

function jsUpdateSize() {
  var width = $(window).width();
  var height = $(window).height();
  if (width <= 1023) {
    $('.inner-banner, .inner-img-banner, .gol-img').each(function () {
      var img = $('img', this).attr('src');
      $(this).css('background-image', 'url(' + img + ')');
    });
  }
  else {
    $('.inner-banner, .inner-img-banner, .gol-img').each(function () {
      $(this).css('background-image', '');
    });
  }
}



// Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothWheel: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// GSAP animations
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.hero');

sections.forEach((section, index) => {
  const content = section.querySelector('.content');

  gsap.fromTo(content,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

//AOS
AOS.init();