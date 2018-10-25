const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
  const numberInputs = document.querySelectorAll('.number-input');
  let total = 0;
  numberInputs.forEach(function (numberInput) {
    const number = parseInt(numberInput.value);
    total += number;
  });
  return total;
}

function printSum() {
  const totalSum = sumNumbers();
  sumResultContainer.textContent = totalSum;
}

function multiplyNumbers(){
  const numberInputs = document.querySelectorAll('.number-input');
  let total = 1;
  numberInputs.forEach(function (numberInput) {
    const number = parseInt(numberInput.value);
    total *= number;
  });
  return total;
}

function printProduct() {
  const totalProduct = multiplyNumbers();
  productResultContainer.textContent = totalProduct;
}

function printNumberCount(){
  numberCountContainer.textContent = numberInputContainer.children.length;
}

function addNumberInput(){
  const existingNumberInput = document.querySelector('.number-input-group');
  const newExitingNumberInput = existingNumberInput.cloneNode(true);
  newExitingNumberInput.querySelector('.number-input').value = 0;
  numberInputContainer.appendChild(newExitingNumberInput);
  printNumberCount(numberInputContainer.children.length);
}

function removeNumberInput(event) {
  const clickedItem = event.target;
  if (clickedItem.matches('.delete-number-input')) {
    const currentNumberInputGroup = clickedItem.closest('.number-input-group');
    currentNumberInputGroup.remove();
    printNumberCount();
  }
}

sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);
