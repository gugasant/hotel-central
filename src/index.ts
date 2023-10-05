import express from 'express';
import Cliente from './cliente';

const server = express();

server.use(express.json())

const porta = 3000;

const clientes: Cliente[] = [];

// Ler
server.get('/cliente', (req, res) => {
    res.send(clientes)
});

// Criar
server.post('/cliente', (req, res) => {
    try {
        const cliente = new Cliente(req.body.idCliente, req.body.nome, req.body.cpf, req.body.telefone, req.body.genero, req.body.nacionalidade);
        clientes.push(cliente);
        res.status(201).send('Cliente cadastrado com sucesso!')
    } catch (err) {
        console.log(err)
    }
});


function buscarClientePorId(id: number) {
    return clientes.filter(cliente => cliente.getIdCliente() == id);
}

function buscarIndiceCliente (id: number) {
    return clientes.findIndex(cliente => cliente.getIdCliente() == id);
}

// Deletar
server.delete('/cliente/:id', (req, res) => {
    let indice = buscarIndiceCliente(Number(req.params.id));
    console.log(indice);
    clientes.splice(indice, 1);
    res.send(clientes); 
});

//Alterar
server.put('/cliente/:id', (req, res) => {
    console.log(req.params.id);
    let indice = buscarIndiceCliente(Number(req.params.id));
    console.log(indice);
    clientes[indice].setIdCliente = req.body.idCliente;
    clientes[indice].setNome = req.body.nome;
    clientes[indice].setCpf = req.body.cpf;
    clientes[indice].setTelefone = req.body.telefone;
    clientes[indice].setGenero = req.body.genero;
    clientes[indice].setNacionalidade = req.body.nacionalidade;
    res.json(clientes);
})

// Servidor rodando
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});