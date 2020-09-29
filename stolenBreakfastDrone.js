function findDrone(array) {
  // create an empty object to keep track of the drone IDs
  let trackDrones = [];
  // iterate through the drone array
  for (let i = 0; i < array.length; i++) {
    // if the ID does not exist in the empty object, then add the ID as both a key and value to the object
    let droneID = array[i];
    if (!trackDrones.hasOwnProperty(droneID)) {
      trackDrones[droneID] = droneID;
    } else {
      // if the ID does exist, then delete the property from the object
      delete trackDrones[droneID];
    }
  }
  // return the sole value in the object
  return trackDrones[Object.values(trackDrones)[0]];
}

const array = [30, 20, 25, 30, 20];
console.log(findDrone(array)); // output 25
