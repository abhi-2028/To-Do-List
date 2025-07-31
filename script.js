let task = document.querySelector("input");
let addTask = document.querySelector("button");
let list = document.querySelector("ul");

addTask.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = task.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");

    if (item.innerText != "") {
        list.appendChild(item);
        item.appendChild(dltBtn);
        task.value = "";
    } else {
        alert("Enter task");
    }
});

task.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        let item = document.createElement("li");
        item.innerText = task.value;

        let dltBtn = document.createElement("button");
        dltBtn.innerText = "delete";
        dltBtn.classList.add("delete");

        if (item.innerText != "") {
            list.appendChild(item);
            item.appendChild(dltBtn);
            task.value = "";
        } else {
            alert("Enter task");
        }
    }
})

list.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});