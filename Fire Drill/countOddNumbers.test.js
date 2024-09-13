const {countOddNumbers} = require("./countOddNumbers.js");
 

test("countOddNumbers in arr", ()=> {
	let sample = [1,2,3,4,5,6,7,8,9,10];
	let result = countOddNumbers(sample);
	let expected = 5;
	expect(expected).toBe(result); 
}) 