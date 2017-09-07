const rodolfo = (function() {
  "use strict";

  return {
    /**
     * Obtém o nome padrão do porquinho
     * @return {string} nome padrão
     */
    get defaultNome() {
      return "Rodolfo";
    },

    /**
     * Verificar estado do seu porquinho.
     * O estado será printado no console do navegador
     */
    get comoEstas() {
      console.log((!!this._nome ? this._nome : this.defaultNome) + "!?");

      let estado = this._verificarEstado();
      setTimeout(function () {
        console.log(estado);
      }, 2 * 1000);
    },

    /**
     * Dá nome ao seu pequeno porquinho
     * @param {string} nome nome desejado
     */
    darNovoNome(nome) {
      this._nome = nome;
    },

    /**
     * Verifica como está seu porquinho
     * @return {string} condição do seu porquinho
     */
    _verificarEstado() {
      if (this._calcularProbabilidade() > 80) {
        return "Sí, RESPIRA! :)";
      }
      return "NO respira! D:"
    },

    /**
     * Retorna número aleatório entre 1 e 100
     * @return {int} número aleatório
     */
    _calcularProbabilidade() {
      return Math.floor((Math.random() * 100) + 1);
    }
  }
}());
