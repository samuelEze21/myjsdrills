const {findMax} = require("./findMax.js");
 
test("findMax in arr", ()=> {
	let total = [1,2,3,4,5,6];
	let result = findMax(total);
	let expected = 6;
	expect(expected).toBe(result); 
}) 