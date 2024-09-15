document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const toggleButton = document.querySelector('.navbar-toggle');
    const page = document.querySelector('.page');

    if (navbar && toggleButton && page) {

        toggleButton.textContent = '⯇';

        toggleButton.addEventListener('click', function () {
            navbar.classList.toggle('closed');

            if (navbar.classList.contains('closed')) {
                toggleButton.textContent = '⯈';
                toggleButton.style.left = '0';
                page.style.marginLeft = '0';
                navbar.style.left = '-150px';
            } else {
                toggleButton.textContent = '⯇';
                toggleButton.style.left = '150px';
                page.style.marginLeft = '150px';
                navbar.style.left = '0px';
            }
        });
    } else {
        console.error('Navbar, toggle button, or page element not found.'); // this is just troubleshooting
    }
});
