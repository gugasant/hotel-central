import TipoQuarto from './TipoQuarto';

class Quarto {
    private numeroQuarto: number;
    private andarQuarto: number;
    private tipoQuarto: TipoQuarto;
    private idReserva: number;
    private valorQuarto: number;
    private disponivel: boolean;

    constructor() {
        this.idReserva = 0;
        this.andarQuarto = 0;
        this.valorQuarto = 0;
        this.numeroQuarto = 0;
        this.disponivel = true;
        this.tipoQuarto = TipoQuarto.SIMPLES;
    }

    // getters
    public getNumero() {
        return this.numeroQuarto;
    }

    public getAndar() {
        return this.andarQuarto;
    }

    public getTipo() {
        return this.tipoQuarto;
    }

    public getIdReserva() {
        return this.idReserva;
    }

    public getValor() {
        return this.valorQuarto;
    }

    public getDisponivel() {
        return this.disponivel;
    }

    // setters
    public setNumero(value: number) {
        this.numeroQuarto = value;
    }

    public setAndar(value: number) {
        this.andarQuarto = value;
    }

    public setTipo(value: TipoQuarto) {
        this.tipoQuarto = value;
    }

    public setIdReserva(value: number) {
        this.idReserva = value;
    }

    public setValor(value: number) {
        this.valorQuarto = value;
    }

    public setDisponivel(value: boolean) {
        this.disponivel = value;
    }
}

export default Quarto;
