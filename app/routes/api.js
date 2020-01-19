const express = require('express');
const mongoose = require('mongoose');
const api = express();

const VideoJuego = require('../models/videoJuego');
const Desarrolladora = require('../models/desarrolladora');
const Genero = require('../models/genero');
const Idioma = require('../models/idioma');

api.get('/', (req, res) => {
    console.log(req)
    VideoJuego.find({}, (err, videojuegos) => {
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al buscar lista de videojuegos'
            });
        }else{
            res.status(200);
            res.json(videojuegos);
        }
    });
});

/**
 * CRUD videojuegos
 */
api.post('/crear_juego', (req, res) => {
    let newJuego = new VideoJuego({

    });
});
/**
 * Termina CRUD videojuegos
 */


/**
 * CRUD desarrolladora
 */
api.post('/desarrolladora/crear', (req, res) => {
    let newDesarrolladora = new Desarrolladora({
        nombre: req.body.txt_nombre,
        descripcion: req.body.txt_descripcion,
        habilitado: 1
    });

    newDesarrolladora.save().then(function(desarrolladora){
        res.status(200);
        res.json(desarrolladora);
    }, function(err){
        res.status(400);
        res.json({
            'error': 'Ocurrio un erro al guarsdar la desarrolladora'
        });
    });
});

api.get('/desarrolladora', (req, res) => {
    Desarrolladora.find({}, (err, desarrolladoras) => {
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al listar desarrolladoras'
            });
        }else{
            res.status(200);
            res.json(desarrolladoras);
        }
    });
});

api.put('/desarrolladora/actualizar/:id', (req, res) => {
    var desarrolladora_update = req.body;
    var updDes = {};
    
    if(desarrolladora_update.nombre){
        updDes.nombre = desarrolladora_update.nombre;
    }
    
    if(desarrolladora_update.descripcion){
        updDes.descripcion = desarrolladora_update.descripcion;
    }

    if(desarrolladora_update.habilitado){
        updDes.habilitado = desarrolladora_update.habilitado;
    }
    
    if(!updDes){
        res.status(400);
        res.json({
            "error":"Error al actualizar la desarrolladora"
        });
    } else {
        Desarrolladora.update({_id: mongoose.Types.ObjectId(req.params.id)},updDes, {}, function(err, desarrolladora_update){
        if(err){
            res.status(400);
            res.send({
                'error': err
            });
        }
        res.status(200);
        res.json(desarrolladora_update);
    });
    }
});

api.delete('/desarrolladora/eliminar/:id', (req, res) => {
    Desarrolladora.remove({'_id':req.params.id}, function(err, desarrolladora){
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al eliminar la desarrolladora'
            });
        }else{
            res.status(200);
            res.json({
                'success': 'Se elimino correctamente la desarrolladora'
            });
        }
    });
});
/**
 * Termina CRUD desarrolladora
 */


/**
 * CRUD generos
 */
api.post('/genero/crear', (req, res) => {
    let newGenero = new Genero({
        nombre: req.body.txt_nombre,
        habilitado: 1
    });

    newGenero.save().then(function(genero){
        res.status(200);
        res.json(genero);
    }, function(err){
        res.status(400);
        res.json({
            'error': 'Ocurrio un erro al guardar el genero'
        });
    });
});

api.get('/genero', (req, res) => {
    Genero.find({}, (err, generos) => {
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al listar generos'
            });
        }else{
            res.status(200);
            res.json(generos);
        }
    });
});

api.put('/genero/actualizar/:id', (req, res) => {
    var genero_update = req.body;
    var updGen = {};
    
    if(genero_update.nombre){
        updGen.nombre = genero_update.nombre;
    }

    if(genero_update.habilitado){
        updGen.habilitado = genero_update.habilitado;
    }
    
    if(!updGen){
        res.status(400);
        res.json({
            "error":"Error al actualizar el genero"
        });
    } else {
        Genero.update({_id: mongoose.Types.ObjectId(req.params.id)},updGen, {}, function(err, genero_update){
        if(err){
            res.status(400);
            res.send({
                'error': err
            });
        }
        res.status(200);
        res.json(genero_update);
    });
    }
});

api.delete('/genero/eliminar/:id', (req, res) => {
    Genero.remove({'_id':req.params.id}, function(err, genero){
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al eliminar el genero'
            });
        }else{
            res.status(200);
            res.json({
                'success': 'Se elimino correctamente el genero'
            });
        }
    });
});
/**
 * Termina CRUD generos
 */


/**
 * CRUD idiomas
 */
api.post('/idioma/crear', (req, res) => {
    let newIdioma = new Idioma({
        nombre: req.body.txt_nombre,
        habilitado: 1
    });

    newIdioma.save().then(function(idioma){
        res.status(200);
        res.json(idioma);
    }, function(err){
        res.status(400);
        res.json({
            'error': 'Ocurrio un erro al guardar el idioma'
        });
    });
});

api.get('/idioma', (req, res) => {
    Idioma.find({}, (err, idiomas) => {
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al listar idiomas'
            });
        }else{
            res.status(200);
            res.json(idiomas);
        }
    });
});

api.put('/idioma/actualizar/:id', (req, res) => {
    var idioma_update = req.body;
    var updIdi = {};
    
    if(idioma_update.nombre){
        updIdi.nombre = idioma_update.nombre;
    }

    if(idioma_update.habilitado){
        updIdi.habilitado = idioma_update.habilitado;
    }
    
    if(!updIdi){
        res.status(400);
        res.json({
            "error":"Error al actualizar el idioma"
        });
    } else {
        Idioma.update({_id: mongoose.Types.ObjectId(req.params.id)},updIdi, {}, function(err, idioma_update){
        if(err){
            res.status(400);
            res.send({
                'error': err
            });
        }else{
            res.status(200);
            res.json(idioma_update);
        }
    });
    }
});

api.delete('/idioma/eliminar/:id', (req, res) => {
    Idioma.remove({'_id':req.params.id}, function(err, idioma){
        if(err){
            res.status(400);
            res.json({
                'error': 'Error al eliminar el idioma'
            });
        }else{
            res.status(200);
            res.json({
                'success': 'Se elimino correctamente el idioma'
            });
        }
    });
});
/**
 * Termina CRUD idiomas
 */


module.exports = api;