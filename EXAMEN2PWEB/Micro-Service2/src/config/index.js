if ( process.env.NODE_ENV !== "production" )
{
    require("dotenv").config();
}
module.exports = 
{
    CADENA_CONEXION:process.env.CADENA_CONEXION,
    PORT:process.env.PORT,
    APPLICATION_NAME:process.env.APPLICATION_NAME
}