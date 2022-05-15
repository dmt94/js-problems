// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let user = {
  username: 'kireidoo',
  password: 'hunkleAndKirei',
}

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [
  {
    username: 'hunkle', timeline: 'let\'s gooo'
  }, 
  {
    username: 'kira', timeline: 'wooow time to meditate soon'
  }, 
  {
    username: 'bonbon', timeline: 'i am a bot...'
  }
];

let askUsername = prompt("What is your username?");
let askPassword = prompt("What is your password?");

signIn(askUsername, askPassword);

function signIn(username, password) {
  if (username === user.username && password === user.password) {
    console.log(newsfeed);
  } else {
    alert("Get out of here, bud");
  }
}
