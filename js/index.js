//SCROLL SMOTH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 1000,
    origin: 'bottom',
    distance: '300px'
})

sr.reveal('.header-content-left', {
    duration: 1000,
    origin: 'top',
    distance: '300px'
})

sr.reveal('.header-content-right', {
    duration: 1000,
    origin: 'right',
    distance: '300px'
})

sr.reveal('.header-btn', {
    duration: 1000,
    origin: 'right',
    distance: '300px'
})

sr.reveal('.scroll', {
    duration: 1000,
    origin: 'top',
    distance: '400px'
})

//Eventos del Formulario

const Form = document.querySelector('#form');

Form.addEventListener('submit', e => {
    e.preventDefault();

    alert('Por el momento no tenemos activo este servicio. LLamanos');
});