gsap.utils.toArray(".anime-img").forEach((image, index) => {
  const initialY = gsap.utils.random(50, 200);
  const finalX = gsap.utils.random(-290, 290);
  const finalY = gsap.utils.random(-290, 290);
  const rotation = gsap.utils.random(-45, 45); 
  const duration = gsap.utils.random(0.8, 1.5);
  const delay = index * gsap.utils.random(0.1, 0.3);

  gsap.fromTo(
    image,
    {
      opacity: 0,
      y: initialY,
      rotation: gsap.utils.random(-50, 50),
    },
    {
      opacity: 1,
      y: 0,
      x: finalX,
      y: finalY,
      rotation: rotation, 
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
        onUpdate: () => {
          
          gsap.to(image, {
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50),
            rotation: gsap.utils.random(-5, 5),
            duration: 1,
            ease: "power2.out",
          });
        },
      },
      delay: delay,
    }
  );

  image.addEventListener("mouseenter", () => {
    gsap.to(image, {
      scale: 1.1,
      rotation: gsap.utils.random(-15, 15),
      duration: 0.3,
      ease: "power2.out",
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
