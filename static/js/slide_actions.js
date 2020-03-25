function nextSlide() {
  const activeFlag = "slide--active";
  const slideNum = "slide-num-";

  let slideView = document.getElementById("slide-view");
  let activeSlide = slideView.getElementsByClassName(activeFlag)[0];

  let activeSlideNum = Number(activeSlide.id.substring(10));
  let nextSlide = document.getElementById(`${slideNum}${activeSlideNum + 1}`);

  activeSlide.classList.toggle("slide--hide");

  // Start next animation
  setTimeout(() => {
    activeSlide.classList.toggle(activeFlag);
    nextSlide.classList.toggle(activeFlag);
    activeSlide.classList.toggle("slide--hide");
    nextSlide.classList.toggle("slide--show");
  }, 600);

  // Remove unnecessary classes
  setTimeout(() => {
    nextSlide.classList.toggle("slide--show");
  }, 700 * 2)
}
