export default class Porta {
  #numero;
  #temPresente;
  #selecionada;
  #aberta;

  constructor(numero, temPresente, selecionada, aberta) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  constructor(numero, temPresente = false, selecionada=false, aberta=false) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  getNumero(){
    return this.#numero
  }
  
  getTempresente(){
    return this.#temPresente
  }
  
  getSelecionada(){
    return this.#selecionada
  }
  
  getAberta(){
    return this.#aberta
  }
}
