const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter Task");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        // li.setAttribute("class","unchecked")
        var button = document.createElement("button");
        button.innerText = "Delete";
        li.appendChild(button);
        button.setAttribute("class", "delete");
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}, false);