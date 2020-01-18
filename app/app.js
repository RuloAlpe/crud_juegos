const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');

app.use('/api', api);

app.get('/', (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = app;
