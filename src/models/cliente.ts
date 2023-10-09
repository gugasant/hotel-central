class Cliente {
    private idCliente: number;
    private nome: string;
    private cpf: string;
    private telefone: string;
    private genero: string;
    private nacionalidade: string;

    constructor() {
        this.idCliente = 0;
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.genero = '';
        this.nacionalidade = '';
    }

    // getters
    public getIdCliente() {
        return this.idCliente;
    }

    public getNome() {
        return this.nome;
    }

    public getCpf() {
        return this.cpf;
    }

    public getTelefone() {
        return this.telefone;
    }

    public getGenero() {
        return this.genero;
    }

    public getNacionalidade() {
        return this.nacionalidade;
    }

    //setters
    public setIdCliente(value: number) {
        this.idCliente = value;
    }

    public setNome(value: string) {
        this.nome = value;
    }

    public setCpf(value: string) {
        this.cpf = value;
    }

    public setTelefone(value: string) {
        this.telefone = value;
    }

    public setGenero(value: string) {
        this.genero = value;
    }

    public setNacionalidade(value: string) {
        this.nacionalidade = value;
    }
}

export default Cliente;
