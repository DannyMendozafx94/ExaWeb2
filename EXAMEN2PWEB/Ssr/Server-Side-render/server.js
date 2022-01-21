/// CREAR SERVIDOR DE EXPRESS
const express = require('express');
const morgan = require('morgan');

const path = require('path');
const cors = require('cors');
//const indica = fs.readFileSync('./index.html');

const app = express();

const { dbConnection } = require('./database/connect');
const indexRoutes = require('./routes/tramites');

class Server {
    constructor() {
            this.app = express.Router();
            this.router = express.Router();

            this.port = process.env.PORT;
            this.paths = {
                microservicio1: '/api/microservicio1',
                tramites: '/api/tramites',
                grupos: '/api/grupos',

            };

            this.conectarDB();
            this.middlewares();
            this.routes();
            this.router.use('/v1/pruebas', this.app);



            this._express = express().use(this.router);

        }
        //// ASOCIAR RUTAS, MIDDLEWARES, LEVANTAR BASE DE DATOS
    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        //  mildewere
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cors()).use(express.json());
        app.set('views', path.join(__dirname, '/views'));
        app.set('view engine', 'ejs');
        app.use(cors()).use(express.json());
        app.use(morgan('dev'));
        app.use(express.urlencoded({ extended: false }));

        app.use('/', indexRoutes);

    }

    routes() {
        //this.app.use(this.paths.tis, require('./views/index.ejs'));
        app.use(this.paths.tramites, require('./routes/tramites'));


    }
    listen() {
        app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });

    }

}


module.exports = Server;