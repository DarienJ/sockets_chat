const socket = io();
const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');
const textMesaje = document.querySelector('#textMesaje')
const enviarMensaje = document.querySelector('#enviarMensaje')
const autorchat = document.querySelector('#textAutor')
let Mensaje = document.getElementById('mensaje')
let escrribi = document.getElementById('escribiendo')

//Conectado
socket.on('connect', () => {
    console.log('Conectado')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

//Desconectado
socket.on('disconnect', () => {
    console.log('Desconectdo')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'

})
socket.on('respuesta-ecribiendo', function(array) {
    escrribi.innerHTML = `<p>
    <strong>${array} </strong>:<em> Escribiendo....</em>
    </p>`
    console.log(array)
})
socket.on('respuesta-mensaje', function(array) {
    escrribi.innerHTML = ' '
    Mensaje.innerHTML += `<p>
    <strong>${array.autor} </strong>: <em>${array.mensaje}</em>
    </p>`
    console.log(array)
})

enviarMensaje.addEventListener('click', () => {
    const mesaje = textMesaje.value
    socket.emit('enviar-mensaje', {
        autor: autorchat.value,
        mensaje: mesaje,
        fecha: new Date().getTime()
    })
})

textMesaje.addEventListener('keypress', function() {
    console.log(autorchat.value)
    socket.emit('chatecribi', autorchat.value)
})