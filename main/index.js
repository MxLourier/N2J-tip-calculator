let inputNumber = document.getElementById("number-input");
let notZero = document.getElementById("not-zero");
let custom = document.getElementById("custom");
let button15 = document.getElementById("button15");
let reset = document.getElementById("reset");



var billZero = true; //Variables to check if the corresponding fields have a
var peopleZero = true; //value of 0.

function makeButtonBlue(){ //15% button is preselected by default and is
  //highlighted with cyan. When you select a different tip % the 15% button
  //becomes dark blue like the rest of the unselected buttons.
  button15.className = " button-blue";
}

function focusOutBill(event){
  if(event.target.value==0){
    billZero = true;
  }else{
    billZero = false;
  }
  resetControl();
}

function focusOut(event){//Shows a warning when a value of 0 has been entered
  //in the NoP field
  if(event.target.value==0){
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
}

function focusIn(){
  inputNumber.style.outlineStyle="solid";
  inputNumber.style.outlineColor = "hsl(172, 67%, 45%)";
  inputNumber.style.outlineWidth = "2px";
  notZero.style.display = "none";
}

function customFocus() {
  custom.style.textAlign = "right";
  custom.style.padding = "0 5% 0 0";
  custom.placeholder = '';
}

function customFocusOut(event) {
  if(!event.target.value){
    custom.style.textAlign = "center";
    custom.style.padding = "0 2.5% 0 2.5%";
    custom.placeholder = 'Custom';
  }else {
    custom.style.textAlign = "right";
    custom.style.padding = "0 5% 0 0";
  }
}

function focusOut15(){
 button15.className="button-blue";
}

function resetControl(){
  if(billZero && peopleZero){
    reset.setAttribute("disabled", "disabled")
  } else {
    reset.removeAttribute("disabled");
  }
} // This function disables "Reset" button when both Bill and NoP fields have a 0 input.
