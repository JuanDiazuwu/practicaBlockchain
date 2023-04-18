//const Block = require('./block');
const Blockchain = require('./blockchain');

const blockchain = new Blockchain('Hello World');

let i = 2
while(i != 11){
    blockchain.addBlock(`Datos del bloque numero: ${i}`);
    i++;
}

console.log(blockchain);