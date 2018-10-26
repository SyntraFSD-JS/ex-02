const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
  // return the sum value of all the numbers
   /*numberInputs.length = hoeveel nummers erin zitten 
    (als je 2 dingen wil optellen is dat dus 2)
    zolang i < 2 = true doet hij verder*/
  const numberInputs = document.querySelectorAll(".number-input");
  let totalSum = 0;
  for (let i = 0; i < numberInputs.length; i++) {
         let numberInput = numberInputs[i];
      totalSum += parseInt(numberInput.value);
    }
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
  /* same result as
  const numberOfInputs = document.querySelectorAll('.input-number').length;*/
  numberCountContainer.textContent = numberOfInputs;
  /* wanneer moet de functie uitgevoerd w? als je op 'add input' klikt
  => moet bij addNumberInput MAAR ook bij removeNumberInput*/

}


function addNumberInput(){
  // add a number input
  const existingInputGroup = document.querySelector('.number-input-group');
  const newInputGroup = existingInputGroup.cloneNode(true);
  const newNumberInput = newInputGroup.querySelector('.number-input');
  newNumberImputValue ='0';
  numberInputContainer.appendChild(newInputGroup);
  printNumberCount();
}

function removeNumberInput(eventInfo) {
  // remove a number input
  if (event.target.matches('.delete-number-input') && (numberInputContainer.children.length > 2)){
    const selectedInputGroup = event.target.closest('.number-input-group');
    selectedInputGroup.remove();
    printNumberCount();
  }
  
}

// add event listeners
// add event listeners
sumSubmitBtn.addEventListener('click',printSum);
productSubmitBtn.addEventListener('click',printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);