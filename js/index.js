let max = (arr) => {
    let maxVal = arr.pop();
    arr.forEach((item) => {
        if (item > maxVal) {
            maxVal = item;
        }
    });
    return maxVal;
};

let min = (arr) => {
    let minVal = arr.shift();
    arr.forEach((item) => {
        if (item < minVal) {
            minVal = item;
        }
    });
    return minVal;
};

let list = [3, 5, 8, 12, 4, 12, 35, 34, 45, 90, 1, 2, 6, 91];
console.log(max(list));
console.log(min(list));
