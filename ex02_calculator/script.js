const sumSubmitBtn = document.querySelector ("#sum-submit-btn");
const sumResultContainer = document.querySelector("#sum-result-container");
const productSubmitBtn = document.querySelector("#product-submit-btn");
const productResultContainer = document.querySelector("#product-result-container");
const numberInputContainer = document.querySelector("#input-container");
const addInputBtn = document.querySelector("#add-input-btn");
const numberCountContainer = document.querySelector("#number-count-container");

function sumNumbers() {
  // return the sum value of all the numbers
    const numberInputs = document.querySelectorAll(".number-input"); 
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
  const numberInputs = document.querySelectorAll(".number-input");
  let totalProduct = 1;

  for( let i = 0; i < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
    totalProduct *= parseInt(numberInput.value);
  }

  return totalProduct;
}

function printProduct() {
  // print the product of all the numbers
  productResultContainer.textContent = multiplyNumbers();
}

function printNumberCount(){
  // get and print the number of input fields
  const numberOfInputs = numberInputContainer.children.length;

  numberCountContainer.textContent = numberOfInputs;
}

function addNumberInput(){
  // add a number input
  const existingInputGroup = document.querySelector(".number-input-group");
  const newInputGroup = existingInputGroup.cloneNode(true);
  const newNumberInput = newInputGroup.querySelector(".number-input");
  newNumberInput.value = "0";

  numberInputContainer.appendChild(newInputGroup);
  printNumberCount();

}

function removeNumberInput(event) {
  // remove a number input
  console.log(event);
  if (event.target.matches('.delete-number-input') && (numberInputContainer.children.length > 2)) {
    const selectedInputGroup = event.target.closest('.number-input-group');
    selectedInputGroup.remove();
    printNumberCount();
  } 

}

// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);