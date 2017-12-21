function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Node.prototype.add = function(val) {
  let newNode = new Node(val);
  let current = this;
  while (current) {
    if (val < current.val) {
      if (!current.left) return current.left = newNode;
      current = current.left;
    }
    else if (val > current.val) {
      if (!current.right) return current.right = newNode;
      current = current.right;
    }
    else throw new Error('New node must have a unique value')
  }
}

Node.prototype.DFSInOrderIterate = function(cb) {
  if (this.val) innerIterate(this);
  else return cb(this);
  function innerIterate(current) {
    if (current.left) innerIterate(current.left);
    if (current.right) innerIterate(current.right);
    cb(current);
  }
}

Node.prototype.findMaxDepth = function() {
  let maxDepth = Number.MIN_VALUE;
  innerFindMax(this, 0);
  function innerFindMax(current, depth) {
    maxDepth = Math.max(maxDepth, depth);
    depth++;
    if (current.left) innerFindMax(current.left, depth);
    if (current.right) innerFindMax(current.right, depth);
  }
  return maxDepth;
}

Node.prototype.findMinDepth = function() {
  let minDepth = Number.MAX_VALUE;
  innerFindMin(this, 0);
  function innerFindMin(current, depth) {
    if (!current.left && !current.right) minDepth = Math.min(minDepth, depth);
    depth++;
    if (current.left) innerFindMin(current.left, depth);
    if (current.right) innerFindMin(current.right, depth);
  }
  return minDepth;
}

Node.prototype.isSuperBalanced = function() {
  return (this.findMaxDepth() - this.findMinDepth()) < 2
}

let tree = new Node(15);
tree.add(22);
tree.add(23);
tree.add(24);
tree.add(10);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(14);
tree.add(13);
tree.add(12);
tree.add(11);

tree.findMaxDepth();
tree.findMinDepth();
console.log(tree.isSuperBalanced());
