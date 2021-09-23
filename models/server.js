//Importar librerias
import express from 'express';
import cors from 'cors';
import * as io from 'socket.io'
import http from 'http'
import { SocketsControllers } from '../sockets/soketcontrollers.js'


class server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // crea el servidor
        this.Server = http.createServer(this.app)
        this.io = new io.Server(this.Server)
        this.middlewars();
        this.Sockets();
    }

    middlewars() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    //Conectar
    Sockets() {
        this.io.on('connection', SocketsControllers)
    }

    //Escucar
    listen() {
        this.Server.listen(this.port, () => {
            console.log(`servidor coriendo en el puerto ${this.port}`);
        });
    }
}
export { server }