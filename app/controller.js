// import { add_task } from './model'
import { add_task, remove_task } from './model'
import { update_view } from './view'

document.getElementById('input_text').addEventListener('click', add_task)

if (localStorage.getItem('todo') !== null) {
    update_view(JSON.parse(localStorage.todo))
}