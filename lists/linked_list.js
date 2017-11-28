// ****************************************************************************************************
// linked list
// ****************************************************************************************************

let Node = function(value) {
  this.value = value;
  this.next = null;
}

let LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

LinkedList.prototype.append = function(newNode) {
  this.count += 1;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}


var node1 = new Node(12);
var node2 = new Node(22);
var node3 = new Node(34);
var node4 = new Node(87);
var node5 = new Node(3);

var list1 = new LinkedList();
list1.append(node1);
list1.append(node2);
list1.append(node3);
list1.append(node4);
list1.append(node5);
console.log(JSON.stringify(list1));
