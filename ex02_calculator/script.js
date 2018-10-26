const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
    // return the sum value of all the numbers
    const numberInputs = document.querySelectorAll('.number-input');
    let totalSum = 0;
    for (let i = 0; i < numberInputs.length; i++){
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
  const numberInputs = document.querySelectorAll('.number-input');
    let totalProduct = 1;
    for (let i = 0; i < numberInputs.length; i++){
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
    const numberOfInput = numberInputContainer.children.length;
    numberCountContainer.textContent = numberOfInput;
    // same result as >
    // const numberInputs = document.querySelectorAll('.number-input').length;
}
function addNumberInput(){
    // add a number input
    const existingNumberInput = document.querySelector('.number-input-group');
    const newNumberInput = existingNumberInput.cloneNode(true);
    newNumberInput.querySelector('.number-input').value = 0;
    numberInputContainer.appendChild(newNumberInput);
    printNumberCount();
}

function removeNumberInput(event) {
    // remove a number input
    const deleteButton = event.target;
    //if(numberCountContainer.textContent > 2){
        if (deleteButton.matches('.delete-number-input') &&(numberInputContainer.children.length > 2)) {
        const currentNumberInputGroup = deleteButton.closest('.number-input-group');
        currentNumberInputGroup.remove();
        printNumberCount();
        }
    //}
}
// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);
numberInputContainer.addEventListener('input', function(){
    printSum();
    printProduct();
});
