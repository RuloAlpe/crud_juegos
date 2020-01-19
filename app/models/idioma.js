var mongoose = require('mongoose');

//Idioma schema
var IdiomaSchema = mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    habilitado: {
        type: Boolean
    }
});

var Idioma = module.exports = mongoose.model('Idioma', IdiomaSchema);
