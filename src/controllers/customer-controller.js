const Customer = require('../app/models/customer');

exports.post = function (req, res){
    const customer = new Customer();
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.password = req.body.password;

    customer.save(function(error){
        if(error)
            res.send("Erro ao tentar salvar um novo usuário ", error);
        
        res.status(201).json({message: 'usuário inserido com sucesso'});
    });
}
exports.getAll = function(req, res){
    Customer.find(function(err, prods){
        if(err)
            res.send(err);

        res.status(200).json({
            message: "Retorno de todos os clientes",
            allCustomers: prods
        });
    });
}

exports.getById = function(req, res){
    const id = req.params.customertId;
    Customer.findById(id, function(err, customer){
        if (err){
            res.status(500).json({
                message: "Erro ao tentar encontrar cliente; ID mal formado"
            });
        }else if(customer == null){
            res.status(400).json({
                message: "cliente não encontrado para o id passado"
            });
        }else{
            res.status(200).json({
                message: "cliente encontrado",
                customer: customer
            });
        }
    });
}