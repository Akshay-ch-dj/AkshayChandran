// Navbar Animation

const navButtons = document.querySelectorAll('.nav-link');

navButtons.forEach(item => item.addEventListener('click', addBottomBar))

function addBottomBar(e) {
    navButtons.forEach(item => {
        item.classList.remove('active');
    });

    e.target.parentNode.classList.add('active');
}

// Navbar transformation with intersection observer

const navContainer = document.querySelector(".nav-home");

const sectionHome = document.getElementById("welcome");

const homeOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(function(entries, homeObserver) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
            navContainer.classList.add('nav-container');
        } else {
            navContainer.classList.remove('nav-container');
        }
    });
}, homeOptions);

homeObserver.observe(sectionHome);