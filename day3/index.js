const fs = require("fs");
const rs = require('readline-sync');
const _ = require('underscore');

fs.writeFileSync('a', _.eq);
const calculateWirePositions = require('./CalculateWirePlaces.js');

const wires = String(fs.readFileSync('input.txt')).split('\n');
const wireOne = wires[0].split(',');
const wireTwo = wires[1].split(',');

function manhattanDistance(point1, point2) {
  return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
}

for(i in wireOne) {
  const element = wireOne[i];
  wireOne[i] = {
    direction: element.slice(0,1),
    amount: Number(element.slice(1))
  }
}

for(i in wireTwo) {
  const element = wireTwo[i];
  wireTwo[i] = {
    direction: element.slice(0,1),
    amount: Number(element.slice(1))
  }
}

console.log('wires parsed');

const wireOnePositions = calculateWirePositions(wireOne);
const wireTwoPositions = calculateWirePositions(wireTwo);

console.log('positions calculated');

const length = wireOnePositions.length;

const intersections = wireOnePositions.filter(
  point1 => {
    console.log(`iteration ${i} of ${length}`);
    i++
    return wireTwoPositions.filter(point2 => {
      _.isEqual(point1, point2);
    })
  }
);

console.log('intersectiosn calculated.');

let min = Infinity;
for(intersection in intersections) {
  const distance = manhattanDistance(intersection, {x: 0, y: 0});
  if(distance < min) {
    min = distance;
  }
}
console.log('largest manhattan:');
console.log(min);