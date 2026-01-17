document.addEventListener('DOMContentLoaded', () => {
    // Basic Intersection Observer for fade-in effect
    // Jab koi section screen pe visible ho toh usko fade-in karega

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // 10% section visible hone par trigger ho
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // CSS mein isko hide karenge
        observer.observe(section);
    });
});

// CSS mein yeh add karna hoga:
/*
.fade-in-section {
    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    transform: translateY(20px);
}

.fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
}
*/