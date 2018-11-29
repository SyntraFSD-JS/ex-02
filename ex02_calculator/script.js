const sumSubmitBtn = document.querySelector('#sum-submit-btn');
const sumResultContainer = document.querySelector('#sum-result-container');
const productSubmitBtn = document.querySelector('#product-submit-btn');
const productResultContainer = document.querySelector('#product-result-container');
const numberInputContainer = document.querySelector('#input-container');
const addInputBtn = document.querySelector('#add-input-btn');
const numberCountContainer = document.querySelector('#number-count-container');

function sumNumbers() {
  // moet iets uit html halen => moet const maken die alle getallen opzoekt
  const numberInputs = document.querySelectorAll(".number-input"); // hier w array aangemaakt van de 2 getallen die ingevoerd w
  let totalSum = 0;
  for (let i = 0; i < numberInputs.length; i++) { // hoeveel x moet er geloopt w? evenveel als er numberinputs zijn=>.length
         let numberInput = numberInputs[i]; //
      totalSum += parseInt(numberInput.value);  // ??!! = totalSum + numberInput.value = 0 + x en NIET numberInput.value + numberInput.value????!!!
    }
      return totalSum;
  
}

function printSum() {
  // print the sum value of all the numbers
  // waar willen we dat op scherm krijgen moet je je afvragen =>sumResultContainer
  // wat willen we wijzigen in sumResultContainer? de waarde => textContent
  // hoe bepalen we die waarde? met functie sumNumbers
  sumResultContainer.textContent = sumNumbers();
}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll(".number-input"); /// WRM is dit niet(".input number-input")???!!!!
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
  const numberOfInputs = document.querySelectorAll('.input-number').length;*/ /// WRM is dit niet(".input number-input")???!!!!
  numberCountContainer.textContent = numberOfInputs;
  /* wanneer moet de functie uitgevoerd w? als je op 'add input' klikt
  => moet bij addNumberInput MAAR ook bij removeNumberInput*/

}

function addNumberInput(){
  // add a number input                                 //  => kopieer de bestaande numberinputgroup // eerst query
  const existingInputGroup = document.querySelector('.number-input-group');
  const newInputGroup = existingInputGroup.cloneNode(true);       //TRUE omdat de children ook moeten gekopieerd w
  const newNumberInput = newInputGroup.querySelector('.number-input');     
  newNumberImputValue ='0';
  numberInputContainer.appendChild(newInputGroup);
  printNumberCount();
  realTime();
}

function removeNumberInput(eventInfo) {
  // remove a number input
  if (event.target.matches('.delete-number-input') && (numberInputContainer.children.length > 2)){
    const selectedInputGroup = event.target.closest('.number-input-group'); // const definiëren omdat we die moeten removen
    selectedInputGroup.remove(); //wat moet er removed w? newInputGroup toch? d
    printNumberCount();
    realTime();
  }  
}



// add event listeners
// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);
numberInputContainer.addEventListener('input', realTime);

/*numberInputContainer.addEventListener('input', function(){
  printSum();
  printProduct();
})

/* empty function() */


 function realTime(){ 
printProduct();
printSum();
}
numberInputContainer.addEventListener('input', realTime);

/*numberInputContainer.addEventListener('input', printSum);
numberInputContainer.addEventListener('input', printProduct);*/

/* kunt ook nog bij function sumNumbers en multiplyNumbers een forEach toevoegen ipv die for loop
=> numberInputs.forEach(function(numberInput){
      totalSum += parseInt(numberInput.value);
})
return totalSum

die function is een lege function maar wel met 1 parameter
nl. numberInput en ge vraagt de value op van die parameter
(op de volgende lijn) */


