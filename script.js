// Función para mostrar u ocultar el menú de navegación
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('mostrar');
}

// Agregamos evento click al botón de menú
document.querySelector('#menu-btn').addEventListener('click', toggleMenu);

// Función para cambiar el tema de la página
function cambiarTema() {
  const body = document.body;
  body.classList.toggle('oscuro');
}

// Agregamos evento click al botón de tema
document.querySelector('#tema-btn').addEventListener('click', cambiarTema);