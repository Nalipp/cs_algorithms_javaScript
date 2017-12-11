// ****************************************************************************************************
// binary search


let binarySearch = (inputArray, value) => {
  let min = -1;
  let max = inputArray.length;
  let mid = Math.floor(max / 2)

  while (min + 1 < max) {
    if (value === inputArray[mid]) return mid;
    else if (value < inputArray[mid]) max = mid;
    else if (value > inputArray[mid]) min = mid;
    mid = Math.floor((max - min) / 2) + min;        
  }
  return -1;
}

testList = [1,3,9,11,15,19,29,31]
console.log(binarySearch(testList, testVal1));
