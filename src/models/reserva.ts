import StatusReserva from './StatusReserva';

class Reserva {
    private idReserva: number;
    private dataIda: string;
    private quantDias: number;
    private quantPessoas: number;
    private idCliente: number;
    private statusReserva: StatusReserva;
    private numeroQuarto: number;

    constructor() {
        this.dataIda = '';
        this.idReserva = 0;
        this.quantDias = 0;
        this.idCliente = 0;
        this.quantPessoas = 0;
        this.numeroQuarto = 0;
        this.statusReserva = StatusReserva.PENDENTE;
    }

    // getters
    getDataIda() {
        return this.dataIda;
    }
    getQuantDias() {
        return this.quantDias;
    }
    getQuantPessoas() {
        return this.quantPessoas;
    }
    getIdReserva() {
        return this.idReserva;
    }
    getIdCliente() {
        return this.idCliente;
    }
    getStatusReserva() {
        return this.statusReserva;
    }
    getNumeroQuarto() {
        return this.numeroQuarto;
    }

    // setters
    public setDataIda(value: string) {
        this.dataIda = value;
    }
    public setQuantDias(value: number) {
        this.quantDias = value;
    }
    public setQuantPessoas(value: number) {
        this.quantPessoas = value;
    }
    public setIdReserva(value: number) {
        this.idReserva = value;
    }
    public setIdCliente(value: number) {
        this.idCliente = value;
    }
    public setStatusReserva(value: StatusReserva) {
        this.statusReserva = value;
    }
    public setNumeroQuarto(value: number) {
        this.numeroQuarto = value;
    }
}

export default Reserva;
