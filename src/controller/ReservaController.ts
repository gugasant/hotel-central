import ReservaService from '../service/ReservaService';
import QuartoService from '../service/QuartoService';

import { Request, Response } from 'express';

class ReservaController {
    public buscarTodos(req: Request, res: Response) {
        try {
            const reservas = ReservaService.buscarTodos();
            return res.status(200).json(reservas);
        } catch (error) {
            console.log(error);
        }
    }

    public buscarQuartosDisponiveis(req: Request, res: Response) {
        try {
            const quartosDisponiveis = QuartoService.buscarTodosDisponiveis();

            return res.status(200).json(quartosDisponiveis);
        } catch (error) {
            console.log(error);
        }
    }

    public confirmarReserva(req: Request, res: Response) {
        try {
            const { idReserva, adiantamento } = req.body;
            ReservaService.confirmarReserva(idReserva, adiantamento);

            return res
                .status(200)
                .json({ message: 'Reserva confirmada com sucesso!' });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ReservaController();
