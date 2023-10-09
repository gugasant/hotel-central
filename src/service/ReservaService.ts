import StatusReserva from '../models/StatusReserva';
import Reserva from '../models/reserva';
import QuartoService from './QuartoService';

class ReservaService {
    private reservas: Array<Reserva> = [];

    public buscarTodos(): Array<Reserva> {
        return this.reservas;
    }

    public criarReserva(reserva: any, idCliente: number): void {
        const reservaNova = new Reserva();

        reservaNova.setIdReserva(this.reservas.length + 1);
        reservaNova.setDataIda(reserva.dataIda);
        reservaNova.setQuantDias(reserva.quantDias);
        reservaNova.setQuantPessoas(reserva.quantPessoas);
        reservaNova.setStatusReserva(StatusReserva.PENDENTE);
        reservaNova.setNumeroQuarto(reserva.numeroQuarto);

        reservaNova.setIdCliente(idCliente);

        // Reserva o quarto
        this.reservas.push(reservaNova);
    }

    public buscarReservaPorIdCliente(idCliente: number) {
        const reservas = this.reservas.filter(
            (reserva) => reserva.getIdCliente() == idCliente
        );
        return reservas[0];
    }

    public buscarReservaPorIdReserva(idReserva: number) {
        const reservas = this.reservas.filter(
            (reserva) => reserva.getIdReserva() == idReserva
        );
        return reservas[0];
    }

    public confirmarReserva(idReserva: number, adiantamento: number) {
        const reserva = this.buscarReservaPorIdReserva(idReserva);
        const quarto = QuartoService.buscarQuartoPorNumeroQuarto(
            reserva.getNumeroQuarto()
        );
        const valorQuarto = quarto.getValor();

        if (adiantamento >= valorQuarto / 2) {
            reserva.setStatusReserva(StatusReserva.CONFIRMADA);
            QuartoService.reservarQuarto(
                reserva.getIdReserva(),
                reserva.getNumeroQuarto()
            );
        }
    }
}

export default new ReservaService();
