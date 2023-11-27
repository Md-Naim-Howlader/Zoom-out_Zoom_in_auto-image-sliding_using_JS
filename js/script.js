let images = document.querySelectorAll(".images img");

let count = 1;

setInterval(() => {
  count++;
  let currentSlide = document.querySelector(".slide");
  currentSlide.classList.remove("slide");
  if (count > images.length) {
    images[0].classList.add("slide");
    count = 1;
  }
  currentSlide.nextElementSibling.classList.add("slide");
}, 2000);
