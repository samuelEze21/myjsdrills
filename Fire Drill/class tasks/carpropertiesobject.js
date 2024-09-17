const carObject = {
		make: "Toyota",
		model: "camry",
		year: "2021"
	};


function logCarProperties(carObj) {
	for (let key in carObj) { 
		if (carObj.hasOwnProperty(key)) {
			value = carObj[key];
        		console.log(key, value);
		}
	}
} 


logCarProperties(carObject); 




