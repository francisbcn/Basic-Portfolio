// Declarar la variable global para el idioma
let currentLanguage = 'es';

// Función para cambiar el idioma a inglés
function changeToEnglish() {
  // Hace una solicitud a la versión en inglés de tu sitio
  fetch('english-version.html')
    .then(response => response.text())
    .then(html => {
      // Reemplaza el contenido de la página actual con el contenido en inglés
      document.querySelector('body').innerHTML = html;
      currentLanguage = 'en';
    });
}

// Función para cambiar el idioma a español
function changeToSpanish() {
  // Hace una solicitud a la versión en español de tu sitio
  fetch('index.html')
    .then(response => response.text())
    .then(html => {
      // Reemplaza el contenido de la página actual con el contenido en español
      document.querySelector('body').innerHTML = html;
      currentLanguage = 'es';
    });
}

// Asigna el evento click al botón de inglés
document.querySelector('#english-button').addEventListener('click', function() {
  if (currentLanguage !== 'en') {
    changeToEnglish();
  }
});

// Asigna el evento click al botón de español
document.querySelector('#spanish-button').addEventListener('click', function() {
  if (currentLanguage !== 'es') {
    changeToSpanish();
  }
});


/* document.querySelector('#english-button').addEventListener('click', function() {
  window.location.href = "english-version.html";
});

document.querySelector('#spanish-button').addEventListener('click', function() {
  window.location.href = "index.html";
});

 */



/* let isEnglish = false;

document.querySelector('#english-button').addEventListener('click', function() {
  if (isEnglish) {
    fetch('index.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('body').innerHTML = html;
      });
    isEnglish = false;
  } else {
    fetch('english-version.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('body').innerHTML = html;
      });
    isEnglish = true;
  }
  let flagIcon = document.querySelector('#english-button .fa-flag')
  flagIcon.classList.toggle('fa-flag-eng');
});  */ 

