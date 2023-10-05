class Quarto {
  private numero:number
  private andar:number
  private tipo:string

  constructor(numero:number, andar:number, tipo:string) {
    this.numero = numero
    this.andar = andar
    this.tipo = tipo
  }

  // getters
  public getNumero() {
    return this.numero
  }

  public getAndar() {
    return this.andar
  }

  public getTipo() {
    return this.tipo
  }

  // setters 
  public setNumero(value:number) {
    this.numero = value
  }

  public setAndar(value:number) {
    this.andar = value
  }

  public setTipo(value:string) {
    this.tipo = value
  }
}