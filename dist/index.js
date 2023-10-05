"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_1 = __importDefault(require("./cliente"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
const porta = 3000;
const clientes = [];
// Ler
server.get('/cliente', (req, res) => {
    res.send(clientes);
});
// Criar
server.post('/cliente', (req, res) => {
    try {
        const cliente = new cliente_1.default(req.body.idCliente, req.body.nome);
        clientes.push(cliente);
        res.status(201).send('Aluno cadastrado');
    }
    catch (err) {
        console.log(err);
    }
});
function buscarAlunoPorId(id) {
    return clientes.filter(aluno => aluno.getIdCliente == id);
}
function buscarIndiceAluno(id) {
    return clientes.findIndex(aluno => aluno.getIdCliente == id);
}
// Deletar
server.delete('/cliente/:id', (req, res) => {
    let indice = buscarIndiceAluno(Number(req.params.id));
    console.log(indice);
    clientes.splice(indice, 1);
    res.send(clientes);
});
//Alterar
server.put('/cliente/:id', (req, res) => {
    console.log(req.params.id);
    let indice = buscarIndiceAluno(Number(req.params.id));
    console.log(indice);
    clientes[indice].setNome = req.body.nome;
    clientes[indice].setIdCliente = req.body.idCliente;
    res.json(clientes);
});
// Servidro rodando
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});
