const {isPrime} = require("./isPrime.js");
 

test("isPrime in arr", ()=> {
	let sample = [8];
	let result = isPrime(sample);
	let expected = false;
	expect(expected).toBe(result); 
}) 