const sumSubmitBtn = document.querySelector ("#sum-submit-btn");
const sumResultContainer = document.querySelector("#sum-Result-Container");
const productSubmitBtn = document.querySelector("#product-Submit-Btn");
const productResultContainer = document.querySelector("#product-Result-Container");
const numberInputContainer = document.querySelector("number-Input-Container");
const addInputBtn = document.querySelector("add-Input-Btn");
const numberCountContainer = document.querySelector("number-Count-Container");

function sumNumbers() {
  // return the sum value of all the numbers
    const numberInputs document.querySelectorAll(".number-input"); 
    let totalSum = 0;

    for(let i = 0; i < numberInputs.length; i++) {
     let numberInput = numberInputs[i];
     totalSum = totalSum + parseInt(numberInput.value);
    }

    return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
    sumResultContainer.textContent = sumNumbers();
}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs document.querySelectorAll(".number-input");
  let totalProduct = 1;

  for( let i = 0; i < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
    totalProduct = totalProduct * parseInt(numberInput.value);
  }
  
  return totalProduct;
}

function printProduct() {
  // print the product of all the numbers
  productResultContainer.textContent = multiplyNumbers();
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
