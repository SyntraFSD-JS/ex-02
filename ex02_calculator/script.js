const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#number-input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
  // return the sum value of all the numbers
  const numberInputs = document.querySelectorAll(".number-input");
  let totalSum = 0;
  for (let i = 0; i < numberInputs.length; i++) {
    /*numberInputs.length = hoeveel nummers erin zitten 
    (als je 2 dingen wil optellen is dat dus 2)
    zolang i < 2 = true doet hij verder*/
      let numberInput = numberInputs[i];
      totalSum += ParseInt(numberInput.value);
  }
  console.log(totalSum);
  return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
  // waar willen we dat op scherm krijgen moet je je afvragen
  // wat willen we wijzigen? de waarde => textContent
  // we willen het resultaat vd functie erin steken => functie oproepen
  sumResultContainer.textContent = sumNumbers();
}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll(".number-input");
  let totalProduct = 1; 
  // 1 omdat x0 = 0
  for (let i = 0; i < numberInputs.length; i++) {
    let numberInput = numberInputs[i];
    totalProduct += ParseInt(numberInput.value);
}
return totalProduct;

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
