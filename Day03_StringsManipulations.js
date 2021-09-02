
/*
String Methods
Method	Description
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an existing string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host’s locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host’s locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
*/

/*
String Manipulations:Day03_StringManipulationss3.js
*/
console.clear();
//concat() : used to concatanate the strings
let fName='John'
let lName='Walker'
console.log(fName+' '+lName);//"John Walker
console.log(fName.concat(lName));//"JohnWalker"
//trim() : remove spaces from the beginning and the end
let words = ' Today is Wednesday '
let trimmed=words.trim();
console.log(trimmed);//"Today is Wednesday"
//charAt('index') : return the character at that index. index starts from 0
let charAtT=words.charAt(4)
console.log(charAtT);//a
//split('charter'): returns an array that is splitted from this character
let splitted = words.split(' ');//split words from ' ' and return as array
console.log(splitted);//["", "Today", "is", "Wednesday", ""]
let trimSplitted=trimmed.split(' ')
console.log(trimSplitted);//["Today", "is", "Wednesday"]
let states="AL,AK,AZ,AR,TX,NY,NF,FL";
let listOfStates=states.split(',');
console.log(listOfStates);//["AL", "AK", "AZ", "AR", "TX", "NY", "NF", "FL"]