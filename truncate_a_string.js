// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given 
// maximum string length (second argument). 
// Return the truncated string with a ... ending.


function truncateString(str, num) {
    if (str.length <= num) return str;
    var result = "";
    for (var i=0; i < num; i++) {
        result += str[i];
    }
    if (num < str.length) {
        result = result + "...";
    } 
    return result;
}