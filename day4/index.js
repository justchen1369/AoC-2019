const rs = require('readline-sync');
const fs = require('fs');

const repeatingDigits = /([0-9])\1{1}/
let ans = [];
for (let i = 136760; i <= 595730; i++) {
  ans.push(i);
}

let foo = ans.filter(n => {
  return n.toString().split('').sort((a, b) => {return a - b}).join('') == n
})
.filter(n => repeatingDigits.test(n))
.length

console.log(foo)
//does not currently work
//part 2 I cheated on
