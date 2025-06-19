const Calculator = document.getElementById('Calculator');
const Calculator_display = document.getElementById('Calculator_display');

Calculator.addEventListener('click', e=> {
if(e.target.nodeName === "BUTTON"){
switch(e.target.textContent) {
case "C":
clear();
break;
case "DEL":
deleteOneValue();
break;
case "=":
evaluate();
break;
default:
addToCalculator_display(e.target.textContent);




}}});

function clear(){
    Calculator_display.textContent = '';
}

function addToCalculator_display(value) {
    Calculator_display.textContent = Calculator_display.textContent + value;
}
function deleteOneValue() {
    Calculator_display.textContent = Calculator_display.textContent.slice(0, -1);
}
function evaluate() {
    try {
        let calcuation = eval(Calculator_display.textContent);
        Calculator_display.textContent = calcuation;
    } catch (error) {
        Calculator_display.textContent = "Invalid Operation";
        console.error( error);
    }}
