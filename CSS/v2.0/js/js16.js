const title = document.querySelector(".title");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    console.log(scrollY);

    if(scrollY > 300) {
        title.style.animation = "slide-out-title 2s ease-out";
    }
    else {
        title.style.animation = "slide-in-title 2s ease-out";
    }
});