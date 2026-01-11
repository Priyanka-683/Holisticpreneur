document.addEventListener('DOMContentLoaded', () => {
    
    // Parallax Effect on Mouse Move for the Image
    const frame = document.querySelector('.image-parallax-frame');
    const img = document.querySelector('.parallax-img');
    const cards = document.querySelectorAll('.floating-stat-card');

    window.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 30;
        let y = (window.innerHeight / 2 - e.pageY) / 30;
        
        img.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        
        cards.forEach(card => {
            card.style.transform = `translateX(${x * 1.5}px) translateY(${y * 1.5}px)`;
        });
    });

    // Intersection Observer for Bento Box Entry
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.bento-box').forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(40px)';
        box.style.transition = '1s ease-out';
        observer.observe(box);
    });
});
