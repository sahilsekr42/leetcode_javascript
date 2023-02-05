/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(([a,c], [b,d]) => d - c); 
    let currentSize = truckSize;
    let totalUnits = 0;
  
    for (let i = 0; i < boxTypes.length; i++) {
  
      if (currentSize >= boxTypes[i][0]) {
        totalUnits += boxTypes[i][0] * boxTypes[i][1];
        currentSize -= boxTypes[i][0];
      } else {
        totalUnits += currentSize * boxTypes[i][1];
        break;
      }
    }
  
    return totalUnits;
  };
  