const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('sum-resolt-container');
const productSubmitBtn = document.querySelector('product-submit-btn');
const productResultContainer = document.querySelector('product-resolt-container');
const numberInputContainer = document.querySelector('input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
  // return the sum value of all the numbers
  const numberInputs = document.querySelectorAll("number-input");
  let totalSum = 0;

  for(let i = 0; i < numberInputs.length; i++) {
      let numberInput = numberInputs[i]; 
       totalSum += parseInt(numberInput.value);
  }
return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
  sumResultContainer.textContent = sumNumbers();
}

function multiplyNumbers(){
  // return the product of all the numbers
  const addNumberInput = document.querySelectorAll("number-input");
  let totalProduct = 1;

  for(let i = 0; i < 1 lenght; i++) {
      let numberInput = numberInput.length; [i]) {
       totalProduct *= parseInt(numberInput.value);
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
sumSubmitBtn.addEventListener('click'), printSum);
sumSubmitBtn.addEventListener('click'), printProduct);
