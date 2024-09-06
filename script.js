const input = document.getElementById("input-text");
const btn = document.getElementById("button-addon2");
const ul = document.getElementById("list");
const empty = document.getElementById("empty")


function createAnyElement() {
    let p = document.createElement("p")
    p.innerHTML = input.value
    p.style.backgroundColor = '#f8f9fa';
    p.style.borderRadius = '0.5rem';
    p.style.paddingLeft = '1rem';
    ul.appendChild(p);
    p.appendChild(addBtnDelete(p));
}

function clearInput() {
    input.value = ""
}

function addBtnDelete(item) {
    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.style.marginLeft = '7rem';
    btn.style.border = 'none';
    btn.style.borderRadius = '1rem';
    btn.style.backgroundColor = '#ef233c';
    btn.style.padding = '0.3rem'

    btn.addEventListener("click", () => {
        let elemento = item;
        if (elemento) {
            elemento.remove();
        }
    })
    return btn;
}


btn.addEventListener("click", () => {
    if (input.value) {
        createAnyElement()
    } else {
        alert("ingresa una tarea")
    };

    empty.style.display = 'none'
    clearInput();
});



