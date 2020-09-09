function cafeOrder(takeOutOrders, dineInOrders, servedOrders) {
  // declare variable takeOutIndex set equal to 0
  let takeOutIndex = 0;
  // declare variable dineInIndex set equal to 0
  let dineInIndex = 0;
  // declare variable takeOutMaxIndex set equal to takeOutOrders.length - 1
  let takeOutMaxIndex = takeOutOrders.length - 1;
  // declare variable dineInMaxIndex set equal to dineInOrders.length - 1
  let dineInMaxIndex = dineInOrders.length - 1;

  // iterate through servedOrders array starting at index 0
  for (let i = 0; i < servedOrders.length; i++) {
    let order = servedOrders[i];
    // if servedOrders at index is equal to takeOutOrders at same index
    if (
      takeOutIndex <= takeOutMaxIndex &&
      order === takeOutOrders[takeOutIndex]
    ) {
      // then increment takeOutIndex by 1 and go to the next item in the served Orders array
      takeOutIndex++;
      // else if servedOrders at index is equal to dineInOrders at same index
    } else if (
      dineInIndex <= dineInMaxIndex &&
      order === dineInOrders[dineInIndex]
    ) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  return true;
}

const take1 = [17, 8, 24];
const dine1 = [12, 19, 2];
const served = [17, 8, 12, 19, 24, 2];
console.log = cafeOrder(take1, dine1, served); // output: true

const take1 = [17, 8, 24];
const dine1 = [12, 19, 2];
const served = [17, 8, 12, 19, 3, 2];
console.log = cafeOrder(take1, dine1, served); // output false
