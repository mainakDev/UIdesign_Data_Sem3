const inputValue = document.querySelector('input');
const addItemButton = document.querySelector('button');
const itemList = document.querySelector('ul');
let value;
addItemButton.addEventListener('click', () => {
    value = inputValue.value;
    console.log(value);
    inputValue.value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const listButton = document.createElement('button');
    span.textContent = value;
    listButton.textContent = 'Delete';
    listItem.appendChild(span);
    listItem.appendChild(listButton);
    itemList.appendChild(listItem);
});