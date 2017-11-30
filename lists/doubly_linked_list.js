// ****************************************************************************************************
//   doubly linked list
// ****************************************************************************************************

let Node = function(val) {
  this.val = val;
  this.next = null;
  this.previous = null;
}

let DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.length = function() {
  return this.size;
}

DoublyLinkedList.prototype.push = function(value) {
  let newNode = new Node(value);
  if (this.size) {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }

  this.size += 1;
  return this;
}

DoublyLinkedList.prototype.pop = function() {
  if (!this.count) throw new Error('Cannot remove from empty list');
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } 
  else if (this.size === 2) {
    this.tail = this.head;
    this.tail.next = null;
  } 
  else {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  this.size -= 1;
  return this;
}

DoublyLinkedList.prototype.unshift = function(value) {
  let newNode = new Node(value);
  if (!this.size) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  this.size -= 1;
  return this;
}

DoublyLinkedList.prototype.shift = function() {
  if (!this.size) throw new Error('Cannot remove from empty list');
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  }
  else if (this.size === 2) {
    this.head = this.tail;
    this.head.previous = null;
  }
  else {
    this.head = this.head.next;
    this.head.previous = null;
  }
  this.size -= 1;
  return this;
}

DoublyLinkedList.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return this;
}

DoublyLinkedList.prototype.reverse = function() {
  let current = this.head;
  let previous = null;
  let next = this.head.next;

  while (current) {
    let temp = current.next;
    current.next = previous;
    current.previous = next;
    previous = current;
    next = current.next;
    current = temp;
  }

  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;
}

let list1 = new DoublyLinkedList();
