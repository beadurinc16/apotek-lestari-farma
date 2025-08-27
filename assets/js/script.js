// Animasi scroll fade-in
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
},{ threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));
