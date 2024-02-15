
import Block from "./Block.js";
import sha256 from "crypto-js"
class Blockchain {
    chain = []
    constructor() {
        this.createGenesisBlock();
    }

    createGenesisBlock() {
        let Genesis = new Block("Genesis Block", "N/A");
        Genesis = this.mine(Genesis);
        console.log("Genesis Block Mined");
        this.chain.push(Genesis);
    }

    mine(block) {
        console.log("Mining Block");
        while (block.hash.substring(0, 3) !== "000") {
            block.nonce++;
            block.hash = sha256.SHA256(block.timestamp + block.data + block.previousHash
                + block.nonce).toString();
        }
        console.log("Block Mined: " + block.hash);
        return block;

    }


    addBlock(data) {
        let previousBlock = this.chain[this.chain.length - 1];
        let newBlock = new Block(data, previousBlock.hash);
        newBlock = this.mine(newBlock);
        this.chain.push(newBlock);
    }




}

const blockchain = new Blockchain();
console.log(blockchain.chain);
blockchain.addBlock("2nd Block");
blockchain.addBlock("3rd Block");
blockchain.addBlock("4th Block");

