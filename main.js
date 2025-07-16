let num1, num2, result;
result = 'Result';

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const myAlert = document.getElementById('alert');
let showAlert = myAlert.classList.add('d-none');

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
        showAlert = myAlert.classList.add('d-none');
    } else if (dropdownButton.textContent === 'Subtract (-)') {
        result = parseFloat(num1) - parseFloat(num2);
        showAlert = myAlert.classList.add('d-none');
    } else if (dropdownButton.textContent === 'Multiply (x)') {
        result = parseFloat(num1) * parseFloat(num2);
        showAlert = myAlert.classList.add('d-none');
    } else if (dropdownButton.textContent === 'Divide (/)') {
        result = parseFloat(num1) / parseFloat(num2);
        showAlert = myAlert.classList.add('d-none');
    } else if (num1 === '' && num2 === '') {
        showAlert = myAlert.classList.remove('d-none');
        myAlert.textContent = 'Please enter the numbers';
    } else if (num1 === '') {
        showAlert = myAlert.classList.remove('d-none');
        myAlert.textContent = 'Please enter the first number';
    } else if (num2 === '') {
        showAlert = myAlert.classList.remove('d-none');
        myAlert.textContent = 'Please enter the second number';
    } else {
        showAlert = myAlert.classList.remove('d-none');
        myAlert.textContent = 'Please choose the operation';
    }
    document.getElementById('result').textContent = result;
};
