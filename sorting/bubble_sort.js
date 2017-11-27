// ****************************************************************************************************
// bubble sort
// ****************************************************************************************************

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swaps = 0;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swaps += 1;
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(arr);
    if (swaps === 0) return arr;
  }
  return arr;
}

var arr = [3, 6, 5, 4, 7, 8, 2];
var arr = [3, 4, 5, 6, 7, 8, 2];
var arr = [3, 4, 5, 6, 7, 8];
console.log(bubbleSort(arr)); 
