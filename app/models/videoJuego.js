var mongoose = require('mongoose');

var Desarrolladora = require('./desarrolladora');
var Genero = require('./genero');
var Idioma = require('./idioma');

//Banquete schema
var VideoJuegoSchema = mongoose.Schema({
    id_desarrolladora: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Desarrolladora'
    },
    id_genero:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Genero'
    },
    id_idioma:{
      type: mongoose.Schema.Types.ObjectId, ref: 'Idioma'
    },
    nombre: {
        required: true,
        type: String
    },
    precio: {
        required: true,
        type: Number
    },
    descripcion: {
        type: String
    },
    fch_lanzamiento: {
        required: true,
        type: Date,
        default: Date.now
    },
    fch_registro: {
      required: true,
      type: Date,
      default: Date.now
  }
});

var VideoJuego = module.exports = mongoose.model('VideoJuego', VideoJuegoSchema);