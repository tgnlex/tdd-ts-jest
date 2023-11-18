import myCalc from '../src/calc';


test('adds a + b to get c', () => {
	  expect(myCalc.add(4, 6)).toBe(10);
});
test('subtr a - b to get c', () => {
	expect(myCalc.subtract(10, 8)).toBe(2)
})

