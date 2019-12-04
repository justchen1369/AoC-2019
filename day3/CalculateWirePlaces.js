module.exports = (wire) => {
  const wirePosition = {x: 0, y: 0}
  const wirePositions = [];

  for(element of wire) {
    const direction = element.direction;
    const amount = element.amount;

    let isPos
    let isX

    if(direction === 'U') {
      isPos = 1
      isX = false
    } else if(direction === 'D') {
      isPos = -1
      isX = false
      
    } else if(direction === 'L') {
      isPos = -1
      isX = true
      
    } else if(direction === 'R') {
      isPos = 1
      isX = true
      
    }
    
    for(let i = 0; i < amount; i++) {
      if(isX) {
        wirePosition.x += isPos
      } else if(!isX) {
        wirePosition.y += isPos
      }
      wirePositions.push({...wirePosition});
    }
  }
  return wirePositions
}

