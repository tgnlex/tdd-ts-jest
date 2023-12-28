export type Args = number;
export type Operation = (a: Args, b: Args) => number | null;
 class Calculator {
   
    add: Operation
    subtract: Operation
    multiply: Operation
    divide: Operation;
    constructor() {
        this.add = (a: Args, b: Args) => a + b; 
        this.subtract = (a:Args, b:Args) => a - b;
        this.multiply = (a:Args, b:Args) => a * b;
        this.divide = (a:Args, b:Args) => a / b;
 }
}

export default Calculator;