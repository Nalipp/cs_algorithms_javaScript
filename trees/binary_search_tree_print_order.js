function Tree() {
  this.root = null;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.add = function(val) {
  let newNode = new Node(val);
  if (!this.root) this.root = newNode;
  else {
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          break;
        }
      }
      else if (val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          break;
        }
      }
      else throw new Error('Node must be unique');
    }
  }
  this.size += 1;
  return this;
}

let tree1 = new Tree();

tree1.add(15);
tree1.add(12);
tree1.add(22);
tree1.add(6);
tree1.add(14);
tree1.add(13);

Tree.prototype.printDepthFirstSearchPreOrder = function() {
  if (this.root) innerPrint(this.root);
  else console.log(null); 
  function innerPrint(current) {
    console.log(current.val);
    if (current.left) innerPrint(current.left);
    if (current.right) innerPrint(current.right);
  }
}

Tree.prototype.printDepthFirstSearchInOrder = function() {  
  if (this.root) innerPrint(this.root);
  else console.log(null); 
  function innerPrint(current) {
    if (current.left) innerPrint(current.left);
    console.log(current.val); 
    if (current.right) innerPrint(current.right);
  }
}

// tree1.printDepthFirstSearchPreOrder();
tree1.printDepthFirstSearchInOrder();
