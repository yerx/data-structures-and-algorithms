// write a function to find the rectangular intersection of two rectangles

function findRangeOverlap(point1, length1, point2, length2) {
  // find the highest start point and the lowest end point
  // the highest start point is the start point of the overlap
  // the lowest end point is the end point of the overlap
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return (startPoint: null), (overlapLength: null);
  }

  // compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
}

function findRectangularOverlap(rect1, rect2) {
  // get the x and y overlap points and lengths
  const xOverlap = findRangeOverlap(
    rect1.leftX,
    rect1.width,
    rect2.leftX,
    rect2.width
  );

  const yOverlap = findRangeOverlap(
    rect1.bottomY,
    rect1.height,
    rect2.bottomY,
    rect2.height
  );

  // return null if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}

// determine whether two rectangles overlap
function itIntersects(rec1, rec2) {
  // declare variable rec1XEnd set equal to rec1 leftX plus rec1 width
  const rectangle1XEnding = rec1.leftX + rec1.width;
  // declare variable rec1Yend set equal to rec1 bottomY plus rec1 height
  const rectange1YEnding = rec1.bottomY + rec1.height;

  // declare variable rec2XBegnning set equal to rec2 leftX
  const rectangle2XBeginning = rec2.leftX;
  // declare variable rec2YBeginning set equal to rec2 bottomY
  const rectangle2YBeginning = rec2.bottomY;

  // if rec1XEnd is greater than rec2XBeginning
  if (
    rectangle1XEnding > rectangle2XBeginning &&
    rectange1YEnding > rectangle2YBeginning
  ) {
    return true;
  } else {
    return false;
  }
}

// examples
const rectangle1 = {
  leftX: 1,
  bottomY: 3,
  width: 3,
  height: 4,
};

const rectangle2 = {
  leftX: 3,
  bottomY: 5,
  width: 3,
  height: 4,
};

const rectangle3 = {
  leftX: 5,
  bottomY: 8,
  width: 4,
  height: 4,
};

const rectangle4 = {
  leftX: 1,
  bottomY: 8,
  width: 3,
  height: 4,
};

const rectangle5 = {
  leftX: 0,
  bottomY: 1,
  width: 2,
  height: 10,
};

console.log(itIntersects(rectangle1, rectangle2) === true);
console.log(itIntersects(rectangle1, rectangle3) === false);
console.log(itIntersects(rectangle1, rectangle4) === false);
console.log(itIntersects(rectangle1, rectangle5) === true);
