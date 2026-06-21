document
    .getElementById("loginForm")
    .addEventListener("submit", login);

function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Usuario de prueba
    if (email === "socio@fitflow.com" && password === "1234") {

        const usuario = {
            nombre: "Weimar Claros",
            email: email,
            membresia: "Premium",
            estado: "Activa",
            vencimiento: "31/12/2026"
        };

        localStorage.setItem("usuarioActual",JSON.stringify(usuario));
        window.location.href = "secciones/socio/dashboard.html";

    } else if (email === "profesor@fitflow.com" && password === "1234") {
        const usuario = {
            nombre: "Marcos",
            email: email,
            rol: "Profesor"
        };
        localStorage.setItem("usuarioActual",JSON.stringify(usuario));
        window.location.href = "secciones/profesor/clases.html";

    }else if (email === "recepcion@fitflow.com" && password === "1234"){
        const usuario = {
            nombre: "Recepción",
            email: email,
            rol: "recepcion"
        };
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));
        window.location.href = "secciones/recepcion/dashboard.html";
    }else {
        alert("Email o contraseña incorrectos");
    }
}