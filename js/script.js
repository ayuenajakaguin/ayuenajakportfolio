
// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle && navToggle.addEventListener('click', ()=>{
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Slideshow logic
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let current = 0;
function showSlide(index){
  slides.forEach((s,i)=> s.classList.toggle('active', i===index));
  dots.forEach((d,i)=> d.classList.toggle('active', i===index));
  current = index;
}
prevBtn.addEventListener('click', ()=> showSlide((current-1+slides.length)%slides.length));
nextBtn.addEventListener('click', ()=> showSlide((current+1)%slides.length));
dots.forEach(d => d.addEventListener('click', e=> showSlide(Number(e.target.dataset.index)));

// Auto-play
let autoplay = setInterval(()=> showSlide((current+1)%slides.length), 4000);
// pause on hover
const slideshowEl = document.querySelector('.slideshow');
slideshowEl.addEventListener('mouseenter', ()=> clearInterval(autoplay));
slideshowEl.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> showSlide((current+1)%slides.length), 4000));

// Smooth active nav highlighting on scroll
const sections = document.querySelectorAll('main section, header');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let currentId = '';
  sections.forEach(sec=>{
    const top = sec.offsetTop - 120;
    if(window.pageYOffset >= top) currentId = sec.getAttribute('id');
  });
  navAnchors.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#' + currentId));
});
