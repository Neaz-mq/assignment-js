function cubeNumber(number) {
    if(typeof number!== "number"){
        return "Please provide a valid number";
    }
    else if(number <= 0){
        return "Please give a positive number";
    }
    else{
        const result = number ** 3;
        return result;
    }
}

const inputNumber = 3;
const result = cubeNumber(inputNumber);
console.log(result);