const express = require('express');

const app = express();
var name = 'Paul';


app.get('/', (req, res) => {

    res.send( 'Hello');
    
});

app.get('/hello', (req, res) => {

    res.send( 'Bonjour ' + req.param('name'));
    
});

app.post('/chat', (req, res) => {

    res.send( 'Je suis a Paris ' + req.param('name'));
    
});





module.exports = app;