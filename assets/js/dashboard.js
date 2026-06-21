const usuario =
    JSON.parse(
        localStorage.getItem("usuarioActual")
    );

if (!usuario) {

    window.location.href = "../../index.html";

} else {

    document
        .getElementById("nombreUsuario")
        .textContent = usuario.nombre;
}