const btn = document.querySelector(".read-more");
const para = document.querySelector(".text");
const arrowBtn = document.querySelector(".arrow");

// Add javascript mediaquery
const deviceWidth = window.matchMedia("(max-width: 600px)");

// event listener for button click
arrowBtn.addEventListener("click", (e) => {
    para.classList.toggle('see-more');
    arrowBtn.classList.toggle('arrow-up');
    if (para.classList.contains('see-more')){
        btn.innerHTML = "Read Less &#8593;";
    } else {
        btn.innerHTML = "Read More &#8595;"
    }
})

// Just adding an extra thing utilizing media queries with javascript, and
// adding realtime responsiveness with window resizing listener


window.addEventListener("resize", resizeAddBtn);

function resizeAddBtn () {
    // console.log(window.innerWidth);

    if (deviceWidth.matches) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
