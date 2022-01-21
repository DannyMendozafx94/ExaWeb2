const { TramiteRoutes } = require('./index.routes');
const Express = require('express');
const Api = Express();

Api.use(Express.json());
Api.use('/MicroservicioTramites1', TramiteRoutes);

module.exports = Api;