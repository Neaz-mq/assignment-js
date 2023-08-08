/* function cubeNumber(input) {
    if (input <= 0) {
      throw new Error("Input must be a positive number");
    }
    
    return input ** 3; // Using the exponentiation operator to calculate the cube
  }
  
  // Example usage:
  const inputNumber = 4;
  const result = cubeNumber(inputNumber);
  console.log(`The cube of ${inputNumber} is ${result}`); */

  /* function matchFinder(str1, str2) {
    if (str1.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(matchFinder("John Doe", "ohn"));  // Output: true
console.log(matchFinder("JavaScript", "Code"));  // Output: false
console.log(matchFinder("Peter Parker", "Pen"));  // Output: false
console.log(matchFinder("Peter Parker", "pet"));  // Output: false
 */




// function sortMaker(arr) {
//     if (arr.length !== 2) {
//         return "Invalid Input";
//     }

//     const [num1, num2] = arr;

//     if (num1 < 0 || num2 < 0) {
//         return "Invalid Input";
//     } else if (num1 === num2) {
//         return "equal";
//     } else {
//         return [Math.max(num1, num2), Math.min(num1, num2)];
//     }
// }

// // Test cases
// console.log(sortMaker([1, 5, 2]));   // Output: [3, 2]
// console.log(sortMaker([4, 2]));   // Output: [4, 2]
// console.log(sortMaker([4, 4, 3]));   // Output: equal
// console.log(sortMaker([1, 2]));   // Output: [2, 1]
// console.log(sortMaker([4, -2]));  // Output: Invalid Input


/* function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + ',' + house + ',' + society;

}

// Test cases
const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
const address2 = { street: 10, society: "Earth Perfect" };
const address3 = { street: 10 };

console.log(findAddress(address1)); // Output: 10,15A,Earth Perfect
console.log(findAddress(address2)); // Output: 10,__,Earth Perfect
console.log(findAddress(address3)); // Output: 10,__,__  */



/* function canPay(notes, chipPrice) {
    // Check if the input array is empty
    if (notes.length === 0) {
        return "Please check the array is empty";
    }
    
    // Calculate the sum of the retail amounts in the array
    const totalRetailAmount = notes.reduce((sum, note) => sum + note, 0);
    
    // Compare the sum with the price of the chips and return the result
    return totalRetailAmount >= chipPrice;
}

// Test cases
console.log(canPay([2,1], 10)); // Output: false
console.log(canPay([1, 2, 5], 10)); // Output: true */





function canPay(notes, priceOfChips) {
    if (notes.length === 0) {
        return "Please check the array is empty";
    }

    let sum = 0;
    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }

    if (sum >= priceOfChips) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(canPay([1, 2, 8], 10)); // Output: false
console.log(canPay([1, 5, 1], 10)); // Output: true

