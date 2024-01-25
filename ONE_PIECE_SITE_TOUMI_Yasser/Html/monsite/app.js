const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})

document.addEventListener('DOMContentLoaded', function() {
    let options = {
      threshold: 0.5 // La moitié de l'image doit être visible pour déclencher l'animation
    };
  
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.row');
  
    for (let elm of elements) {
      observer.observe(elm);
    }
  });
  
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('in-view');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Ajoute la classe 'in-view' au bloc .info-perso pour déclencher l'animation
    document.querySelector('.info-perso').classList.add('in-view');
  });
  