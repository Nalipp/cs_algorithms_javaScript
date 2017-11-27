// ****************************************************************************************************
// merge sort
// ****************************************************************************************************

var arr = [10, 5, 6, 1, 11, 9, 3];

let mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


function merge(arr1, arr2) {
  let newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) newArr.push(arr1.shift());
    else newArr.push(arr2.shift());
  }
  let remaining = arr1.length > arr2.length ? arr1 : arr2;
  return newArr.concat(remaining);
}

console.log(mergeSort(arr));
