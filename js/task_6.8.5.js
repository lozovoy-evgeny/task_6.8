const changeLink = document.querySelector('#changeLink');

changeLink.addEventListener('click', (event) => {
    event.preventDefault();
    changeLink.textContent = prompt();  
})
