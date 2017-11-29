// ****************************************************************************************************
//   doubly linked list
// ****************************************************************************************************

let Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.length = function() {
  return this.size;
}

LinkedList.prototype.push = function(value) {
  let newNode = new Node(value);
  if (this.size) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }

  this.size += 1;
  return this;
}

LinkedList.prototype.pop = function() {
  if (this.size < 1) return this;

  this.tail = this.tail.prev;
  this.tail.prev = null;

  this.size -= 1;
  return this;
}

LinkedList.prototype.unshift = function(value) {
  if (!this.size) this.push(value);
  let newNode = new Node(value);

}

LinkedList.prototype.shift = function() {
}

let list1 = new LinkedList();
list1.push(10);
list1.push(20);
list1.push(30);
console.log(list1.length()); 
list1.pop();
console.log(list1.length()); 
// console.log(list1);

