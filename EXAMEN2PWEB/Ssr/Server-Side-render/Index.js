/// traer datos de configuracion   PUERTO Y LA CADENA DE CONEXION  MONGODB_CNN Y PORT
require('dotenv').config();
const express = require('express');


const { config } = require('dotenv');

const cors = require('cors');
const Server = require('./server');


const app = express();

app.use(cors()).use(express.json());


/// crear una instancia del servidor y levantarlo





const server = new Server();

///LEVANTAR EL SERVIDOR
server.listen();