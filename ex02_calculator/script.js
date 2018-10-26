const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-btn');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');
let number = parseInt(document.querySelectorAll('.number-input').value);

function sumNumbers() {
    // return the sum value of all the numbers
    const numberInputs = document.querySelectorAll('.number-input').value;
    let totalSum = 0;
    for (let i = 0; i < numberInputs.length; i++){
        let numberInput = numberInputs[i];
        totalSum += parseInt(numberInput.value);
    }
    return totalSum;
}
function printSum() {
    // print the sum value of all the numbers
}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll('.number-input').value;
    let totalProduct = 0;
    for (let i = 0; i < numberInputs.length; i++){
        let numberInput = numberInputs[i];
        totalProduct *= parseInt(numberInput.value);
    }
    return totalProduct;
}

function printProduct() {
  // print the product of all the numbers
}

function printNumberCount(){
  // get and print the number of input fields
}

function addNumberInput(){
  // add a number input
}

function removeNumberInput(event) {
  // remove a number input
}

// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);