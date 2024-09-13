function findMax(arr) {

let largest_number = 0
	for (let number of arr){
		if (arr[number] > largest_number ){
			largest_number = arr[number]

}
}
		return largest_number
}

module.exports = {findMax}