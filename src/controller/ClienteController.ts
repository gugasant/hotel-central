import ClienteService from '../service/ClienteService';
import { Request, Response } from 'express';

class ClienteController {
    public buscarTodos(req: Request, res: Response) {
        try {
            const clientes = ClienteService.buscarTodos();
            return res.status(200).json(clientes);
        } catch (error) {
            console.log(error);
        }
    }

    public criarCliente(req: Request, res: Response) {
        try {
            const cliente = req.body;
            ClienteService.criarCliente(cliente);
            return res.status(201).json(cliente);
        } catch (error) {
            console.log(error);
        }
    }

    public buscarClientePorId(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const cliente = ClienteService.buscarClientePorId(id);
            return res.status(200).json(cliente);
        } catch (error) {
            console.log(error);
        }
    }

    public buscarClienteCompletoPorId(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const cliente = ClienteService.buscarClienteCompletoPorId(id);
            return res.status(200).json(cliente);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ClienteController();
