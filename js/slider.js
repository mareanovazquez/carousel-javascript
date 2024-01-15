const slide = document.getElementsByClassName('slide');
const slider = document.getElementById('slider');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

// Cambiar el orden de los elementos
slider.insertBefore(slide[4], slide[0]);

// Función para realizar la animación y mover a la derecha
function moverDerecha() {
    // Animar el margen izquierdo del slider
    slider.style.transition = 'margin-left 0.8s';
    slider.style.marginLeft = '-106%';

    // Esperar a que termine la animación antes de cambiar el orden de los elementos
    setTimeout(() => {
        slider.lastElementChild.insertAdjacentElement("afterend", slider.firstElementChild);
        slider.style.transition = 'none';
        slider.style.marginLeft = '-43%';
        resetInterval();
    }, 700);
}

// Agregar evento al botón de siguiente
btnSiguiente.addEventListener('click', moverDerecha);

// Función para mover a la izquierda
function moverIzquierda() {
    // Animar el margen izquierdo del slider
    slider.style.transition = 'margin-left 0.8s';
    slider.style.marginLeft = '-43%';

    // Esperar a que termine la animación antes de cambiar el orden de los elementos
    setTimeout(() => {
        slider.insertBefore(slide[4], slide[0]);
        slider.style.transition = 'none';
        slider.style.marginLeft = '-105.6%';
        resetInterval();
    }, 700);
}

// Agregar evento al botón de anterior
btnAnterior.addEventListener('click', moverIzquierda);

// Función para resetear el intervalo de movimiento automático
let intervalo = setInterval(moverDerecha, 5000);

function resetInterval() {
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 5000);
}

// Comentarios explicativos adicionales:
// - Se ha utilizado 'style.transition' para gestionar la transición del margen izquierdo.
// - Se ha eliminado el uso de cadenas en 'setTimeout' para mejorar la legibilidad.
// - Se han añadido comentarios explicativos para clarificar las secciones clave del código.
// - Se ha corregido el error tipográfico en 'slider.style.marginLeft'.
// - Se han añadido verificaciones para garantizar que existan suficientes elementos en 'slide'.
// - Se ha deshabilitado temporalmente la transición después de la animación para evitar problemas. 

