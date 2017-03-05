import { remove_task } from './model'

export function update_view() {
    if (localStorage.getItem('todo') !== null) {
        let list = JSON.parse(localStorage.todo)
        let html_list = list.reduce((previous, current) => `${previous}<li class="task" 
                        id="${current.id}">${current.text}
                        <button id="${'b' + current.id}">x</button></li>`, '')

        document.getElementById("list").innerHTML += html_list

        // add handlers for buttons
        list.forEach(function(element) {
            document.getElementById('b' + element.id).addEventListener('onclick', remove_task)
        }, this);

    }
}

function update_view_1() {
     if (localStorage.getItem('todo') !== null) {
        let elParent = document.getElementById("list")
        let elList = list.map((item, index, array) => {
            let el = document.createElement('li')
            el.className = 'task'
            el.id = item.id
            el.innerText = item.text
            let button = document.createElement('button').addEventListener
            button.innerText = 'x'
            elParent.insertBefore(el, null)
            let nel = document.getElementById(JSON.stringify(item.id))
            alert(toString(nel))
            nel.insertBefore(button, null)
            button.addEventListener('onclick', remove_task)
            return nel
        }) 
     }
}