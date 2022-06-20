let inputNumber = document.getElementById("number-input");
let notZero = document.getElementById("not-zero");
let custom = document.getElementById("custom");
let button15 = document.getElementById("button15");

function focusOut(event){
  if(event.target.value==0){
    inputNumber.style.outlineStyle="solid";
    inputNumber.style.outlineColor = "hsl(13, 70%, 61%)";
    inputNumber.style.outlineWidth = "2px";
    notZero.style.display = "inline";
  } else {
    inputNumber.style.outlineStyle="none";
    notZero.style.display = "none";
  }
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
