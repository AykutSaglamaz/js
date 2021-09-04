/*
FUNCTIONS:
We can use a function and then declare the function
*/
console.clear();
//calling the function
add(2,5);//7

//declaring function
function add(x,y){
  console.log(x+y);
}

//calling the function
add(4,6);//10

//function = keyword, add = name of the function
//anonymous function = function with no name
//we can declare anonymous function and put in a variable

var sum = function (x,y){
  console.log(x+y);
}

//calling the function
sum();//NaN
sum(7,8)//15

//create anonymous function with 3 params
//then put result in a variable name total
//call the function to print the result
var addition = function (a, b, c){
    console.log(a+b+c);
} 
addition(2,3,4);//9