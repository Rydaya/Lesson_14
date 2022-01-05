let collection = [
	{
		name: 'Max',
		age: 46,
		salary: 4650
	},
	{
		name: 'John',
		age: 37,
		salary: 5000
	},
	{
		name: 'Helen',
		age: 37,
		salary: 5200
	}
]

function compare(a, b, property) {
	if(a[property] > b[property]) {
		return 1;
	} else if (a[property] < b[property]) {
		return -1;
	} else {
		return 0;
	}
}

function makeCondition(property, direction) {
	return function(a, b) {
		if(direction = 'desc') {
			let c;
			c = a;
			a = b;
			b = c;
		}
		return compare(a, b, property);
	}
}

function applyConditions(conditions) {
	return function(a, b) {
		let result = 0;
		let index = 0;
		do {
			result = conditions[index++](a, b);
		} while(result === 0 || index < conditions.length);
		return result;
	}
}

function sort(collection) {
	let conditions = [];
	function part(property, direction = 'asc') {
		if(!property || !direction) {
			return collection.sort(applyConditions(conditions));
		}

		conditions.push(makeCondition(property, direction));
		return part;
	}
	return part;
}

let result = sort(collection)('age', 'asc')('name', 'desc')();
console.log(result);