//Controladores
const SocketsControllers = (socket) => {
    console.log('cliente conectado', socket.id)
    socket.on('disconnect', () => {
        console.log('Clienete desconectado ', socket.id)
    })
    socket.on('enviar-mensaje', (payload) => {
        const id = 1234
        socket.broadcast.emit('respuesta-mensaje', payload)
    })

    socket.on('chatescribi', (dato) => {
        console.log(dato)
        socket.broadcast.emit('respuesta-ecribiendo', dato)
    })
}

export { SocketsControllers }