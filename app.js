// 1. get the id from input fields
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let result = document.getElementById("result");

// 2. sum the values
function sum() {
  let sum = Number(input1.value) + Number(input2.value);
  return sum;
}

// add event listener to the button and display the result
document.getElementById("btn").addEventListener("click", function () {
  let resultValue = sum();
  result.textContent = "Result: " + resultValue;
});
