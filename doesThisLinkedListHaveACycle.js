/*
You have a singly-linked list↴ and want to check if
it contains a cycle.

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.
Write a function containsCycle() that takes the  rst node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.
*/

function constainsCycle(firstNode) {
  // start both slow and fast node at the first node
  let slowNode = firstNode;
  let fastNode = firstNode;

  // traverse the list until hitting the end of the list
  while (fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = slowNode.next.next;

    if (fastNode === slowNode) {
      return true;
    }
  }

  // if the fastNode hits the end of the list
  return false;
}
