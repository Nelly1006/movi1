document.getElementById('iniciarBtn').addEventListener('click', function() {
    const codigoQR = document.getElementById('codigoQR').value;
    if (codigoQR) {
        document.getElementById('notificacion').innerText = 'Estacionamiento iniciado para el código: ' + codigoQR;
        // Aquí puedes agregar lógica para el temporizador y las notificaciones.
        alert('Estacionamiento iniciado.');
    } else {
        alert('Por favor, escanea un código QR válido.');
    }
});
