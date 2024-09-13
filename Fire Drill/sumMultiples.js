function sumMultiples(number) {

let sum_multiples_of_Three_Five = 0

	for(index = 3; index < number; index++ ){
		if (index % 3 == 0 && index % 5 == 0){
			sum_multiples_of_Three_Five += index; 
 }			
}
		return sum_multiples_of_Three_Five
}

module.exports = {sumMultiples} 