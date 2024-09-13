function sumEvenNumbers(arr) {
let sum = 0
	for (let number of arr){
		if (arr[number] % 2 == 0){
		sum+=arr[number]
}
}
		return sum
}



module.exports = {sumEvenNumbers} 






















