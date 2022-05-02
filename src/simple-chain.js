const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      throw new Error("You can't remove incorrect link!")
    }

    if (position<1 || position>this.chain.length){
      throw new Error("You can't remove incorrect link!")
    }

    this.chain.splice(position-1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const result = this.chain.map(ch => `( ${ch} )`).join("~~")
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
