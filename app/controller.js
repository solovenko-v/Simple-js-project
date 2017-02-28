// import { add_task } from './model'
import { remove_task } from './model'
import { update_view } from './view'

if (localStorage.getItem('todo') !== null) {
    update_view(JSON.parse(localStorage.todo))
}

function add_task() {
    let list_text = localStorage.getItem('todo')
    if (list_text === null) {list_text = JSON.stringify(new Array)}
    let list = JSON.parse(list_text)
    max_id = list.reduce((maxid, el) => el.id > maxid ? el.id : maxid)
    list.push({
        id: 1,
        text: document.getElementById('input_text').innerText 
    })
    localStorage.setItem('todo', list)
}