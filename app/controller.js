// import { add_task } from './model'
import { add_task, remove_task } from './model'
import { update_view } from './view'

<<<<<<< HEAD
let inputField = document.getElementById('input_text')
if (!inputField) {
    document.getElementById('input').innerHTML = '<input type="text" id="input_text">'
    let inputFieldAdded = document.getElementById('input_text')
    inputFieldAdded.addEventListener('onclick', add_task)
}

update_view()

=======
let list_text = localStorage.getItem('todo')
if (typeof(list_text) !== 'undefined' && list_text !== null && list_text !== '') {
    alert(typeof(list_text))
    update_view(JSON.parse(list_text))
    alert(1)
}

JSON.parse(localStorage.getItem('todo'))

function add_task() {
    let list_text = localStorage.getItem('todo')
    if (typeof(list_text) !== 'undefined' && list_text !== null && list_text !== '') {
        list = JSON.parse(list_text)
        max_id = list.reduce((maxid, el) => el.id > maxid ? el.id : maxid) 
    } else {
        max_id = 0
        list = new Array() 
    }
    list.push({
        id: max_id + 1,
        text: document.getElementById('input_text').innerText 
    })
    localStorage.setItem('todo', JSON.list)
}
>>>>>>> 1b73d32d46a770523860b176ef9314298f6b8cf6
