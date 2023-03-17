// Cuando se haga clic en el botón
 document.querySelector('#english-button').addEventListener('click', function() {
  // Hace una solicitud a la versión en inglés de tu sitio
  fetch('english-version.html')
    .then(response => response.text())
    .then(html => {
      // Reemplaza el contenido de la página actual con el contenido en inglés
      document.querySelector('body').innerHTML = html;
    });
});


 // Cuando se haga clic en el botón
 document.querySelector('#spanish-button').addEventListener('click', function() {
  // Hace una solicitud a la versión en inglés de tu sitio
  fetch('index.html')
    .then(response => response.text())
    .then(html => {
      // Reemplaza el contenido de la página actual con el contenido en español
      document.querySelector('body').innerHTML = html;
    });
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

