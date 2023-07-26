const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('#button');
const input = document.querySelector('input');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = "";
    input.value = "";
})

input.addEventListener('keydown', () => {
    duplicateField.textContent = input.value;
})