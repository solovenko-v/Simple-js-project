export function remove_task(id) {
    let list = JSON.parse(localStorage.getItem('todo'))
    localStorage.setItem('todo', list.filter((item) => item !== id))
}

export function add_task() {
    let list_text = localStorage.getItem('todo')
    alert(list_text)
    if (list_text !== null) {
        list = JSON.parse(list_text)
        max_id = list.reduce((maxid, el) => el.id > maxid ? el.id : maxid, 0)
    } else {
        max_id = 0
        list = new Array     
    }
    list.push({
        id: max_id + 1,
        text: document.getElementById('input_text').innerText 
    })
    localStorage.setItem('todo', JSON.stringify(list))
}