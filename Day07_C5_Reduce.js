/* 
REDUCE:
ARRAY.reduce( (accumulator, eachItem) =>{
  body
}
)
Reduce is used to hold onto the the accumulated value
We can hold onto the each number from the array
Reduce iterates(loops through the array) and accumulates array values
*/
console.clear();
var numbers =[8,1,4,12,66,3]
/*
eachItem      :     1,      4,          12,            66,          3
accumulator.  : 8, 8+1=9, 8+1+4=13,  8+1+4+12=25,8+1+4+12+66=91,   91+3= 94  
*/
const result = numbers.reduce(  
  function(accumulator,eachNumber){  
    console.log('Accomulator : '+accumulator);//8,9,13,25,91
    console.log('Each Number : '+eachNumber);//1,4,12,66,3
    return accumulator+eachNumber;
  }
)
console.log(result);//94
//Using arrow function
const result1=numbers.reduce(
  (accumulator,eachNumber)=> accumulator+eachNumber
)
console.log(result1);//94


/*
Create an array [4,5,6,7,8,-3]
And return the sum of the number
*/
var narr = [4,5,6,7,8,-3]
const sum = narr.reduce(
    (sum, first)=>sum+first

)
console.log(sum);//27