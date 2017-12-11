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

DoublyLinkedList.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return this;
}

DoublyLinkedList.prototype.getIndex = function(val) {
  let count = 1;
  let current = this.head;
  while (current) {
    if (current.val === val) return count;
    current = current.next;
    count += 1;
  }
  return 'none';
}

DoublyLinkedList.prototype.iterate = function(cb) {
  let current = this.head;
  while (current) {
    cb(current.val);
    current = current.next;
  }
}

DoublyLinkedList.prototype.reverse = function() {
  let current = this.head;
  let previous = null;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;

  return this;
}


DoublyLinkedList.prototype.push = function(value) {
  let newNode = new Node(value);
  if (!this.size) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.size += 1;
  return this;
}

DoublyLinkedList.prototype.pop = function() {
  if (!this.size) throw new Error('Cannot remove from empty list');
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
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

  this.size += 1;
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

DoublyLinkedList.prototype.insert = function(val, pos) {
  if (pos < 1) throw new Error('Cannot insert before list');
  if (pos > this.size) throw new Error('Cannot insert beyond list');
  if (pos === 1) return this.unshift(val);
  if (pos === this.size) return this.push(val);
  let newNode = new Node(val);
  let count = 1;
  let current = this.head;

  while (count < pos) {
    current = current.next;
    count += 1;
  }
  newNode.next = current.next;
  newNode.previous = current;
  current.next.previous = newNode;
  current.next = newNode;

  this.size += 1;
  return this;
}

DoublyLinkedList.prototype.delete = function(val) {
  if (!this.size) throw new Error('Cannot delete from empty list');
  let current = this.head;
  while (current) {
    if (current.val === val) {
      if (!current.previous) return this.shift();
      if (!current.next) return this.pop();
      current.previous.next = current.next;
      current.next.previous = current.previous
      this.size -= 1;
      return this;
    }
    current = current.next;
  }
  return this;
}

let list1 = new DoublyLinkedList();
