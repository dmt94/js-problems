/* counts the number of factors of its number argument*/
function getDivisorsCnt(n) {
  for (let d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}