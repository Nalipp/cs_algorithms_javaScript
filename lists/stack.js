// ****************************************************************************************************
// stack
// ****************************************************************************************************

let Node = function(value) {
  this.value = value;
  this.next = null;
}

let Stack = function() {
  this.head = null;
}

Stack.prototype.push = function(value) {
  let newNode = new Node(value);
  if (!this.head) this.head = newNode;
  else {
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }
  return this;
}

Stack.prototype.pop = function() {
  if (!this.head) return this;
  
  if (this.head.next === null) {
    this.head = null;
    return this;
  }

  let current = this.head;
  let previous = null;

  while (current.next) {
    previous = current;
    current = current.next;
  }
  previous.next = null;

  return this;
}

let stack1 = new Stack();
stack1.push(13);
stack1.push(15);
stack1.push(25);
stack1.pop();
stack1.pop();
stack1.pop();
console.log(JSON.stringify(stack1));

