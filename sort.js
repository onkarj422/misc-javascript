var arr = [];
for (var i=1, t=100; i<1000000; i++) {
    arr.push(Math.round(Math.random() * 100)+1)
}
console.log(arr);
var countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};
console.log(countingSort(arr, 1, 100));