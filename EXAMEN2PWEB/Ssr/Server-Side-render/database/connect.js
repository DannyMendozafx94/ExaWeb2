const mongoose = require('mongoose');
const { config } = require('dotenv');
const { MONGODB_CNN } = require('../config');
const dbConnection = async() => {
    try {
        const respuestaConexion = await mongoose.connect(MONGODB_CNN);
        //await mongoose.connect( process.env.MONGODB_CNN)
        console.log(`Base de datos conectada`);
    } catch (error) {

        console.log(`Error al iniciar la base de datos ${error}`);
    }

};
module.exports = {
    dbConnection
};