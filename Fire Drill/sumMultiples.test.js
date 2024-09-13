const {sumMultiples} = require("./sumMultiples.js");
 

test("sumMultiples in number", ()=> {
	let sample = [30];
	let result = sumMultiples(sample);
	let expected = 15;
	expect(expected).toBe(result); 
}) 