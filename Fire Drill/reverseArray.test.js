const {reverseArray} = require("./reverseArray.js");
 

test("reverseArray in arr", ()=> {
	let sample = [2,3,4,5,6,7];
	let result = reverseArray(sample);
	let expected = [7, 6, 5, 4, 3, 2];
	expect(expected).toStrictEqual(result); 
}) 