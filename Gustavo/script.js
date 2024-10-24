// Validación del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevenir envío por defecto
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Inicio de sesión exitoso.");
    }
});

// Validación del formulario de registro
document.getElementById("register-form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevenir envío por defecto
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email-registro").value;
    let password = document.getElementById("password-registro").value;

    if(nombre === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Registro exitoso.");
    }
});

