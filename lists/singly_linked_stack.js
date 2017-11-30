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
  if (!this.head) throw new Error ('Cannot pop empty stack');
  
  if (this.head.next === null) {
    this.head = null;
  } else {
    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
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

let stack1 = new Stack();
stack1.push(13);
stack1.push(15);
stack1.push(25);
stack1.pop();
stack1.print();
console.log(stack1.peek());
console.log(JSON.stringify(stack1));

