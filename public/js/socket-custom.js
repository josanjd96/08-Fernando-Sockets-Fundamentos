

var socket = io();

// on: escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidos');
});

// emit: Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jose Antonio',
    mensaje: 'Hello world'
}, function (resp) {
    console.log('respuesta server: ', resp)
});

// on: Escuchar infromación
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servido:', mensaje);
});

