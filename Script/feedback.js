const addListElement = text =>{
    return new Promise(resolve => {
        let myLink = document.createElement('li');
        let nodeText = document.createTextNode(`${text}`);
        myLink.appendChild(nodeText);
        setTimeout(() => {
            document.querySelector('#result_todo_list').appendChild(myLink);
            resolve();
        }, 200)
    })
}

function createListElement() {
    let task = document.getElementById('task').value;
    let task_item = `${task}`;
    if (task !== "") {
        itemsArray.push(task_item);
        localStorage.setItem('items' + v, JSON.stringify(itemsArray));
        addListElement(task_item).then(() => console.log('+'));
    }
    else {
        alert("Заполните поле 'Содержание'!")
    }
}

document.addEventListener("submit", createListElement);
let url = new URL(document.location.href)
let v = url.searchParams.get("numBook")

let itemsArray = localStorage.getItem('items' + v) ? JSON.parse(localStorage.getItem('items' + v)) : [];
localStorage.setItem('items' + v, JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items' + v));
document.ready = function()  {
    data.forEach(item => {
        addListElement(item).then(() => console.log('+'));
    });
};

$(function() {
    document.querySelector("#result_todo_list").addEventListener('click', function(ev) {}, false);
});