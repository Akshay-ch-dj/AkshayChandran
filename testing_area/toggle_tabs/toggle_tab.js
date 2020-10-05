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