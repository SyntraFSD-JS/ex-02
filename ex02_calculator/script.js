const sumSubmitBtn = document.querySelector("#sum-submit-btn");
const sumResultContainer = document.querySelector("#sum-result-container") ;
const productSubmitBtn = document.querySelector("#product-submit-btn");
const productResultContainer = document.querySelector("#product-result-container");
const numberInputContainer = document.querySelector("#input-container");
const addInputBtn =document.querySelector("#add-input-btn");
const numberCountContainer = document.querySelector("#number-count-container");

function sumNumbers() {
  // return the sum value of all the numbers
  const numberInputs = document.querySelectorAll(".number-input")
  let totalSum = 0;
  for (let i=0; i < numberInputs.length;i++){
    let numberInput = numberInputs[i]
    totalSum += parseInt(numberInput.value);
  }
  return totalSum;
}

function printSum() {
  // print the sum value of all the numbers
  

}

function multiplyNumbers(){
  // return the product of all the numbers
  const numberInputs = document.querySelectorAll(".number-input")
  let totalProduct = 0;
  for (let i=0; i < numberInputs.length;i++){
    let numberInput = numberInputs[i]
    totalProduct *= parseInt(numberInput.value);
  }
  return totalProduct;
}

function printProduct() {
  // print the product of all the numbers
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
let snumber_01 = document.querySelector ("#number-01").value;
let snumber_02 = document.querySelector ("#number-02").value;
let isom = parseInt(snumber_01) + parseInt(snumber_02);
let iverschil = parseInt(snumber_01) - parseInt(snumber_02);
let iproduct = parseInt(snumber_01) * parseInt(snumber_02);
let ideling = parseInt(snumber_01) / parseInt(snumber_02);
let fomzetting = parseFloat(ideling);
let iresultaat = Math.round(fomzetting*100)/100;
document.getElementById("result1").innerHTML = isom;
document.getElementById("result2").innerHTML = iverschil;
document.getElementById("result3").innerHTML = iproduct;
document.getElementById("result4").innerHTML = iresultaat;