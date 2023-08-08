function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 < 0 || num2 < 0) {
        return "Invalid Input";
    } else if (num1 === num2) {
        return "equal";
    } else {
        return [Math.max(num1, num2), Math.min(num1, num2)];
    }
}

console.log(sortMaker([2, 3]));   
console.log(sortMaker([4, 2]));   
console.log(sortMaker([4, 4]));   
console.log(sortMaker([1, 2]));   
console.log(sortMaker([4, -2]));  