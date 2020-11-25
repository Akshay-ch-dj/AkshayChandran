// Media query
const mql = window.matchMedia('(min-width: 768px)');

// ******************  Navbar JS *************************

// The hamburger button animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
// Select all nav-links
const navButtons = document.querySelectorAll('.nav-link');
// Select the home nav container
const navContainer = document.querySelector('.nav-home');
// The section ie needed to observe
const sectionHome = document.getElementById('welcome');

// Select all side-buttons
const sideButtons = document.querySelectorAll('.dot-link');

// To add fade in animation to nav links
const toggleMenu = () => {
  navLinks.classList.toggle('open');
  navButtons.forEach((link) => {
    link.classList.toggle('fade');
  });
};

hamburger.addEventListener('click', toggleMenu);

// To add bottom bar to nav-item
function addBottomBar(navItem) {
  navButtons.forEach((item) => {
    item.classList.remove('active');
  });

  navItem.classList.add('active');
}

// Click to add the bottom bar highlight to nav-link
navButtons.forEach((item) => item.addEventListener('click', (e) => {
  addBottomBar(e.target.parentNode);

  // close the list if it is open
  if (navLinks.classList.contains('open')) {
    toggleMenu();
  }
}));

// For side-dots
function addHighlight(buttonItem) {
  sideButtons.forEach((item) => {
    item.classList.remove('dot-active');
  });

  buttonItem.classList.add('dot-active');
}

// Click to add the highlight to side dot-link
sideButtons.forEach((item) => item.addEventListener('click', (e) => addHighlight(e.target.parentNode)));

// Navbar transformation with intersection observer

// when to trigger the entries options
const homeOptions = {
  rootMargin: '-200px 0px 0px 0px',
};

const homeObserver = new IntersectionObserver(((entries, homeObserver) => {
  entries.forEach((entry) => {
    // if not on observing section
    if (!entry.isIntersecting) {
      // add global nav style
      navContainer.classList.add('nav-container');
    } else {
      // else add nav style for welcome section
      navContainer.classList.remove('nav-container');
    }
  });
}), homeOptions);

// window.addEventListener("resize", forMobile);

homeObserver.observe(sectionHome);

// Back to top button in about section only

// Select all sections
const sectionAll = document.querySelectorAll('section');

// For adding dynamic position indicators
const addMarks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeItem = entry.target.id;

      const navItem = document.querySelector(`.${activeItem}-link`);
      const buttonItem = document.querySelector(`.${activeItem}-dot`);
      addBottomBar(navItem);
      addHighlight(buttonItem);

      const backButton = document.querySelector('.btn-top');
      if (activeItem === 'about') {
        backButton.style.display = 'flex';
      } else {
        backButton.style.display = 'none';
      }
    }
  });
};

const sectionOptions = {
  rootMargin: '-50px 0px 0px 0px',
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver(addMarks, sectionOptions);

sectionAll.forEach((sec) => sectionObserver.observe(sec));

// More items arrow
const secRow = document.querySelector('.row-2');
const arrowBtn = document.querySelector('.arrow');

arrowBtn.addEventListener('click', (e) => {
  arrowBtn.classList.toggle('arrow-up');
  if (secRow.classList.contains('content-show')) {
    secRow.classList.remove('content-show');
  } else {
    secRow.classList.add('content-show');
  }
});

// function forMobile() {
//     // Navbar change for only screens greater than 768px.
//     // console.log(window.innerWidth);
//     if (mql.matches) {
//         homeObserver.observe(sectionHome);
//     } else {
//         // Functions only for screens < 768px
//         homeObserver.unobserve(sectionHome);
//     }
// }

// About page, about tabs toggle active
document.getElementById('defaultOpen').click();

function openSec(evt, sectionName) {
  // Get all elements with class="tab-content" and hide them
  const tabContent = document.querySelectorAll('.tab-main');
  tabContent.forEach((tab) => { tab.style.display = 'none'; });

  // Get all elements with class="tab-links" and remove the class "active"
  const tabLinks = document.querySelectorAll('.tab-links');
  tabLinks.forEach((link) => link.classList.remove('active'));

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionName).style.display = 'block';
  evt.target.classList.add('active');
}
