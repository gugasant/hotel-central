class Quarto {
  private numeroQuarto:number
  private andarQuarto:number
  private tipoQuarto:string

  constructor(numeroQuarto:number, andarQuarto:number, tipoQuarto:string) {
    this.numeroQuarto = numeroQuarto
    this.andarQuarto = andarQuarto
    this.tipoQuarto = tipoQuarto
  }

  // getters
  public getNumero() {
    return this.numeroQuarto
  }

  public getAndar() {
    return this.andarQuarto
  }

  public getTipo() {
    return this.tipoQuarto
  }

  // setters 
  public setNumero(value:number) {
    this.numeroQuarto = value
  }

  public setAndar(value:number) {
    this.andarQuarto = value
  }

  public setTipo(value:string) {
    this.tipoQuarto = value
  }
}