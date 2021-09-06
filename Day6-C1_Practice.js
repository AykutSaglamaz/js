console.clear()
/*
get one side of the square from the user and print the are of the square
*/
​
​
function squareArea(a){
    return(a**2);
  }
  
  console.log("The area: " +squareArea(2));
  
  /*
  get the sides of rectangles and print the perimeter of the rectangle
  */
  
  function periRect(length,breath){
    
    return(2*(length+breath));
  
  }
  console.log("Perimeter of the rectangle is "+periRect(2,4));
  
  //get the radius and print area of circle
  const areaCircle = function () {
   const radius = prompt("radius ?");
    if (!(radius / radius == 1)) throw new Error("raidus must be a number");
    return Math.PI * radius ** 2;
  }
  
  console.log(areaCircle())
  
  /*
Take height and weight from user and give 
the body mass index rounded to the closest whole number
​
bmi = weight/(height*height)
  
*/
​
function bmiCalculator(height,weight){
    return(Math.round(weight/(height**2)));
  }
  
  let bmi = bmiCalculator(50,200000);
    
  console.log(`The bmi value is ${bmi}`);
​
​
​
  //find leap years
  /*
​
Write a program to determine if the give year is a leap year.
​
Write a function : isLeap,
-> divisible by 4;
-> but not divisible by 100
->unless divisible by 400
​
eg: 
2016-> leap
1900-> not leap
​
*/
  //1.Way
  function leap (year){
    return (year %100===0) ? (year %400===0) : (year%4===0); 
  }
  
  console.log(leap(2100))
  
  //2.Way
function leapyear(n){
  if(n%4!=0)return false; 
  else if(n%400==0)return true; 
    else if(n%25==0)return false; 
  return true;
}
  
  console.log(leapyear(2000))
​
  //3.Way
function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return ("Leap");
            }
            else {
                return ("Not Leap");
            }
        }
        else {
            return ('Leap Year');
        }
    }
    else {
        return ('Not Leap Year');
    }
}
​
//4.way
function isLeap(year) {
    
    return (year%4==0?(year%100==0?( year%400==0?'Leap Year':'Not Leap' ):'Leap Year' ):'Not Leap');
} 
  
  console.log(isLeap(1900));
/*
create a function to select a random person from the list
*/
/*
​
Write a function whoPays(){}
​
This functions selects a random person from names array and returns that person
​
Make sure your code for works different array sizes.
Eg:
var names =["Sam","Tom",Cindy","Cole","Jim"];
Use Math.random() to get a random number
Use that number as index of array to get random name
​
*/
//1.Way
  const names = ["Sam", "Tom", "Cindy", "Cole", "Jim"];
  const whoPays = function (names) {
    console.log(names[Math.trunc(Math.random() * 5)]);
  };
  whoPays(names);
  
//2.Way:
​
function whoPays(names){
​
    var numOfPeople = names.length;
    var randomNumber=Math.floor(Math.random()*numOfPeople);
    var randomName = names[randomNumber];
    return`${randomName} pays the bill`;
  
  }
  
  var names = ['Sam','Tom','Cindy','Jim'];
  
  console.log(whoPays(names));
​
/*
Create a function which returns the number of true values there are in an array
countTrue([true,false,true,true]) -> 3
countTrue([true,false]) -> 1
*/
//1.way
function countTrue(arr){
    return array.filter(t=>t==true).length;
}
​
arr[true,false,true,true]
console.log("count of trues: "+ countTrue(arr));
//2.way
function countTrue(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===true){
        count++;
      }
    }
    return count;
  }
  
  arr = [true,false,true,true];
  
  console.log("The count of true is : "+countTrue(arr));
​
​
​
  /*
2.A repdigit is a positive number composed out of the same digit.
Create a function that takes an integer and returns whether it's a repdigit or not.
isRepdigit(66) ➞ true isRepdigit(6666) ➞ true isRepdigit(0) ➞ true isRepdigit(-11) ➞ false
  */
function isRepDigit(num){
  
    num +="";
    
    for(i=0;i<num.length;i++){
      
      if(num[i]!=num[0])
        {
          return false;
        }
    }
    return true;
  }
  
  console.log(isRepDigit(2222));
​
​
//Another way:
const isRepdigit = (number) => {
    let arr = number.toString()
    let result = false;
    if (number < 0) {
      return false;
    } else if (number === 0) {
      result = true;
    } else for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        result = true;
      }
    }
  return result;
  }
​
/*
Create a function that counts the integer's number of digits.
*/
function count (number){
    return (Math.abs(number) + "").length;
}​
console.log(count(-12673));
​
​
​
/* 
Create a function to return 
the second largest number from an array
​
Sort the array in descending order -> Take the 2 value 
*/
​
function secondLargest(arr){
    arr = arr.sort(function(a,b){
      return b-a;
    });
     return arr[1];
   }
   
   let arr = [100,5,2,10];
   
   console.log("The second largest value is "+secondLargest(arr));
​
 //another way but not sure if working fine???
   arr.sort((a,b)=> a-b)[arr.length-2];
​
/*
Get both sides of the triangle and print the hypothenuse of the triangle. 
Round your answer to the nearist whole number.
*/
function calculateHypothenuse(base, altitude){
    return Math.round(Math.sqrt(base**2 + altitude**2));
  }
  
  var altitude = prompt("enter altitude(h)")
  var base = prompt("enter base")  
  var hype = calculateHypothenuse(base, altitude);
  
  console.log(`The hypothenuse value for base: ${base}  altitude: ${altitude} is: ${hype}`);
​
​
/*
create a function customerInfo
it takes 2 params: name and cardNum
returns thhe info as following:
Customer first Letter in Caps and rest is masked(not visible)
customer card number firs 12 digit is masked. and last 4 digit is visible
​
Name = Johnny Cash
Card Num = 1234 1234 1234 5684
J*********
**** **** **** 5684
1)take first letter -> Make it UpperCase
2) take the rest -> replace with *
3) print 12 '*' 
4) print the last 4 digits of the credit card.
*/
function customerInfo(name,cardNum){
  
    var firstLetter = name.slice(0,1).toUpperCase();
    var restOfName = name.slice(1).replaceAll(/[a-zA-Z]/gi,'*');
   var specialChars = '\n************';
   var last4Digits = cardNum.slice(12,16);
   
   return ( firstLetter + restOfName + specialChars + last4Digits);   
 }
 
 console.log(customerInfo('FowadHamza','1234567890123456'));