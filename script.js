// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
let mobileMenu;

menuBtn.addEventListener('click', () => {
    if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        mobileMenu.innerHTML = `
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Insights</a>
            <a href="#contact">Contact</a>
        `;
        document.body.appendChild(mobileMenu);
    }
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});
