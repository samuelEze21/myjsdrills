const {sumEvenNumbers} = require("./sumEvenNumber.js");
 

test("sumEvenNumbers in arr", ()=> {
	let total = [1,2,3,4,5,6];
	let result = sumEvenNumbers(total);
	let expected = 12;
	expect(expected).toBe(result); 
}) 