class Quarto {
  private numero: number;
  private andar: number;
  private tipo: string;
  private qntdCama: number;

  constructor(numero: number, andar: number, tipo: string, qntdCama) {
    this.numero = numero;
    this.andar = andar;
    this.tipo = tipo;
    this.qntdCama = qntdCama;
  }

  // getters
  public getNumero() {
    return this.numero;
  }

  public getAndar() {
    return this.andar;
  }

  public getTipo() {
    return this.tipo;
  }

  public getqntdCama() {
    return this.qntdCama;
  }
  // setters
  public setNumero(value: number) {
    this.numero = value;
  }

  public setAndar(value: number) {
    this.andar = value;
  }

  public setTipo(value: string) {
    this.tipo = value;
  }
}

export default Quarto;
