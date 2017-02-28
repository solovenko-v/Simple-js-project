// import { add_task } from './model'
import { remove_task } from './model'
import { update_view } from './view'

if (localStorage.getItem('todo') !== null) {
    update_view(JSON.parse(localStorage.todo))
}

function add_task() {
    let list_text = localStorage.getItem('todo')
    alert(list_text)
    if (list_text !== null) {
        // list = JSON.parse(list_text)
        max_id = list_text.reduce((maxid, el) => el.id > maxid ? el.id : maxid)
    } else {
        max_id = 0
        list = new Array     
    }
    list.push({
        id: max_id + 1,
        text: document.getElementById('input_text').innerText 
    })
    localStorage.setItem('todo', list)
}