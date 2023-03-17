/* // Agregar evento submit al formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validar campos del formulario
    if (nameInput.value === '') {
        errorMessage.textContent = 'Por favor ingresa tu nombre';
        errorMessage.style.display = 'block';
    } else if (emailInput.value === '') {
        errorMessage.textContent = 'Por favor ingresa tu email';
        errorMessage.style.display = 'block';
    } else if (messageInput.value === '') {
        errorMessage.textContent = 'Por favor ingresa tu mensaje';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    
        // Add validation for email input
        const email = emailInput.value;
        const re = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    
        if (!re.test(String(email).toLowerCase())) {
    errorMessage.textContent = 'Por favor ingresa un email válido';
    errorMessage.style.display = 'block';
    } else {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    emailInput.style.border = "1px solid green";
    
        // Enviar formulario
        // ...
    
        // Limpiar los campos del formulario y mostrar mensaje de éxito
        form.reset();
        successMessage.textContent = 'Mensaje enviado';
        successMessage.style.display = 'block';
    }
    
    }
    });
    
    // Resetea el borde del email input si se vuelve a editar
    emailInput.addEventListener('input', () => {
    emailInput.style.border = "1px solid #ced4da";
    });
    
    // Resetea el mensaje de éxito si se vuelve a enviar el formulario
    form.addEventListener('submit', () => {
    successMessage.textContent = '';
    successMessage.style.display = 'none';
    });
    
    //Funcion para usar en el boton submit
    function validateForm() {
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    return false;
    }
    return true;
    } */


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Verifica que todos los campos estén completos
    if (name === '' || email === '' || message === '') {
      document.getElementById('error-message').innerHTML = 'Por favor, completa todos los campos';
      document.getElementById('error-message').style.display = 'block';
      return false;
    }
  
    // Verifica que el correo electrónico sea válido
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('error-message').innerHTML = 'Por favor, ingresa un correo electrónico válido';
      document.getElementById('error-message').style.display = 'block';
      return false;
    }
  
    // Envía el formulario si todo está correcto
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('success-message').innerHTML = 'Mensaje enviado exitosamente';
    document.getElementById('success-message').style.display = 'block';
  
    return true;
  }
  