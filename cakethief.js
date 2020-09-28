function maxDuffelBagValue(cakeTypes, capacity) {
  // create an array to hold the max values at each weight up to the capacity
  let maxValuesArray = new Array(capacity + 1).fill(0);

  // find the max value at each weight start from 0
  for (
    let currentCapacity = 0;
    currentCapacity <= capacity;
    currentCapacity++
  ) {
    // declare a variable for the currentMaxValue set to 0
    let currentMaxValue = 0;
    // iterate through the cakeTypes
    for (let j = 0; j < cakeTypes.length; j++) {
      const singleCake = cakeTypes[j];
      // account for a cakeTypes.weight of 0 and a positive value by returning infinity
      if (singleCake.weight === 0 && singleCake.value !== 0) {
        return Infinity;
      }
      // if the cakeTypes.weight is less than or equal to the currentCapacity
      if (singleCake.weight <= currentCapacity) {
        // declare a variable of maxValueUsingCake and set it equal to the cakeTypes.value + maxValuesArray[maxCapacity - cakeTypes.weight]
        let maxValueUsingCake =
          singleCake.value +
          maxValuesArray[currentCapacity - singleCake.weight];
        // currentMaxValue = Math.max(currentMaxValue, maxValueUsingCake)
        currentMaxValue = Math.max(currentMaxValue, maxValueUsingCake);
      }
    }
    // add the currentMaxValue to the maxValuesArray
    maxValuesArray[currentCapacity] = currentMaxValue;
  }

  // return the last item in the max values array
  return maxValuesArray[capacity];
}

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
