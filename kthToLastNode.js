function kthToLastNode(k, headNode) {
  if (k < 1) {
    throw new Error("not possible to find less than first to last node");
  }
  // declare variable for storage set to empty array
  let storage = [];
  // declare variable currentNode set equal to the headNode
  let currentNode = headNode;

  // iterate through the list while there is a node.next value
  while (currentNode) {
    // add the node.value to the front of the storage array
    storage.unshift(currentNode.value);
    // set the currentNode variable equal to the currentNode.next node
    currentNode = currentNode.next;
  }

  // if k is greater than storage.length throw error
  if (k > storage.length) {
    throw new Error("k is larger than the length of the list");
  } else {
    // else return storage at k minus 1
    return storage[k - 1];
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new LinkedListNode("Angel Food");
const b = new LinkedListNode("Bundt");
const c = new LinkedListNode("Cheese");
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode("Eccles");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
kthToLastNode(2, a);
