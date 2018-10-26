const sumSubmitBtn= document.querySelector("#sum-submit-btn");
const sumResultContainer= document.querySelector("#sum-result-container");
const productSubmitBtn= document.querySelector("#product-submit-btn");
const productResultContainer= document.querySelector("#product-result-container");
const numberInputContainer= document.querySelector("#input-container");
const addInputBtn= document.querySelector("#add-input-btn");
const numberCountContainer= document.querySelector("#number-count-container");

function sumNumbers() {
  // return the sum value of all the numbers
  const numberInputs = document.querySelectorAll(".number-input");
  let totalSum = 0;

  for(let i = 0; i < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
  // totalSum = totalSum + parseInt(numberInput.value);
  // parseInt maakt van de string numberInput.value een integer
    totalSum += parseInt(numberInput.value)
  }
  console.log(totalSum)
  return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
  sumResultContainer.textContent = sumNumbers();

}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll(".number-input");
  let totalMultiply = 1;

  for(let i = 0; i < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
   // totalMultiply = totalSum * parseInt(numberInput.value);
    totalMultiply *= parseInt(numberInput.value)
  }
  console.log(totalMultiply)
  return totalMultiply;
}

function printProduct() {
  // print the product of all the numbers
  productResultContainer.textContent = multiplyNumbers();

}

function printNumberCount(){
  // get and print the number of input fields
}

function addNumberInput(){
  // add a number input, kopieer element voor number input
  const existingInputGroup = document.querySelector('.number-input-group');
  const newInputGroup = existingInputGroup.cloneNode(true);
  const newNumberInput = newInputGroup.querySelector('.number-input');
  newNumberInput.value = '0';
  numberInputContainer.appendChild(newInputGroup);

}

function removeNumberInput(eventInformation) {
  // remove a number input
  if(eventInformation.target.matches('.delete-number-input')) {
    const selectedInputGroup = eventInformation.target.closest('.number-input-group');
    selectedInputGroup.remove();
  }

}

// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput)
numberInputContainer.addEventListener('click', removeNumberInput);
