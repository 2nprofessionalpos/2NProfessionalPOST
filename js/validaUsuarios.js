var users = [
    { username: "user1", password: "1234" },
    { username: "user2", password: "password2" },
    { username: "admin", password: "admin" }
];

function validateUser(username, password) {
    return users.some(function(user) {
        return user.username === username && user.password === password;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const password = params.get('password');

    if (validateUser(username, password)) {
        users.push({ username: username, password: password });
        console.log('Usuario registrado correctamente:', username);
    } else {
        console.log('Error: Usuario no válido');
    }
});
