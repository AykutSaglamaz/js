console.clear();

/*
Primitive Data Type in JS: 
string, number, boolean, null, undefined
*/
var name = 'javascript';
console.log(typeof(name));//"string"

var myName ="java"

console.log(typeof(myName));//"string"

/*
Number literal:
we only have number data type. No int, double, byte, short
*/

var myNum=20;
console.log(typeof(myNum));//"number"

var myNum=20.89;
console.log(typeof(myNum));//"number"

var myNum=20/0;
console.log(myNum);//Infinity
console.log(typeof(myNum));//"number"

//number+string

var num1 =20+"a";
console.log(num1);//"20a"

console.log(typeof(num1));//"string"



var num2 ="a"+20;
console.log(num1);//"a20"

console.log(typeof(num1));//"string"

/*
boolean: True or False

*/

var isExist=true
console.log(isExist);//true
console.log(typeof(isExist));//"boolean"


var isExist=false
console.log(isExist);//false
console.log(typeof(isExist));//"boolean"


/*
null
*/

var pickedColor =null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//"object"


/*
Undefined
*/

var selectedCar;

console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"



var selectedCar= undefined;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"