let inputNumber = document.getElementById("number-input");
let notZero = document.getElementById("not-zero");

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
