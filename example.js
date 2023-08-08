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

// Test cases
console.log(sortMaker([1, 5, 2]));   // Output: [3, 2]
console.log(sortMaker([4, 2]));   // Output: [4, 2]
console.log(sortMaker([4, 4, 3]));   // Output: equal
console.log(sortMaker([1, 2]));   // Output: [2, 1]
console.log(sortMaker([4, -2]));  // Output: Invalid Input


  