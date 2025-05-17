 
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

   

  function initMissionAnimations() {
    if (window.innerWidth > 1023) {
      const missionSection = document.querySelector('.hr-process');
      if (!missionSection) return;

      // Animate mobile-app-img1 - from left
      gsap.fromTo(
        ".mobile-app-img2",
        {
          x: "-50%",
          opacity: 0,
        },
        {
          x: "-17%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".hr-process",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 0.5,
          },
        }
      );

      // Animate mobile-app-img2 - from bottom
      gsap.fromTo(
        ".mobile-app-img1",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".hr-process",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 0.5,
          },
        }
      );

      // Animate mobile-app-img3 - from right
      gsap.fromTo(
        ".mobile-app-img3",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hr-process",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 0.5,
          },
        }
      );
    }
  }

  // Run both animations on load
  
  initMissionAnimations();

  // Re-initialize on resize (no kill to avoid overlap issues)
  window.addEventListener('resize', () => {
    
    initMissionAnimations();
  });
});

if ($('.text-anime-style-2').length) {
  let	 staggerAmount 		= 0.02,
   translateXValue	= 15,
   delayValue 		= 0.1,
   easeType 			= "power2.out",
   animatedTextElements = document.querySelectorAll('.text-anime-style-2');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%"},
    });
  });
  }


  if ($('.text-anime-style-3').length) {
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

  animatedTextElements.forEach((element) => {
  //Reset if needed
  if (element.animation) {
    element.animation.progress(1).kill();
    element.split.revert();
  }

  element.split = new SplitText(element, {
    type: "lines,words,chars",
    linesClass: "split-line",
  });
  gsap.set(element, { perspective: 400 });

  gsap.set(element.split.chars, {
    opacity: 0,
    x: "50",
  });

  element.animation = gsap.to(element.split.chars, {
    scrollTrigger: { trigger: element,	start: "top 90%" },
    x: "0",
    y: "0",
    rotateX: "0",
    opacity: 1,
    duration: 1,
    ease: Back.easeOut,
    stagger: 0.02,
  });
  });
  }

 