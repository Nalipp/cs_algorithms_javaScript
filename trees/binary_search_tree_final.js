// ****************************************************************************************************
//   binary search tree
// ****************************************************************************************************

let BST = function() {
  this.root = null;
  this.size = 0;
}

let Node = function(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

BST.prototype.length = function() {
  return this.size;
}

BST.prototype.add = function(val) {
  let newNode = new Node(val);
  if (!this.root) this.root = newNode;
  else {
    let node = this.root;
    while (node) {
      if (val < node.val) {
        if (node.left) node = node.left;
        else {
          node.left = newNode;
          break;
        }
      }
      else if (val > node.val) {
        if (node.right) node = node.right;
        else {
          node.right = newNode;
          break;
        }
      }
      else return this;
    }
  }
  this.size += 1;
  return this;
}

BST.prototype.contains = function(val) {
  let node = this.root;
  while (node) {
    if (node.val === val) return true;
    if (val < node.val && node.left) node = node.left; 
    else if (val > node.val && node.right) node = node.right;
    else break;
  }
  return false;
}

BST.prototype.getMin = function() {
  if (!this.root) return null;
  let node = this.root;
  while (node.left) node = node.left;
  return node.val;
}

BST.prototype.getMax = function() {
  if (!this.root) return null;
  let node = this.root;
  while (node.right) node = node.right;
  return node.val;
}

BST.prototype.getNode = function(val) {
  if (!this.root) return null;
  let node = this.root;
  while (node) {
    if (node.val === val) return node;
    if (val < node.val && node.left) node = node.left;
    else if (val > node.val && node.right) node = node.right;
    else return null;
  }
}

BST.prototype.BFSIterate = function(cb) {
  if (!this.root) return null;
  let queue = [this.root];
  while (queue.length) {
    let node = queue.shift();
    cb(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

BST.prototype.print = function(startNode) {
  this.BFS(v => console.log(v.val), startNode);
}

BST.prototype.getHeight = function(node) {
  if (node === null) throw new Error('Cannot getHeight of null node');
  if (!node) node = this.root;
  return this._getHeight(node);
}

BST.prototype._getHeight = function(node) {
  if (!node) return -1;
  let left = this._getHeight(node.left);
  let right = this._getHeight(node.right);
  return Math.max(left, right) + 1;
}

BST.prototype.DFSIterate = function(cb, type) {
  if (!this.root) return null;
  if (!type) return this.inOrder(cb, this.root);
  else if (type === 'preOrder') return this.preOrder(cb, this.root)
  else return this.postOrder(cb, this.root)
}

BST.prototype.preOrder = function(cb, node) {
  if (node) {
    cb(node);
    this.preOrder(cb, node.left);
    this.preOrder(cb, node.right);
  }
}
BST.prototype.inOrder = function(cb, node) {
  if (node) {
    this.inOrder(cb, node.left);
    cb(node);
    this.inOrder(cb, node.right);
  }
}
BST.prototype.postOrder = function(cb, node) {
  if (node) {
    this.postOrder(cb, node.left);
    this.postOrder(cb, node.right);
    cb(node);
  }
}

let bst1 = new BST();
