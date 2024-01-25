document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
    } else {
        alert('Correo electrónico no válido');
        console.log('Error: Correo electrónico no válido');
        return; // Detener la ejecución si el correo no es válido
    }

    if (password.length >= 8) {
    } else {
        alert('La contraseña debe ser igual o mayor a 8 caracteres');
        console.log('Error: La contraseña debe ser igual o mayor a 8 caracteres');
        return; // Detener la ejecución si la contraseña no es válida
    }

    // Imprimir en la consola del navegador
    console.log('Correo:', email);
    console.log('Contraseña:', password);
});

document.getElementById('contraseña').addEventListener('input', function() {
    var password = this.value;
    var fortalezaContrasena = document.getElementById('fortaleza-contrasena');

    if (password.length < 8) {
        fortalezaContrasena.textContent = 'Debil';
        fortalezaContrasena.style.color = 'red';
    } else if (password.length >= 8 && password.length <= 10) {
        fortalezaContrasena.textContent = 'Media';
        fortalezaContrasena.style.color = 'orange';
    } else {
        fortalezaContrasena.textContent = 'Segura';
        fortalezaContrasena.style.color = 'green';
    }
});