function cubeNumber(number) {
    if(typeof number!== "number"){
        return "Please provide a valid number";
    }
    else if(number <= 0){
        return "Please give a positive number";
    }
    else{
        
        return number ** 3;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1!== "string" || typeof string2!== "string"){
        return "Please provide me string";
    }else{
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
    }
}


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


function findAddress(obj) {

    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + ',' + house + ',' + society;
}


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