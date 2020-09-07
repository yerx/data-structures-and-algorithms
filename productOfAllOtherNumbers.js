function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error(
      "Getting the product of numbers at other indices requires at least two items in the array"
    );
  }

  // delcare variable to hold result
  const productsOfAllIntsExceptAtIndex = [];

  // declare variable to store the total product so far
  let productSoFar = 1;

  // iterate through the array and store the product of all the integers before the indexed item of interest
  for (let i = 0; i < intArray.length; i++) {
    // push the productSoFar to the result array at index i
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    // multiply productSoFar by the current item in the array
    productSoFar *= intArray[i];
  }

  // iterate through the array in reverse, take the item in the array and multiply it by the product before that index, which is currently stored in the result array
  productSoFar = 1;
  for (let k = intArray.length - 1; k >= 0; k--) {
    productsOfAllIntsExceptAtIndex[k] *= productSoFar;
    productSoFar *= intArray[k];
  }

  // return result array
  return productsOfAllIntsExceptAtIndex;
}

// test cases
let array1 = [1, 4, 7];
console.log(getProductsOfAllIntsExceptAtIndex(array1));
