const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const i5img = document.querySelector(".item5_img");
const i6img1 = document.querySelector(".item6_img1");
const i6img2 = document.querySelector(".item6_img2");
const i6txt1 = document.querySelector(".item6_text1");
const i6txt2 = document.querySelector(".item6_text2");
const i6btn = document.querySelector(".item6_btn");
const i3back = document.querySelector(".item3_back");
const i2img = document.querySelector(".item2_img");
const i2text = document.querySelector(".item2_text");

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log(scrollY);
  if (scrollY > 150) {
    i2img.style.animation = "slide-in-item2-img 2s ease-out";
    i2text.style.animation = "slide-in-item2-text 2s ease-out";
  }
  else {
    i2img.style.animation = "slide-out-item2-img 2s ease-out";
    i2text.style.animation = "slide-out-item2-text 2s ease-out";
  }

  if (scrollY > 650) {
    i3back.style.animation = "opacity-in 2s ease-in-out";
  }
  else {
    i3back.style.animation = "opacity-out 2s ease-in-out";
  }

  if (scrollY > 1150) {
    title.style.animation = "slide-in-title 2s ease-out";
    subtitle.style.animation = "slide-in-subtitle 2s ease-out 2ms";
  }
  else {
    title.style.animation = "slide-out-title 2s ease-in-out";
    subtitle.style.animation = "slide-out-subtitle 2s ease-in-out";
  }

  if (scrollY > 1900) {
    i5img.style.animation = "opacity-in 2s ease-in-out";
  }
  else {
    i5img.style.animation = "opacity-out 2s ease-in-out";
  }

  if (scrollY > 2250) {
    i6img1.style.animation = "opacity-in 2s ease-in-out";
    i6img2.style.animation = "opacity-in 2s ease-in-out";
    i6txt1.style.animation = "slide-in-item6-text1 2s ease-out";
    i6txt2.style.animation = "slide-in-item6-text2 2s ease-out 50ms";
    i6btn.style.animation = "slide-in-item6-btn 2s ease-out";
  } else {
    i6img1.style.animation = "opacity-out 2s ease-in-out";
    i6img2.style.animation = "opacity-out 2s ease-in-out";
    i6txt1.style.animation = "slide-out-item6-text1 2s ease-out";
    i6txt2.style.animation = "slide-out-item6-text2 2s ease-out";
    i6btn.style.animation = "slide-out-item6-btn 2s ease-out";
  }
})