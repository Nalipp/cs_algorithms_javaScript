// ****************************************************************************************************
//   doubly linked stack
// ****************************************************************************************************

let Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let DoublyLinkedStack = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedStack.prototype.length = function() {
  return this.size;
}

DoublyLinkedStack.prototype.peek = function() {
  if (!this.head) throw new Error('Cannot peek empty stack');
  return this.head.value;
}

DoublyLinkedStack.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.val); 
    current = current.next;
  }
  return this;
}

DoublyLinkedStack.prototype.push = function(val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.size += 1;
  return this;
}

DoublyLinkedStack.prototype.pop = function() {
  if (!this.tail) throw new Error('Cannot pop entpy stack');
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  this.size -= 1;
  return this;
}

let stack1 = new DoublyLinkedStack();
stack1.push(12);
stack1.push(23);
stack1.push(44);
stack1.push(56);
console.log('length', stack1.length());
stack1.pop();
console.log('length', stack1.length());
stack1.print();
console.log(stack1);

