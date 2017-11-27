// ****************************************************************************************************
// merge sort
// ****************************************************************************************************

var arr = [10, 5, 6, 1, 11, 9, 3];

let mergeSort = (arr) => {

}

console.log(mergeSort(arr));

// ************************************************** 
// helper
// var arr1 = [9];
// var arr2 = [1];
// var arr1 = [1, 9];
// var arr2 = [6, 7];
var arr1 = [1, 4, 9];
var arr2 = [5, 6, 7];

let twoArrayMerge = (arr1, arr2) => {
  let newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) newArr.push(arr1.shift());
    else newArr.push(arr2.shift());
  }
  let remaining = arr1.length > arr2.length ? arr1 : arr2;
  return newArr.concat(remaining);
}

console.log(twoArrayMerge(arr1, arr2));
