import { add_task, remove_task } from './model'
import { update_view } from './view'

let inputField = document.getElementById('input_text')
if (!inputField) {
    document.getElementById('input').innerHTML = '<input type="text" id="input_text">'
    let inputFieldAdded = document.getElementById('input_text')
    inputFieldAdded.addEventListener('change', add_task)
}

update_view()