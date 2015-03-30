//ZachDickinson
// This code will sum an array of ints by using reduce
var list = [2, 4, 6, 8];

console.log(list.reduce(function(prevVal, currentVal) {
	return prevVal += currentVal;
}));

