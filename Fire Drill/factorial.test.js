const {factorial} = require("./factorial.js");
 

test("factorial in arr", ()=> {
	let sample = [5];
	let result = factorial(sample);
	let expected = 120;
	expect(expected).toBe(result); 
}) 