let inputNumber = document.getElementById("number-input");
let inputBill = document.getElementById("bill-input");
let notZero = document.getElementById("not-zero");
let custom = document.getElementById("custom");
let button15 = document.getElementById("button15");
let reset = document.getElementById("reset");
let blueButtons = document.querySelectorAll(".button-blue");

var billZero = true; //Variables to check if the corresponding fields have a
var peopleZero = true; //value of 0.
reset.disabled = "disabled";
var k = 0.15; //selected tip percentage; 15% by default

inputBill.value = 0;
inputNumber.value = 0;

////////// Percentage buttons functionality


for (let i = 0; i < blueButtons.length; i++) {
  blueButtons[i].addEventListener("click", makeButtonBlue);
  blueButtons[i].addEventListener("focus", focusButton);
}

function makeButtonBlue() { //15% button is preselected by default and is
  //highlighted with cyan. When you select a different tip % the 15% button
  //becomes dark blue like the rest of the unselected buttons.
  button15.classList.remove("button15default");
}

function focusButton() { //Make chosen button highlighted and all the rest dark blue
  for (let i = 0; i < blueButtons.length; i++) {
    blueButtons[i].classList.remove("button-focus");
  }
  this.classList.add("button-focus");
  k = this.innerHTML;
  k = k.slice(0, -1);
  k = parseFloat(k / 100); //Store tip percentage in k variable
  calculateTip();
}


/////////// Custom button functionality

custom.addEventListener("focus", focusCustom);
custom.addEventListener("focusout", focusOutCustom);
custom.addEventListener("change", changeCustom);
//
function focusCustom() { // Make all the other buttons dark blue
  for (let i = 0; i < blueButtons.length; i++) {
    blueButtons[i].classList.remove("button-focus");
  }
  makeButtonBlue(); //Make 15% button dark blue as well
  this.style.textAlign = "right";
  this.style.padding = "0 5% 0 0";
  this.placeholder = '';
  k = this.value / 100;
  calculateTip();
}

function focusOutCustom() {
  if (custom.value == 0) {
    custom.style.textAlign = "center";
    custom.style.padding = "0 2.5% 0 2.5%";
    custom.value = "";
    custom.placeholder = 'Custom';
  } else {
    custom.style.textAlign = "right";
    custom.style.padding = "0 5% 0 0";
  }
}

function changeCustom() {
  k = this.value / 100;
  calculateTip();
}

////////////// Inputs functionality

inputBill.addEventListener("change", changeBill);
inputNumber.addEventListener("change", changeNumber);

function changeBill(){
  if(this.value==0){
    billZero = true;
  }else{
    billZero = false;
  }
  resetControl();
  calculateTip();
}

function changeNumber() {//Shows a warning when a value of 0 has been entered
  //in the NoP field
  if(this.value==0){
    inputNumber.style.outlineStyle="solid";
    inputNumber.style.outlineColor = "hsl(13, 70%, 61%)";
    inputNumber.style.outlineWidth = "2px";
    notZero.style.display = "inline";
    peopleZero = true;
  } else {
    inputNumber.style.outlineStyle="none";
    notZero.style.display = "none";
    peopleZero = false;
  }
  resetControl();
  calculateTip();
}

function resetControl(){
  if(billZero || peopleZero){
    reset.setAttribute("disabled", "disabled")
  } else {
    reset.removeAttribute("disabled");
  }
} // This function disables "Reset" button when both Bill and NoP fields have a 0 input.

///////////// Tip calculation

const results = document.querySelectorAll(".result-number");
var tip;
var total;

function calculateTip() {
  if(billZero || peopleZero){
    tip = 0;
    total = 0;
  }else{
    tip = inputBill.value*k/inputNumber.value;
    total = inputBill.value/inputNumber.value + tip;
  }
  tip=tip.toFixed(2);
  total=total.toFixed(2);
  results[0].innerHTML = `$${tip}`;
  results[1].innerHTML = `$${total}`;
}


//// Reset button functionality

reset.addEventListener("click", resetClick);

function resetClick() {
  inputBill.value = 0;
  inputNumber.value = 0;
  custom.value = 0;
  k=0.15;
  billZero = true;
  peopleZero = true;
  focusOutCustom();
  reset.disabled = "disabled";
  for (let i = 0; i < blueButtons.length; i++) {
    blueButtons[i].classList.remove("button-focus");
  }
  button15.classList.add("button15default");
  calculateTip();

}
