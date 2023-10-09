import Cliente from '../models/cliente';
import ReservaService from './ReservaService';
import QuartoService from './QuartoService';

class ClienteService {
    private clientes: Array<Cliente> = [];

    public buscarTodos(): Array<Cliente> {
        return this.clientes;
    }

    public criarCliente(cliente: any): void {
        const clienteNovo = new Cliente();

        clienteNovo.setIdCliente(this.clientes.length + 1);
        clienteNovo.setNome(cliente.nome);
        clienteNovo.setCpf(cliente.cpf);
        clienteNovo.setTelefone(cliente.telefone);
        clienteNovo.setGenero(cliente.genero);
        clienteNovo.setNacionalidade(cliente.nacionalidade);

        // Cria a reserva do cliente
        ReservaService.criarReserva(
            cliente.reserva,
            clienteNovo.getIdCliente()
        );

        this.clientes.push(clienteNovo);
    }

    public buscarClientePorId(id: number) {
        const cliente = this.clientes.filter(
            (cliente) => cliente.getIdCliente() == id
        );
        return cliente[0];
    }

    public buscarClienteCompletoPorId(id: number) {
        const cliente = this.buscarClientePorId(id);
        const reservas = ReservaService.buscarReservaPorIdCliente(id);
        const quarto = QuartoService.buscarQuartoPorIdReserva(
            reservas.getIdReserva()
        );

        return {
            ...cliente,
            reserva: reservas,
            quarto: quarto,
        };
    }
}

export default new ClienteService();
