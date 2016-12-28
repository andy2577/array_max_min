function bisort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[Math.ceil(arr.length / 2)];
    var smaller = [];
    var bigger = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > pivot) {
            bigger.push(arr[i]);
        } else if (arr[i] < pivot) {
            smaller.push(arr[i]);
        }
    }
    var result = bisort(smaller).concat(pivot, bisort(bigger));
    return result;
}