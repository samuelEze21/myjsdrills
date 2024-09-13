function findFirstDuplicate(arr) {

	let duplicate_list = new Set([]); 
	for (let index = 0; index < arr.length; index ++) {
		if (duplicate_list.has(arr[index])) {
			return arr[index]; 
		}
		duplicate_list.add(arr[index]); 
	}
	return -1
   }


module.exports = {findFirstDuplicate}

