const input = document.getElementById("input-writte-task");
const button = document.getElementById("button-add-task");
const ulTaskList = document.getElementById("ul-task-list");
const form = document.getElementById("form")
const tittle = document.getElementById("empty-task-list")
let tasks = []


form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault()

    let task = document.getElementById("input-writte-task").value
    if (!task.trim()) {
        tittle.textContent = "¡Empty form!"
        setTimeout(() => {
            tittle.textContent = "Task list"
        }, 2000)
        return
    }

    const objTask = {
        id: Date.now(),
        task: task,
        state: false
    }
    tasks = [...tasks, objTask];
    form.reset()
    showHTML()
}

function showHTML() {
    ulTaskList.innerHTML = "";
    tasks.forEach((itemTask) => {
        let item = document.createElement("li")
        item.appendChild(document.createTextNode(`${itemTask.task}`))
        item.classList.add("list-task")
        ulTaskList.appendChild(item)
    })
}

