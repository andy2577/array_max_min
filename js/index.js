function max(arry) {
    var arr = quickSort(arry);
    return arr.pop();
    
function quickSort(arr) {
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
    var result = quickSort(smaller).concat(pivot, quickSort(bigger));
    return result;
}
}



var list = [3, 5, 8, 12, 4, 12, 35, 34, 45, 90, 1, 2, 6];
console.log(max(list));
