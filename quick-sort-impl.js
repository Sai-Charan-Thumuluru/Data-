function quickSort(a) {
    if (a.length < 2) {
        return a;
    } else {
        let pivot = a[0];
        let left = [];
        let right = [];
        for (let e of a) {
            if (e < pivot) {
                left.push(e);
            }
            if (e > pivot) {
                right.push(e);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

let a = [18, 27, 9, 3, 63, 36];
console.log(quickSort(a)); // [ 3, 9, 18, 27, 36, 63 ]
