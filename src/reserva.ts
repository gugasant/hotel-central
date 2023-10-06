class Reserva {
  private dataIda: number;
  private quantDias: number;
  private quantPessoas: number;
  private tipoQuarto: string;

  constructor(
    dataIda: number,
    quantDias: number,
    quantPessoas: number,
    tipoQuarto: string
  ) {
    this.dataIda = dataIda;
    this.quantDias = quantDias;
    this.quantPessoas = quantPessoas;
    this.tipoQuarto = tipoQuarto;
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

  // setters
  public setDataIda(value: number) {
    this.dataIda = value;
  }
  public setQuantDias(value: number) {
    this.dataIda = value;
  }
  public setQuantPessoas(value: number) {
    this.quantPessoas = value;
  }
}

export default Reserva;
