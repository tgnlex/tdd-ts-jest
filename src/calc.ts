export class calculator {
	add: Function;
	subtract: Function;
	constructor() {
		console.log("Calculator constructor");		
		this.add = (a:number, b:number) => a + b; 
		this.subtract = (a: number, b: number) => a - b;
	}
	
}
const myCalc = new calculator();
export default myCalc;
