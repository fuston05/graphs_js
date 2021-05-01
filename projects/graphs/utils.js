// Create a stack class
export class Stack {
  constructor() {
    this.stack = [];
    // First In First Out
    // front --> Array[] <-- end
  }
  // **** METHODS ****

  // push
  push(value) {
    // adds to the [] <-- end of stack array
    this.stack.push(value);
  }
  // pop
  pop() {
    // removes from front --> [] of stack array
    return this.stack.shift();
  }
  // size
  size() {
    return this.stack.length;
  }
}

// Create a Queue class
// enqueue
// dequeue
// size

