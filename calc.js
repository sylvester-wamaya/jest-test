class Calc{
    constructor(a,b){
        this.a = a;
        this.b = b
    }
    sum(){
        return this.a + this.b
    }
    sub(){
        return this.a - this.b
    }
    divide(){
        return this.a / this.b
    }
    multiply(){
        return this.a * this.b
    }
}

const c = new Calc(8, 4)
console.log(c.sum())
console.log(c.sub())
console.log(c.divide())
console.log(c.multiply())
module.exports = Calc