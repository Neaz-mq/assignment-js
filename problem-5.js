function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Please check the array is empty";
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(canPay([1,2,5], 10)); // Output: false
console.log(canPay([1,5,5], 10)); // Output: true