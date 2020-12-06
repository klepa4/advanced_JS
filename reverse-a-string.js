// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.










// function reverseString(str) {
// 	var arr = [];
// 	var i,lengthSize;
// 	lengthSize = str.length - 1;
// 	for( i = lengthSize; i >= 0; i-=1){
// 		arr.push(str[i]);
// 	}
// 	str = arr.join('');
// 	return str;
// }

// console.log(reverseString('hello'));


function reverseString(str) {
	var reversedStr = '',
	i,
	size = str.length - 1;
	
	for(i = size; i >= 0; i -= 1) {
		reversedStr += str[i];
	}
	
	return reversedStr;
}

console.log(reverseString('hello'));