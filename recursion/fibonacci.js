// ****************************************************************************************************
// fibonacci

// [1, 1, 2, 3, 5, 8, 13, 21, 34]

let getFib = (position) => {
  if (position < 0) throw new Error('position must be not be negative');
  if (position <= 1) return position;
  return getFib(position - 1) + getFib(position - 2);
}

console.log(getFib(9));
console.log(getFib(11));
console.log(getFib(0));
