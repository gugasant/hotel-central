class Reserva {
    private dataIda:number
    private quantDias:number
    private quantPessoas:number
    
    constructor(dataIda:number, quantDias:number, quantPessoas:number){
        this.dataIda = dataIda;
        this.quantDias = quantDias;
        this.quantPessoas = quantPessoas;
    }
    
// getters
getDataIda(){
    return this.dataIda;
}
getQuantDias(){
    return this.quantDias;
}
getQuantPessoas(){
    return this.quantPessoas;
}

// setters
public setDataIda(value:number){
    this.dataIda = value
}
public setQuantDias(value:number){
    this.dataIda = value
}
public setQuantPessoas(value:number){
    this.quantPessoas = value
}
 }

    