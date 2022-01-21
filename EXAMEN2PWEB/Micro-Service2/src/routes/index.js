const { VehiculoRoutes } = require('./index.routes');
const { TramiteRoutes } = require('./index.routes');
const Express = require('express');
const Api = Express();

Api.use(Express.json());
Api.use('/MicroservicioTramites2', TramiteRoutes);

module.exports = Api;