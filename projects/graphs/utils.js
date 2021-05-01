// **** Create a stack class ****

export class Stack {
  constructor() {
    this.stack = [];
    // First In First Out
    // front --> Array[] <-- end
  }
  // **** METHODS ****

  // adds to the [] <-- end of stack array
  add(value) {
    this.stack.push(value);
  }

  // removes from front --> [] of stack array
  remove() {
    return this.stack.shift();
  }

  size() {
    return this.stack.length;
  }
}

// Create a Queue class
// enqueue
// dequeue
// size

