const string = "sumitsingh"
console.log(typeof(string))
console.log(string.__proto__)

console.log(string[0])
console.log(string.charAt(3))
console.log(string.indexOf('i'))

const newString = string.substring(0,4)
console.log(newString);

const anotherString = string.slice(-8,4)
console.log(anotherString);