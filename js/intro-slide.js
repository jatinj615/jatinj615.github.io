function startSlides() {
    const textSlides = 3,
      slider = document.getElementById("text-slider"),
      introHead = document.getElementById("intro-head");

    const slides = slider.children;

    let currentSlide = 1;
    introHead.style.display = "none";
    slider.style.display = "block";

    setInterval(() => {
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      slides[currentSlide].style.display = "block";
      currentSlide = (currentSlide + 1) % 3;
    }, 3000);
}

window.addEventListener("load", () => {
  setTimeout(startSlides, 1000);
});
