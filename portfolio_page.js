// Navbar Animation

const navButtons = document.querySelectorAll('.nav-link');

navButtons.forEach(item => item.addEventListener('click', addBottomBar))

function addBottomBar(e) {
    navButtons.forEach(item => {
        item.classList.remove('active');
    });

    e.target.parentNode.classList.add('active');
}