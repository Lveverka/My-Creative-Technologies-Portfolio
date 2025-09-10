// Smooth scrolling (optional, mainly for same-page links)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if(link.getAttribute('href').startsWith('#')){
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Optional: play/pause videos on scroll
const videos = document.querySelectorAll('video');

const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videos.forEach(video => videoObserver.observe(video));
