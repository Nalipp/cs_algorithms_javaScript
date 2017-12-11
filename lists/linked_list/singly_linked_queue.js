// ****************************************************************************************************
//   singly linked queue
// ****************************************************************************************************

let Queue = function() {
  this.head = null;
  this.size = 0;
}

let Node = function(val) {
  this.val = val;
  this.next = null;
}

Queue.prototype.length = function() {
  return this.size;
}

Queue.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return this;
}

Queue.prototype.push = function(val) {
  let newNode = new Node(val);
  if (!this.size) this.head = newNode;
  else if (this.size === 1) {
    this.head.next = newNode;
  } else {
    let current = this.current;
    while (current.next) current = current.next;
    current = newNode;
  }
  this.size += 1;
  return this;
}

let queue1 = new Queue();
queue1.push(10);
queue1.push(20);
queue1.push(30);
// queue1.push(40);
queue1.print();
