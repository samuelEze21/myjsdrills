const counterObj = {
		count: 4,
		step: 2
	};



function logcounterIncrement(counterobj) {
	for (let key in counterObj) { 
		if (counterObj.hasOwnProperty(key)) {
			value = counterObj[key];
        		console.log(key, value+1);
		}
	}
} 


logcounterIncrement(counterObj); 

