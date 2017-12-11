// ****************************************************************************************************
// singly linked stack
// ****************************************************************************************************

let Node = function(value) {
  this.value = value;
  this.next = null;
}

let Stack = function() {
  this.head = null;
  this.count = 0;
}

Stack.prototype.push = function(value) {
  let newNode = new Node(value);
  if (!this.head) this.head = newNode;
  else {
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }
  this.count += 1;
  return this;
}

Stack.prototype.pop = function() {
  if (!this.count) throw new Error ('Cannot pop empty stack');
  if (this.count === 1) this.head = null;
  else {
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next = null;
  }

  this.count -= 1;
  return this;
}

Stack.prototype.peek = function() {
  if (!this.head) throw new Error ('Cannot peek empty stack'); 
  return this.head.value;
}

Stack.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  return this;
}

Stack.prototype.iterate = function(cb) {
  let current = this.head;
  while (current) {
    cb(current.value);
    current = current.next;
  }
  return this;
}

let stack1 = new Stack();
