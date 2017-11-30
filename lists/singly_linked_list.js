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

SinglyLinkedList.prototype.insert = function(value, index) {
  if (index < 1) throw new Error('Cannot insert into list position less than one'); 
  if (index > this.count + 1) throw new Error('Cannot insert into position beyond list size');
  if (index === 1) return this.unshift(value);

  let newNode = new Node(value);
  let count = 1;
  let current = this.head;
  let previous = null;

  while (count <= index) {
    if (count === index) {
      previous.next = newNode;
      previous.next.next = current;
      break;
    }
    previous = current;
    current = current.next;
    count += 1;
  }
  this.count += 1;
  return this;
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
  return this
}

SinglyLinkedList.prototype.delete = function(value) {
  if (!this.count) return 'none';
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

SinglyLinkedList.prototype.push = function(value) {
  return this.insert(value, this.count + 1);
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

var list1 = new SinglyLinkedList();

