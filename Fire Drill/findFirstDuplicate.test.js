const {findFirstDuplicate} = require("./findFirstDuplicate.js");
 

test("findFirstDuplicate in arr", ()=> {
	let total = [1,2,3,3,4,5,5,6];
	let result = findFirstDuplicate(total);
	let expected = 3;
	expect(expected).toBe(result); 
}) 