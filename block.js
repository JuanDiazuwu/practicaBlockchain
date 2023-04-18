const SHA256 = require('crypto-js/sha256');

class Block {
    // Index = posición del bloque en la cadena
    // Data = contenido de la cadena de bloques
    // pre ID Hash = valor del bloque anterior en la cadena
    // date = fecha de creación del bloque
    // hash = validación como cadena original
    // Nounce = número aleatorio de la cadena de bloques
    constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
        this.nounce = 0;
    }

    createdHash(){
        const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
        return SHA256(originalChain).toString();
    }

    mine(diff){
        while(!this.hash.startsWith(diff)){
            this.nounce++;
            this.hash = this.createdHash();
        }
    }

}

module.exports = Block;