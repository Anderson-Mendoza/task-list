const input = document.getElementById("input-text");
const btn = document.getElementById("button-addon2");
const ul = document.getElementById("list");


function createElementLi() {
    let li = document.createElement("li");
    li.innerHTML = input.value
    ul.appendChild(li);
}

function clearInput() {
    input.value = ""
}



btn.addEventListener("click", (e) => {
    e.preventDefault()
    createElementLi()
    clearInput()
})



