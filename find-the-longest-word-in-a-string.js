// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
	var words = str.split(' ');
	var maxLength = 0;
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > maxLength) {
		maxLength = words[i].length;
		}
	}
	return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));