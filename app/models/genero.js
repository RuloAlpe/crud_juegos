var mongoose = require('mongoose');

//Genero schema
var GeneroSchema = mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    habilitado: {
        type: Boolean
    }
});

var Genero = module.exports = mongoose.model('Genero', GeneroSchema);
