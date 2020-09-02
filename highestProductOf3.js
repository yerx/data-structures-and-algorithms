function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error("Fewer than 3 items");
  }

  // declare variables for highest and lowest num in the array
  // set the highest num at the maximum of array item index 0 and 1
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  // set the lowest num at the minimum of array item index 0 and 1
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  // declare variable for highestProductOf2
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // declare variable for lowestProductOf2
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // declare variable for highestProductOf3 set equal to the product of first 3 items in array
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // iterate through the array starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    // find the maximum of the current highestProductOf3, current num * highestProductOf2, current num * lowestProductOf2
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // check if there is a new highestProductOf2
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // check if there is a new lowestProductOf2
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // check if there is a new highest
    highest = Math.max(highest, current);

    // check if there is a new lowest
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

// test case
const array1 = [1, 3, 4, 2, 5];
console.log(highestProductOf3(array1));
