document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Obtener los valores del formulario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Agregar el nuevo usuario al array 'users'
        users.push({ username: username, password: password });

        // Limpiar el formulario
        document.getElementById('registrationForm').reset();

        alert('Usuario registrado correctamente');
    });
});
