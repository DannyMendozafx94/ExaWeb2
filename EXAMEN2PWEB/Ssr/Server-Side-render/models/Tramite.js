const { Schema, model } = require('mongoose');


const tramiteSchema = Schema({
    detalle: {
        type: String,
        required: [true, 'El detalle del tramite es obligatorio'],
        //unique: true
    },
    estudiante: {
        type: String,
    },
    fecha: {
        type: String,
    },
    departamento: {
        type: String,
    },
    NivelUrgencia: {
        type: String,
    },
    tipoTramite: {
        type: String,
    },
    FechaRetiro: {
        type: String,
    },
    hora: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: false
    },

});

tramiteSchema.methods.toJSON = function() {
    const { __v, estado, ...data } = this.toObject();
    return data;
};

module.exports = model('Tramite', tramiteSchema);