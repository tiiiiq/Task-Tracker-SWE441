function addTask() {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;

   

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    
    li.innerHTML = `<strong>${name}</strong> - ${date} - ${time}`;
    taskList.appendChild(li);

    
}