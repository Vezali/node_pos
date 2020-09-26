const express = require('express');
const router = express.Router();

//Middleware
router.use(function(req, res, next){
    console.log("Interceptação pelo Middleware ok"); //Log, Validações, autenticações
    next();
});

router.get('/', (req, res) => res.send("Rota teste ok"));

module.exports = router;