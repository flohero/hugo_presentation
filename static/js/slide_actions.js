function nextSlide() {
  const activeFlag = "slide--active";
  const slideNum = "slide-num-";

  let slideView = document.getElementById("slide-view");
  let activeSlide = slideView.getElementsByClassName(activeFlag)[0];
  let activeSlideNum = Number(activeSlide.id.substring(10));
  let nextSlide = document.getElementById(`${slideNum}${activeSlideNum + 1}`);

  if (document.getElementById(`${slideNum}${activeSlideNum + 2}`)) {
    document.getElementById("forward-button")
  }

  activeSlide.classList.toggle("slide--hide");
  nextSlide.classList.toggle("slide--show");

  setTimeout(function () {
    activeSlide.classList.toggle(activeFlag);
    nextSlide.classList.toggle(activeFlag);
  }, 200);
}
