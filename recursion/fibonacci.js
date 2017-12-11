// ****************************************************************************************************
// fibonacci

// [1, 1, 2, 3, 5, 8, 13, 21, 34]

let getFib = (n, obj={}) => {
  if (n < 0) throw new Error('n must be not be negative');
  if (n <= 1) return n;
  let first = obj[n-1] ? obj[n-1] : obj[n-1] = getFib(n-1, obj);
  let second = obj[n-2] ? obj[n-2] : obj[n-2] = getFib(n-2, obj);
  console.log(first, second)
  return first + second;
}

// console.log(getFib(9));
console.log(getFib(11));
// console.log(getFib(0));
