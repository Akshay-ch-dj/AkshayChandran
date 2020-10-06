// Navbar Animation and side button animations.

// Select all nav-links
const navButtons = document.querySelectorAll('.nav-link');

// Select all side-buttons
const sideButtons = document.querySelectorAll('.dot-link')

// Click to add the highlight to nav-link
navButtons.forEach(item => item.addEventListener('click', e => addBottomBar(e.target.parentNode)));

function addBottomBar(navItem) {
    navButtons.forEach(item => {
        item.classList.remove('active');
    });

    navItem.classList.add('active');
}

// Click to add the highlight to side dot-link
sideButtons.forEach(item => item.addEventListener('click', e => addHighlight(e.target.parentNode)));

function addHighlight(buttonItem) {
    sideButtons.forEach(item => {
        item.classList.remove('dot-active');
    });

    buttonItem.classList.add('dot-active');
}


// Navbar transformation with intersection observer

// Select the home nav container
const navContainer = document.querySelector(".nav-home");

// The section ie needed to observe
const sectionHome = document.getElementById("welcome");

// when to trigger the entries options
const homeOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(function(entries, homeObserver) {
    entries.forEach(entry => {
        // if not on observing section
        if (!entry.isIntersecting) {
            // add global nav style
            navContainer.classList.add('nav-container');
        } else {
            // else add nav style for welcome section
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


// Dynamic navbar toggle with intersection observer

// Select all sections
const sectionAll = document.querySelectorAll('section');

// For adding dynamic position indicators
let addMarks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeItem = entry.target.id;

            const navItem = document.querySelector(`.${activeItem}-link`);
            const buttonItem = document.querySelector(`.${activeItem}-dot`);
            addBottomBar(navItem);
            addHighlight(buttonItem);
        }
    })
}

sectionOptions = {
    rootMargin: "-50px 0px 0px 0px",
    threshold: 0.5
};

const sectionObserver = new IntersectionObserver(addMarks, sectionOptions);

sectionAll.forEach(sec => sectionObserver.observe(sec));
