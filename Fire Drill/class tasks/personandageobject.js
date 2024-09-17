const personObj = {
		firstName: "Samuel",
		lastName: "Kachi",
		Age: 25
	}


function logPersonFulldetials(personObj) {
	
	let {firstName, lastName, Age} = personObj;
	console.log(`firstName: ${firstName}, lastName: ${lastName}, Age: ${Age}`);

}


logPersonFulldetials(personObj);


