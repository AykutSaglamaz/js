//WARM UP QUESTION:
//write a code that return a random item from the array

let myArray=[3,10,'java','usa','javascript','dallas']

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]
console.log(randomItem);

console.clear()
/*
Spread Operator (... operator)
Spread operator is used to spread out data from arrays,objects, or functions
... is used in front of the arrays
We can use spread operator:
1. functions calls
2. array literals
3. objects literals
*/
//1. functions
var minNum = Math.min(45,32,19,100,25);
console.log(minNum);//19. because data is spread out. 5 different items
const tempratures = [45,32,19,100,25];
minNum=Math.min(tempratures);
console.log(minNum);//NaN. Because temprature is one single argument

//using spread operator
minNum=Math.min(...tempratures);//same as Math.min(45,32,19,100,25);
console.log(minNum);//19

//We can use use spread operator with strings
const favActors=["Jim","Angelina","Jack"]
console.log(favActors);//["Jim", "Angelina", "Jack"]
console.log(...favActors);//"Jim","Angelina","Jack"

//strings
const myFavNumber="8145941";
console.log(Math.min(myFavNumber));//145389
console.log(Math.min(...myFavNumber));//1
//We can pass strings direcly in functions with spread operator
console.log(Math.max(..."234521235720"));//7

/*2. Arrays
most common usage with spread operators
we can spread one array into another array
*/
const existingNums = [5,234,51,61]
const newNums = [6,1,8]
var allNums = [existingNums,newNums]
console.log(allNums);//[[5, 234, 51, 61], [6, 1, 8]]

//spread operator is used to combine the arrays
//we are getting the new array that has all exisiting and new number list
allNums = [...existingNums,...newNums]
console.log(allNums);//[5, 234, 51, 61, 6, 1, 8]

//ORDER MATTERS
allNums = [...newNums,...existingNums]
console.log(allNums);//[6, 1, 8, 5, 234, 51, 61]

//We can insert new items in the array
allNums = [1000,...newNums,true,...existingNums,'apple']
console.log(allNums);//[1000, 6, 1, 8, true, 5, 234, 51, 61, "apple"]

//We can do same thing with strings
const languages=['java','javascript','python']
const duty =['develop','test','deploy']
var skills=[...duty]
console.log(skills);//["develop", "test", "deploy"]
skills=[...languages,...duty]
console.log(skills);//["java", "javascript", "python", "develop", "test", "deploy"]
skills=['java','javascript',...duty,'cleaning']
console.log(skills);//["java", "javascript", "develop", "test", "deploy", "cleaning"]
//

let arr1 = [1,2,3,4,5,6];
let arr2 = ['a','b','c','d','e'];
​
arr2.splice(2,0,...arr1);
console.log(arr2);  
// ['a', 'b', 1, 2, 3, 4, 5, 6, 'c', 'd', 'e']

//We can use spread operator to get eh copy of the original array
//getting the copy of ht elanguages array
var copyOfLanguages=languages;
console.log(copyOfLanguages);//["java", "javascript", "python"]

//languages and copyOfLanguages are pointing same place in the memory
//If i make an update on one array the other one will be change as well
copyOfLanguages.push('rubby')
console.log(copyOfLanguages);//["java", "javascript", "python", "rubby"]
console.log(languages);//["java", "javascript", "python", "rubby"]


//With spread operator, we can maka a new bopy of the original array
//So when I edit copy, original will not be affected
var copyWithSpread=[...languages];
console.log(copyWithSpread);//["java", "javascript", "python", "rubby"]
copyWithSpread.push("Apex");
console.log(copyWithSpread);//"java", "javascript", "python", "rubby", "Apex"]
console.log(languages);//["java", "javascript", "python", "rubby"]
//When i make a change in the copy array, then the original is not affected


//3. Objects: spread operator can be used with objects
const fullName={
    fName:'James',
    lName:'Bond'
  }
  var userInfo={
    fullName,//fullName is inserted as an OBJECT
    id:1,
    username:'007'
  };
  console.log(userInfo);
  /*
  [object Object] {
    fullName: [object Object] {
      fName: "James",
      lName: "Bond"
    },
    id: 1,
    username: "007"
  }
  */
  userInfo={
    ...fullName,//fullName is inserted as an OBJECT
    id:1,
    username:'007'
  };
  console.log(userInfo);
