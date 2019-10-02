const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-arx5d.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

//req.query = Acessar parametros da requisição (para filtros)
//req.params = Acessar route params (para atualização, delete)
//req.body = Acessar corpo da requisição(Para criação, ediçao)

app.use(express.json());
app.use(routes);



app.listen(3333);