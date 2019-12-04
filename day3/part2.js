const fs = require("fs");
const rs = require('readline-sync');
const _ = require('underscore');
const calculateWirePositions = require('./CalculateWirePlaces.js');

const intersections = [{"x":-477,"y":1650},{"x":-182,"y":2596},{"x":-10,"y":2665},{"x":46,"y":2665},{"x":368,"y":2857},{"x":368,"y":2905},{"x":156,"y":3222},{"x":-83,"y":3222},{"x":382,"y":3163},{"x":433,"y":2905},{"x":382,"y":2904},{"x":-10,"y":2904},{"x":-35,"y":3222},{"x":-705,"y":2356},{"x":-1007,"y":2145},{"x":-1007,"y":1749},{"x":-541,"y":1701},{"x":24,"y":1650},{"x":1327,"y":873},{"x":1488,"y":873},{"x":1859,"y":768},{"x":1859,"y":493},{"x":1327,"y":575},{"x":1674,"y":493},{"x":1869,"y":493},{"x":1869,"y":768},{"x":1869,"y":936},{"x":1327,"y":1222},{"x":896,"y":1407}].map(point => JSON.stringify(point));
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

const wireOnePositions = calculateWirePositions(wireOne)
.map(point => JSON.stringify(point));
const wireTwoPositions = calculateWirePositions(wireTwo)
.map(point => JSON.stringify(point));

console.log(wireOnePositions.indexOf(intersections[0]) + wireTwoPositions.indexOf(intersections[0]) + 2)
