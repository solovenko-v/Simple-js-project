// import { add_task } from './model'
import { remove_task } from './model'
import { update_view } from './view'

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