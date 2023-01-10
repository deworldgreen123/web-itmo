function addListElement(text) {
    let myLink = document.createElement('li');
    let nodeText = document.createTextNode(`${text}`);
    myLink.appendChild(nodeText);
    document.querySelector('#result_todo_list').appendChild(myLink);
}

function createListElement() {
    let task = document.getElementById('task').value;
    let task_item = `${task}`;
    if (task !== "") {
        itemsArray.push(task_item);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addListElement(task_item);
    }
    else {
        alert("Заполните поле 'Содержание'!")
    }
}

document.addEventListener("submit", createListElement);

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
document.ready = function()  {
    data.forEach(item => {
        addListElement(item);
    });
};

$(function() {
    var list = document.querySelector("#result_todo_list");
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});