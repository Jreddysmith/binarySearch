a = [3, 8, 10, 20, 40, 50]


function binarySeach( sortedValues, target) {


	//if the low index is greater than the high index,
	// return null for not-found.
	function search(low, high) {
		if ( low > high) {
			return null;
		}


	//if the value at the low index is our target, return 
	//the low index.
		if (sortedValues[low] === target) {
			return low;
		}

	//If the value at the high index is our target, return 
	// the high index.

		if (sortedValues[high] === target) {
			return high;
		}

		//Find the middle index and median element.

		var middle = Math.floor( (low + high) / 2);
		var middleElement = sortedValues[middle];

		if (middleElement > target) {
			return search(low+1, middle);
		} else if (middleElement < target) {
			return search(middle, high-1);
		}
		// If middleElement === target, we can return that value.
		return middle;
	}
//Start our search between the first and last element of 
// the array.
return search(0, sortedValues.length-1);
}


