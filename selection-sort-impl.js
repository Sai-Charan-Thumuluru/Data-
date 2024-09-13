function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
const arr = [9, 5, 4, 27, 18];
const arrSize = arr.length;
let sortedArr = [];

function selectionSort() {
  for (let i = 0; i < arrSize; i++) {
      let selectedIndex = findSmallest(arr);
      let smallestNum = arr.splice(selectedIndex, 1);
      sortedArr.push(smallestNum[0]);
  }  
}
selectionSort();
console.log(sortedArr);
