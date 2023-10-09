import TipoQuarto from '../models/TipoQuarto';
import Quarto from '../models/quarto';

class QuartoService {
    private quartos: Array<Quarto> = [];

    constructor() {
        const quarto1 = new Quarto();
        const quarto2 = new Quarto();

        quarto1.setNumero(1);
        quarto1.setAndar(1);
        quarto1.setValor(100);
        quarto1.setTipo(TipoQuarto.SIMPLES);

        quarto2.setNumero(2);
        quarto2.setAndar(1);
        quarto2.setValor(200);
        quarto2.setTipo(TipoQuarto.SUITE);

        this.quartos.push(quarto1, quarto2);
    }

    public buscarTodosDisponiveis(): Array<Quarto> {
        const quartosDisponiveis = this.quartos.filter(
            (quarto) => quarto.getDisponivel() == true
        );
        return quartosDisponiveis;
    }

    public reservarQuarto(idReserva: number, numeroQuarto: number) {
        const quarto = this.quartos.filter(
            (quarto) => quarto.getNumero() == numeroQuarto
        );
        quarto[0].setIdReserva(idReserva);
        quarto[0].setDisponivel(false);
    }

    public buscarQuartoPorIdReserva(idReserva: number) {
        const quarto = this.quartos.filter(
            (quarto) => quarto.getIdReserva() == idReserva
        );
        return quarto[0];
    }

    public buscarQuartoPorNumeroQuarto(numeroQuarto: number) {
        const quarto = this.quartos.filter(
            (quarto) => quarto.getNumero() == numeroQuarto
        );
        return quarto[0];
    }
}

export default new QuartoService();
