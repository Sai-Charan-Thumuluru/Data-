
function binarySearch(arr, item) {
  let l = 0;
  let h = arr.length - 1;

  while(l<=h) {
      let m = Math.floor((l + h) / 2);
      let guess = arr[m];
      if(guess === item) {
        return m;
      } else if(guess < item) {
        l = m + 1;
      } else if(guess > item) {
        h = m - 1;
      }
    }
  return -1;
}
const arr = [2, 3, 9, 18, 27]
console.log(binarySearch(arr, 9));

