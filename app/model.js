import { update_view } from './view'

export function remove_task() {
    let list = JSON.parse(localStorage.getItem('todo'))
    localStorage.setItem('todo', list.filter((item) => item !== this.parentNode.id))

    update_view()
}

export function add_task() {
    let list_text = localStorage.getItem('todo')
    let  max_id = 0
    let list = new Array  
    if (list_text !== null) {
        list = JSON.parse(list_text)
        max_id = list.reduce((maxid, el) => el.id > maxid ? el.id : maxid, 0)  
    }
    list.push({
        id: max_id + 1,
        text: document.getElementById('input_text').innerText 
    })
    localStorage.setItem('todo', JSON.stringify(list))

    update_view()
}