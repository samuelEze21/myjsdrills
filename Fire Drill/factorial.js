function factorial(number) {

let factor_of_number = 1

	for (index = 1; index <= number; index++) {
		factor_of_number = factor_of_number * index; 
	}
			return factor_of_number
}


module.exports = {factorial} 