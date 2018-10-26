const sumSubmitBtn = document.querySelector("#sum-submit-btn");
const sumResultContainer = document.querySelector("#sum-result-container");
const productSubmitBtn = document.querySelector("#product-submit-btn");
const productResultContainer = document.querySelector("#product-result-container");
const numberInputContainer = document.querySelector("#input-container");
const addInputBtn = document.querySelector("#add-input-btn");
const numberCountContainer = document.querySelector("#number-count-container");

function sumNumbers() {
  // return the sum value of all the numbers
  // parseInt maakt van een string een nummer
  // .naam is een class en #naam is een id te zien in querySeletor("")
  const numberInputs = document.querySelectorAll(".number-input");
  let totalSum = 0;
  for (let 1 = 0; 1 < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
    totalSum = totalSum + parseInt(numberInput.value); // deze lijn kan ook korter bv totalSum += parseInt(numberInput.value);
  }
  return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
  sumResultContainer.textContent = sumNumbers;
}

function multiplyNumbers(){
  // return the product of all the numbers
  const productInputs = document.querySelectorAll(".product-input");
  let totalProduct = 1;
  for (let 1 = 0; 1 < productInputs.length; i++) {
    let productInput = productInputs[i];
    totalProduct = totalProduct * parseInt(productInput.value);
  }
  return totalProduct;
}

function printProduct() {
  // print the product of all the numbers
  productResultContainer.textContent = multiplyNumbers;
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
