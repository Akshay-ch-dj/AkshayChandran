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


// About page, about tabs toggle active
document.getElementById("defaultOpen").click();

function openSec(evt, sectionName) {
    // Get all elements with class="tab-content" and hide them
    const tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(tab => tab.style.display = "none");

    // Get all elements with class="tab-links" and remove the class "active"
    const tabLinks = document.querySelectorAll(".tab-links");
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sectionName).style.display = "block";
    evt.target.classList.add('active');
}