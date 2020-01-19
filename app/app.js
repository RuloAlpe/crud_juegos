const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/database');

// //Verificar si conecta o no a la BD
// mongoose.connection.on('connected', () => {
//     console.log('Conectado a la BD '+config.database);
// });
// mongoose.connection.on('error', (err) => {
//     console.log('Error al conectar a la BD '+err);
// });

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');

app.use('/api', api);

app.get('/', (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = app;
