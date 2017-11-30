// ****************************************************************************************************
// singly linked list
// ****************************************************************************************************

let Node = function(value) {
  this.value = value;
  this.next = null;
}

let SinglyLinkedList = function() {
  this.head = null;
  this.count = 0;
}

SinglyLinkedList.prototype.length = function() {
  return this.count;
}

SinglyLinkedList.prototype.iterate = function(callback) {
  let current = this.head;
  while (current) {
    callback(current.value);
    current = current.next;
  }
}

SinglyLinkedList.prototype.reverse = function() {
  let current = this.head;
  let previous = null;
  let temp;

  while (current) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  this.head = previous
}

SinglyLinkedList.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  return this;
}

SinglyLinkedList.prototype.getIndex = function(value) {
  let index = 1;
  let current = this.head;
  while (current) {
    if (current.value === value) return index;
    current = current.next;
    index += 1;
  }
  return 'none';
}

SinglyLinkedList.prototype.unshift = function(value) {
  let newNode = new Node(value);

  if (!this.count) this.head = newNode;
  else {
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
  }
  this.count += 1;
  return this;
}

SinglyLinkedList.prototype.shift = function() {
  if (!this.count) throw new Error('Cannot shift empty list');
  if (this.count === 1) this.head = null;
  else this.head = this.head.next;
  this.count -= 1;
  return this;
}

SinglyLinkedList.prototype.pop = function() {
  if (!this.count) throw new Error('Cannot pop empty list');
  if (this.count === 1) this.head = null;
  else if (this.count === 2) this.head.next = null;
  else {
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next = null;
  }

  this.count -= 1;
  return this;
}

SinglyLinkedList.prototype.push = function(value) {
  let newNode = new Node(value);
  if (!this.count) this.head = newNode;
  else if (this.count === 1) this.head.next = newNode;
  else {
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next.next = newNode;
  }
  this.count += 1;
  return this;
}

SinglyLinkedList.prototype.insert = function(value, index) {
  if (index < 1) throw new Error('Invalid insert index'); 
  if (index > this.count + 1) throw new Error('Invalid insert index');
  if (index === 1) return this.unshift(value);
  if (index === this.count + 1) return this.push(value);
  else {
    let newNode = new Node(value);
    let count = 1;
    let current = this.head;

    while (count < index - 1) {
      current = current.next;
      count += 1;
    }
    let temp = current.next;
    current.next = newNode;
    current.next.next = temp;
  }

  this.count += 1;
  return this;
}

SinglyLinkedList.prototype.delete = function(value) {
  if (!this.count) throw new Error('Cannot delete from empty list');
  let current = this.head;
  let previous = null;
  while (current) {
    if (current.value === value) {
      if (!previous) return this.shift();
      else if (!current.next) previous.next = null;
      else previous.next = current.next;
      this.count -= 1;
      return this;
    }
    previous = current;
    current = current.next;
  }
  return 'none';
}

var list1 = new SinglyLinkedList();
