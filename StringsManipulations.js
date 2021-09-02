/* 
Strings Manipulations:
*/
​
console.clear();

/*
ask: 
Create a prompt : “Write your tweet” —-> use prompt
Type ran
summ text and calculate the number of sent text and the remaining of sent text
Note Max character is 280.
*/
​
//Getting an input from user
let myTweet = prompt('Write your tweet');
​
let tweetLen=myTweet.length;
​
let maxLen=280;
​
console.log(`Sent : ${tweetLen}. Remaining : ${maxLen-tweetLen}`)