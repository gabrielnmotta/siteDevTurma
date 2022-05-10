const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menuBars.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
