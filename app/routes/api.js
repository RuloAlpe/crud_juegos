const express = require('express');
const api = express();

const database = require('../config/database');

database.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + database.threadId);
});

api.get('/', (req, res) => {

    database.query('SELECT * FROM tasks', (error, results, fields) => {
        if(error){
            // throw error;
            res.status(404).json({
                status: 'error',
                mesagge: error
            });
        }
        
        // connected!
        res.status(201).json({
            status: 'success',
            response: results
        });
    });
});

api.post('/create', (req, res) => {
    
    if(req.body.txt_task){
        database.query('INSERT INTO tasks SET ?', req.body, (error, results, fields) => {
            if(error){
                // throw error;
                res.status(404).json({
                    status: 'error',
                    mesagge: error
                });
            }
            
            res.status(201).json({
                status: 'success',
                response: results
            });            
        });
    }else{
        res.status(400).json({ 
            status: 'error',
            message: "Faltan parametros"
        });
    }
});

api.put('/update/:id', (req, res) => {
    
    if(req.body.txt_task){
        database.query('UPDATE tasks SET txt_task = ? WHERE id = ?', [req.body.txt_task, req.params.id], (error, results, fields) => {
            if(error){
                // throw error;
                res.status(404).json({
                    status: 'error',
                    mesagge: error
                });
            }
        
            res.status(200).json({
                status: 'success',
                response: results
            });            
        });
    }else{
        res.status(400).json({ 
            status: 'error',
            message: "Faltan parametros"
        });
    }
});

api.put('/terminar/:id', (req, res) => {
    
    if(req.body.b_terminada == 0 || req.body.b_terminada == 1){
        database.query('UPDATE tasks SET b_terminada = ? WHERE id = ?', [req.body.b_terminada, req.params.id], (error, results, fields) => {
            if(error){
                // throw error;
                res.status(404).json({
                    status: 'error',
                    mesagge: error
                });
            }
        
            res.status(200).json({
                status: 'success',
                response: results
            });            
        });
    }else{
        res.status(400).json({ 
            status: 'error',
            message: "Error en los parametros"
        });
    }
});

api.delete('/delete/:id', (req, res) => {

    database.query('DELETE FROM tasks WHERE id = ?', req.params.id, (error, results, fields) => {
        if(error){
            // throw error;
            res.status(404).json({
                status: 'error',
                mesagge: error
            });
        }
        
        res.status(200).json({
            status: 'success',
            response: results
        });            
    });
});
module.exports = api;