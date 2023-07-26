const consoleLog = document.querySelector('#consoleLog');
const alertId = document.querySelector('#alert');
const promptId = document.querySelector('#prompt');

promptId.addEventListener('click', () => {
    alert('Можно использовать для ввода информации')
})

alertId.addEventListener('click', () =>{
    alert('Служит для вывода сообщения пользователю о какой-то важной информации')
})

consoleLog.addEventListener('click',  () => {
    alert('Служит для вывода сообщения пользователю в консоль');
})