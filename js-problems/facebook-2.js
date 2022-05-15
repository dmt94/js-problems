let database = [
  {
    username: 'kireidoo',
    password: 'hunkleAndKirei',
  },
  {
    username: 'kirei-chan',
    password: 'kireiAwesome',
  },
  {
    username: 'hunkle',
    password: 'bossman',
  },
  {
    username: 'potato',
    password: 'carrots',
  }
];

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

signIn();

function isUserValid(usr, pw) {
  if ((database.filter(obj => {
   obj.username === usr && obj.password === pw;
  })).length === 0) {
    return false;
  } else {
    return true;
  }
}

function signIn() {
  if (isUserValid(askUsername, askPassword)) {
    console.log(newsfeed);
  } else {
    alert("Oops. Wrong credentials.");
  }
}



