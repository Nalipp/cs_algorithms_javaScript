// ****************************************************************************************************
// fibonacci

// [1, 1, 2, 3, 5, 8, 13, 21, 34]

// recursive
// let getFib = (n) => {
//   if (n < 0) throw new Error('position must not be negative');
//   if (n <= 1) return n;
//   return getFib(n - 1) + getFib(n - 2);
// }

// recursive (memoniztion)
// let getFib = (n, obj={}) => {
//   if (n < 0) throw new Error('n must be not be negative');
//   if (n <= 1) return n;
//   let first = obj[n-1] ? obj[n-1] : obj[n-1] = getFib(n-1, obj);
//   let second = obj[n-2] ? obj[n-2] : obj[n-2] = getFib(n-2, obj);
//   console.log(first, second)
//   return first + second;
// }

// iterative
let getFib = (n) => {
  if (n < 0) throw new Error('n must be not be negative');
  let twoBack = 0;
  let oneBack = 1;
  let current = twoBack + oneBack;

  for (let i = 1; i < n; i++) {
    current = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = current;
  }
  return current
}

console.log(getFib(9));
// console.log(getFib(1400));
