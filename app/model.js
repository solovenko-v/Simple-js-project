export function remove_task(id) {
    let list = JSON.parse(localStorage.getItem('todo'))
    localStorage.setItem('todo', list.filter((item) => item !== id))
}

// export function add_task() {
//     let list = JSON.parse(localStorage.getItem('todo'))
//     // max_ind = list.reduce((maxind, ind) => {})
//     list.push({
//         id: 1,
//         text: document.getElementById('input_text').innerText 
//     })
//     localStorage.setItem('todo', list)
// }