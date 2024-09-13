function countOddNumbers(arr) {
let oddCount = 0
	for (let number in arr){
		if (arr[number] % 2 != 0)
			oddCount += 1
}
		return oddCount
}


module.exports = {countOddNumbers} 