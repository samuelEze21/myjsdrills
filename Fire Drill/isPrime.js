function isPrime(number) {

	if (number <= 1) return false; 
	if (number <= 3) return true;
	if (number % 2 == 0) return false;
	if (number % 3 == 0) return false; 

	for (index = number; index * index <= number; index += number) {
		if (number % index == 0 || number % (index + 2) == 0) return false; 
	}

	return true; 
	}

		

module.exports = {isPrime} 