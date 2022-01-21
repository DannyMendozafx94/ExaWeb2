/**Aqui va el levantamiento del puerto */
const {PORT, APPLICATION_NAME} =require('../config/index');
const Api =require('../routes/index');

class Servidor 
{
    LevantarPuerto()
    {
        Api.listen(PORT, ()=>
        {
            console.log(`La Aplicación ${APPLICATION_NAME}, se esta corriendo por el puerto ${PORT}`);
        })
    }
}
const Server = new Servidor();

module.exports = Server;