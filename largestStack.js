class MaxStack {
  // create two new stacks, one to hold all values and one to hold the max values
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  // add an item to the top of the stack
  // if the item is greater than or equal to the last item in maxesStack, add it to the maxesStack
  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
  }

  // when an item is removed from the stack, if it equals
  // the top item in maxesStack, then pop the item from maxesStack too
  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  // get the last item in the maxesStack, which is the largest item in the stack
  getMax() {
    return this.maxesStack.peek();
  }
}
