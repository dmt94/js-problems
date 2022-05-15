/*
In this kata, you will be given an array. Each value represents a meeting room.
Your job? Find the first empty one and return its index
(N.B. There may be more than one empty room in some test cases).

If all rooms are busy, return "None available!"
*/

function meeting(x) {
  if (!x.includes('O')) {
    return "None available!";
  }
  return x.indexOf('O');
}

console.log(meeting(['X', 'O', 'X']));