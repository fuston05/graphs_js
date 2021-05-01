// **** Create a stack class ****

class Stack {
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

// **** Create a Queue class ****
class Queue {
  constructor() {
    this.queue = [];
    // Last In First Out
    //  end --> [] <-- front
  }

  // **** METHODS ****

  // ADDS to the [] <-- front of queue array
  enqueue(value) {
    this.queue.push(value);
  }

  // REMOVES from the [] <-- front of queue array
  dequeue() {
    return this.queue.pop();
  }

  size() {
    return this.queue.length;
  }
}

module.exports = {
  Stack,
  Queue,
};
