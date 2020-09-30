// Navbar Change Background

// Select the whole navbar container, which the class is changed.
const header = document.querySelector("header");

// The section at which the transition is needed to be happen (or the section that needs the
// transparent background, when this one leaves the viewport background changes)
const sectionOne = document.querySelector(".home-intro");

// The options for the intersection {root: (null to watch viewport intersection),rootMargin: '0px'
// (set the margin for the intersection, use CSS margin props top, bottom...in px or in %),
// threshold: (from 0 - 1) 1 means 100% of the target is visible within the element specified by the
// root option, then only callback invoked}
const homeOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

// Create a new intersection Observer(accepts a function, options object)
// function gets arguments of entries and the observer itself
const homeObserver = new IntersectionObserver(function(entries, homeObserver) {
    entries.forEach(entry => {
        // console.log(entry.target);

        // When the homepage leaves the screen, nav class to get added.
        // The class addition happens only if the entry is not intersecting(viewport not on home,
        // so that when it scroll backs or loads, can go to the initial)
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
        // Fine tune the transition using the options threshold and margin.
        // Here the margin extended backwards( using "-200px"), so callback happens
        // before the actual intersection smoothly.
    });
}, homeOptions);

// Listen to intersections
homeObserver.observe(sectionOne);