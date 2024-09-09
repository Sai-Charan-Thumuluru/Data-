
function binarySearch(arr, item) {
  let l = 0;
  let h = arr.length - 1;
  let m = (l + h) / 2;
  let guess = arr[m];
  while(l<=h) {
      if(guess === item) {
        return m;
      } else if(guess < item) {
        l = m + 1;
      } else if(guess > item) {
        h = m - 1;
      }
      return -1;
    }
}
const arr = [2, 3, 18, 9, 27]
binarySearch(arr, 9);

