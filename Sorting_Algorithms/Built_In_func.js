/**
 * JavaScript has a built in sort function BUT
 * takes Each character's UniCode point value
 *
 * The built-in sort method accepts an optional COMPARATOR function
 * --> Use it to tell JavaScript how you want it to sort
 *
 * Example below
 *  IF you don't want to use the Unicode
 */

function numberCompare(num1, num2){
    return num1 - num2;
}

function compareByLen(str1, str2){
    return str1.length - str2.length;
}





console.log("Without the optional comparator function")
console.log([6, 4, 15, 10].sort())

console.log("With optional comparator function")
console.log([6, 4, 15, 10].sort(numberCompare))
