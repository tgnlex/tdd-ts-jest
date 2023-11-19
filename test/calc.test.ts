import {calcAdder} from '../src/calc';
function TestAdder() {
	if (calcAdder(4, 6) === 10) {
		console.log('Test Passed')
	}
	else {
		console.error("Test Failed ")
	}
}

TestAdder()