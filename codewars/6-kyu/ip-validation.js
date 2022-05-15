/* identify valid IPv4 addresses in dot-decimal format
IPs are considered valid if they consist of [4 octets],
with values between 0 - 255

Examples of valid inputs:
1.2.3.4
123.45.67.89

invalid:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089


- Leading zeros (e.g. 01.02.03.04) are considered invalid

- Inputs are guaranteed to be a single [string]
*/

function validIP(str) {
  let stringArray = str.split('.');

  if (str === '') {
    return false;
  }

  if (str === ' ') {
    return false;
  }

  if (stringArray.length !== 4) {
    return false;
  }

  

  for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
    if (stringArray[i].indexOf('0') === 0) {
      return false;
    }
    if (Number(stringArray[i]) <= 0 || Number(stringArray[i]) >= 255) {
      return false;
    }
    if (Number(stringArray[i]) === NaN) {
      return false;
    }
    if (stringArray[i].includes(' ')) {
      return false;
    }
  }

  return true;

}//end of function

console.log(validIP('01.002.03'));
console.log(validIP('1.2.3.4'));
console.log(validIP('123.45.67.89'));

console.log(validIP(('1.2.3')));
console.log(validIP(('1.2.3.4.5')));
console.log(validIP(('123.456.78.90')));
console.log(Number(('bc64')));
