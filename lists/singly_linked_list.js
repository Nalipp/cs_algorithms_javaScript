// ****************************************************************************************************
// linked list
// ****************************************************************************************************

let Node = function(value) {
  this.value = value;
  this.next = null;
}

let LinkedList = function() {
  this.head = null;
  this.count = 0;
}

LinkedList.prototype.length = function() {
  return this.count;
}

LinkedList.prototype.push = function(value) {
  let newNode = new Node(value);

  if (this.count) {
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  } else {
    this.head = newNode;
  }

  this.count += 1;
  return this;
}

LinkedList.prototype.pop = function() {
  if (!this.count) return this;
  if (this.count === 1) this.head = null;
  else if (this.count === 2) this.head.next = null;
  else {
    let previous = this.head;
    let current = this.head.next;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  this.count -= 1;
  return this;
}

LinkedList.prototype.getIndex = function(value) {
  let index = 1;
  let current = this.head;
  while (current) {
    if (current.value === value) return index;
    current = current.next;
    index += 1;
  }
  return 'none';
}

LinkedList.prototype.delete = function(value) {
  let current = this.head;
  let previous = null;
  while (current.value) {
    if (current.value === value) {
      if (!previous) return this.deleteFirst();
      else if (!current.next) previous.next = null;
      else previous.next = current.next;
      this.count -= 1;
      return this;
    }
    previous = current;
    if (current.next) current = current.next;
    else return this;
  }
}

LinkedList.prototype.insert = function(value, index) {
  if (index > this.length()) return this.push(value);
  if (index <= 1) return this.insertFirst(value);

  let newNode = new Node(value);
  let count = 1;
  let current = this.head;
  let previous = null;

  while (count <= index) {
    if (count === index) {
      previous.next = newNode;
      previous.next.next = current;
      break;
    } else { 
      previous = current;
      current = current.next;
      count += 1;
    }
  }
  this.count += 1;
  return this;
}

LinkedList.prototype.insertFirst = function(value) {
  let newNode = new Node(value);

  if (!this.head) this.head = newNode;
  else {
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
  }
  this.count += 1;
  return this;
}

LinkedList.prototype.deleteFirst = function() {
  if (!this.count) return this;
  if (this.count === 1) this.head = null;
  else this.head = this.head.next;
  this.count -= 1;
  return this
}

var list1 = new LinkedList();
list1.push(12);
list1.push(22);
list1.push(34);
list1.push(87);
list1.push(3);
console.log(list1.length());
console.log(list1.length());
console.log(JSON.stringify(list1));

// console.log(list1.getIndex(34));
// list1.insert(66, 2);
// list1.delete(12);

// list1.deleteFirst();
// list1.insertFirst(20);
// list1.insert(66, 1);
// list1.insert(66, -1);
// list1.insert(66, 3);
// list1.insert(66, 5);
// list1.insert(66, 6);
// list1.insert(66, 8);
