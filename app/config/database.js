const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@cluster0-lyrns.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));