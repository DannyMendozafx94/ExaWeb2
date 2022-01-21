const {connect} = require('mongoose');
const {CADENA_CONEXION} = require('./src/config/index');
const Server = require('./src/startup/index');

(async()=>
{
    await connect(CADENA_CONEXION, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>
    {
        console.log('Conexion exitosa con la base de datos');
    }).catch(()=> console.log('No se pudo conectar'));
    await Server.LevantarPuerto();
})();





