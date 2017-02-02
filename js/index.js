let max = (arr) => {
    let maxVal = 0;
    arr.forEach((item) => {
        if (item > maxVal) {
            maxVal = item;
        }
    });
    return maxVal;
};



let list = [3, 5, 8, 12, 4, 12, 35, 34, 45, 90, 1, 2, 6, 91];
console.log(max(list));
