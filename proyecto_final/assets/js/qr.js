document.addEventListener('DOMContentLoaded', () => {
    const contenedorQR = document.getElementById('contenedorQR');
    const datosDelSocio = "FITFLOW-SOCIO-8492-ACTIVO";
    if (contenedorQR) {
   
        new QRCode(contenedorQR, {
            text: datosDelSocio,
            width: 220,               
            height: 220,              
            colorDark: "#121212",     
            colorLight: "#ffffff",    
            correctLevel: QRCode.CorrectLevel.H 
        });
    } else {
        console.error("No se encontró el contenedor del QR en el DOM.");
    }

});