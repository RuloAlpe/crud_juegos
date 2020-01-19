var mongoose = require('mongoose');

//Desarrolladora schema
var DesarrolladoraSchema = mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    descripcion: {
        type: String
    },
    habilitado: {
        type: Boolean
    }
});

var Desarrolladora = module.exports = mongoose.model('Desarrolladora', DesarrolladoraSchema);
