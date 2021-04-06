//VALIDATION
const formulario = document.getElementById('form');
const nombre = document.getElementById('input-nombre');
const email = document.getElementById('input-email');
const mensaje = document.getElementById('input-mensaje');
const nombreValue = nombre.value;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nombreValue == null || nombreValue.length == 0 || /^\s+$/.test(nombreValue)) {
        alert('Espacio Nombre es requerido');
       
    }else{
        submit();
    }
});

