let num1, num2, result;

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        let selectedOperation = event.target.textContent;
        dropdownButton.textContent = selectedOperation;
    }
});

document.getElementById('sum-button').onclick = function () {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = 'Result';

    if (dropdownButton.textContent === 'Add (+)' && num1 && num2) {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (dropdownButton.textContent === 'Subtract (-)' && num1 && num2) {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (dropdownButton.textContent === 'Multiply (x)' && num1 && num2) {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (dropdownButton.textContent === 'Divide (/)' && num1 && num2) {
        result = parseFloat(num1) / parseFloat(num2);
    } else if (!num1 && !num2) {
        alert('Please enter the number');
    } else if (!num1 && num2) {
        alert('Please enter the first number');
    } else if (num1 && !num2) {
        alert('Please enter the second number');
    } else {
        alert('Please enter the operation');
    }
    document.getElementById('result').textContent = result;
};
