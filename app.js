import dotenv from 'dotenv'
dotenv.config()
import { server } from './models/server.js'

const Server = new server();
Server.listen();