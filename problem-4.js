function findAddress(obj) {

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
console.log(findAddress(address3)); // Output: 10,__,__ 