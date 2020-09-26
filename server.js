//Importando pacotes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

//Configurar o app para usar o body-parser e transformar as requisições em Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Persistência
const connectionString = "mongodb+srv://posgraducao:aslo02sisk@cluster0.sfp31.mongodb.net/bd_pos?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});

//Definir porta onde o server vai responder
const port = process.env.port || 3000;

//Definindo as rotas
const router = express.Router(); //intercepta todas as rotas
const productRoute = require('./routes/product-route');
const indexRoute = require('./routes/index-route');



//Vincular a aplicação (app) com o motor de rotas
//'/api' é o caminho padrão para as APIs REST 
//rota principal
app.use('/api', indexRoute);

//rota para produtos
app.use('/api/produtos/', productRoute);

app.listen(port, () => {
    console.log("server is up and running... on port", port);
});