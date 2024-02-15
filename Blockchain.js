
import Block from "./Block.js";
import sha256 from "crypto-js"
class Blockchain {
    chain = []
    constructor() {
        this.createGenesisBlock();
    }

    createGenesisBlock() {
        let Genesis = new Block("Genesis Block", "N/A");
        // Genesis = this.mine(Genesis);
        console.log("Genesis Block Mined");
        this.chain.push(Genesis);
    }

    mine(block) {
        // get the block
        // hash the block
        // check if the hash meets the difficulty
        // if not, keep hashing
        // if yes, return the block

    }



    addBlock(data) {
        let previousBlock = this.chain[this.chain.length - 1];
        let newBlock = new Block(data, previousBlock.hash);
        // newBlock = this.mine(newBlock);
        this.chain.push(newBlock);

    }




}

const blockchain = new Blockchain();
console.log(blockchain.chain);
blockchain.addBlock("2nd Block");
blockchain.addBlock("3rd Block");
blockchain.addBlock("4th Block");

