const { Tramite } = require('../../../Micro-Service2/src/models/index');

const create = async(req, res) => {
    const nuevoTramite = await new Tramite(req.body);
    nuevoTramite.save();
    res.json(nuevoTramite);
};

const traer = async(req, res) => {
    const Tramites = await Tramite.find({});
    res.json(Tramites);
};

const TraerId = async(req, res) => {
    const TramiteId = await Tramite.findById(req.params.id);
    res.json(TramiteId);
};

const update = async(req, res) => {
    const modificar = await Tramite.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
    await modificar.save();
    res.json({
        msg: 'Tramite Modificado'
    });
};


const deleted = async(req, res) => {
    const EliminarTramite = await Tramite.findByIdAndDelete(req.params.id);
    res.json({
        msg: 'Tramite Eliminado'
    });
};


module.exports = {
    create,
    traer,
    TraerId,
    update,
    deleted
};