import express from 'express';
import ClienteController from './controller/ClienteController';
import ReservaController from './controller/ReservaController';

const server = express();

server.use(express.json());

// Rotas cliente
server.get('/clientes', ClienteController.buscarTodos);
server.post('/clientes', ClienteController.criarCliente);
server.get('/clientes/:id', ClienteController.buscarClientePorId);
server.get(
    '/clientes/:id/completo',
    ClienteController.buscarClienteCompletoPorId
);

// Rotas reserva
server.get('/reservas', ReservaController.buscarTodos);
server.put('/reservas/confirmar', ReservaController.confirmarReserva);
server.get(
    '/reservas/quartos-disponiveis',
    ReservaController.buscarQuartosDisponiveis
);

// Porta do servidor
const porta = 3000;

// Servidor rodando
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});
