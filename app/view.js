export function update_view(list) {
    let html_list = list.reduce((previous, current) => `${previous}<li>${current.text}
                    <button onclick="remove_task(${current.id})">x</button></li>`, '')
    document.getElementById("main").innerHTML = `<ul>
        ${html_list}
    </ul>`
}