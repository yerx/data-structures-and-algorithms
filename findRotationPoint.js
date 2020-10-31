function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    // find the halfway point
    const halfwayIndex = Math.floor(
      floorIndex + (ceilingIndex - floorIndex) / 2
    );

    console.log(halfwayIndex);

    // if the halfwayIndex is after the first word or is the first word
    if (words[halfwayIndex] >= firstWord) {
      // go right
      floorIndex = halfwayIndex;
    } else {
      // go left
      ceilingIndex = halfwayIndex;
    }

    // if floor and ceiling are the same
    if (floorIndex + 1 === ceilingIndex) {
      break;
    }
  }

  return ceilingIndex;
}

const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here! at index 5
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
];

console.log(findRotationPoint(words));
