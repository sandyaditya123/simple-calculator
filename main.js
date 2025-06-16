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
    if (dropdownButton.textContent === 'Add (+)') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (dropdownButton.textContent === 'Subtract (-)') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (dropdownButton.textContent === 'Multiply (x)') {
        result = parseFloat(num1) * parseFloat(num2);
    } else {
        result = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById('result').textContent = result;
};
