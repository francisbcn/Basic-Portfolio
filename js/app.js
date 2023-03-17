function addSmoothScrolling() {
  // Obtiene los enlaces de la navegación
  const navLinks = document.querySelectorAll('header nav a');

  // Añade el comportamiento de "scroll suave" a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      // Evita el comportamiento predeterminado del enlace (recargar la página)
      event.preventDefault();

      // Obtiene el elemento al que se hace referencia el enlace
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Desplaza la vista hasta el elemento de manera suave
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', addSmoothScrolling);
