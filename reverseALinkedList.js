function reverse(headOfList) {
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  // traverse the linkedList once
  while (currentNode) {
    // store the next Node before manipulating the linkedList
    nextNode = currentNode.next;

    // make the pointer of the current node point to the previous node
    currentNode.next = previousNode;

    // step forward in the list
    // set previous node to current node
    previousNode = currentNode;
    // set current node to the next node
    currentNode = nextNode;
  }

  return currentNode;
}
