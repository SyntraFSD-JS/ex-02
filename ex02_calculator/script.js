const sumSubmitBtn = document.getElementById("sum-submit-btn");
const sumResultContainer = document.getElementById("sum-result-container");
const productSubmitBtn = document.getElementById("product-submit-btn");
const productResultContainer = document.getElementById("product-result-container");
const numberInputContainer = document.getElementById("input-container");
const addInputBtn = document.getElementById("add-input-btn");
const numberCountContainer = document.getElementById("number-count-container");
const id1 = document.getElementById("1");
const id2 = document.getElementById("2");


function sumNumbers() {
  // return the sum value of all the numbers
    let value1 = parseInt(id1.value);
    let value2 = parseInt(id2.value);
    let sum = value1 + value2;
    return sum;
}

function printSum() {
  // print the sum value of all the numbers
    return sumResultContainer.innerHTML = sumNumbers();
}

function multiplyNumbers() {
  // return the product of all the numbers
    let value1 = parseInt(id1.value);
    let value2 = parseInt(id2.value);
    let product = value1 * value2;
    return product;
}

function printProduct() {
  // print the product of all the numbers
    return productResultContainer.innerHTML = multiplyNumbers();
}

function printNumberCount() {
  // get and print the number of input fields
    let newCount = numberInputContainer.childElementCount;
    numberCountContainer.innerHTML = newCount ;
}

function addNumberInput(qualifiedName, value) {
  // add a number input
    //create new elements
    let newBox = document.createElement('div');
    let newControl = document.createElement('div');
    let newInput = document.createElement('input');
    let newControl2 = document.createElement('div');
    let doneBtn = document.createElement('a');


    //add values in elements
    //newP.textContent = newInput;

    //add class
    newBox.classList = "field has-addons number-input-group";
    newControl.classList = "control";
    newInput.classList = "input number-input";
    newControl2.classList = "control";
    doneBtn.classList = "button is-danger delete-number-input";

    newInput.setAttribute("type", "number");
    newInput.setAttribute("step", "1");
    newInput.setAttribute("value", "0");
    doneBtn.innerHTML = "X";

    //nest child elements
    newBox.appendChild(newControl);
    newControl.appendChild(newInput);
    newBox.appendChild(newControl2);
    newControl2.appendChild(doneBtn);
    numberInputContainer.appendChild(newBox);

    printNumberCount();
}

function removeNumberInput(event) {
  // remove a number input
    // link naar documentatie
    //https://www.quora.com/How-do-you-remove-a-parent-div-in-JavaScript-if-all-the-ids-and-classes-are-the-same-for-all-child-elements

    let a = event.target;
    let div;
    let divBox;
    if (a.classList.contains("delete-number-input")) {
        div = a.parentNode;
        divBox = div.parentNode;
        numberInputContainer.removeChild(divBox);
    }

    printNumberCount();

}

// add event listeners
sumSubmitBtn.addEventListener('click', printSum);
productSubmitBtn.addEventListener('click', printProduct);
addInputBtn.addEventListener('click', addNumberInput);
numberInputContainer.addEventListener('click', removeNumberInput);
