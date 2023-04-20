document.querySelector('#english-button').addEventListener('click', function() {
  window.location.href = "english-version.html";
});

document.querySelector('#spanish-button').addEventListener('click', function() {
  window.location.href = "index.html";
});

let isEnglish = false;

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
}); 

