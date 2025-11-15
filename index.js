const task = document.getElementById("task_input");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const show = document.getElementById("show");
const li = document.getElementById("tasks");
const tasks = [];  


add.onclick = function(){
    let input = task.value;

    if (input===""){
        li.textContent= "plz enter a task!";
    }
    else{
        tasks.push(input);
    }
    
task.value = "";
}
remove.onclick = function(){
    let input = task.value;
   

    if (input===""){
        li.textContent= "plz enter a task you want to delete!";
    }
    else{
        const index = tasks.indexOf(input);
        if (index > -1) {
    tasks.splice(index, 1);
     }
    }
    task.value = "";

}
show.onclick = function(){
    let input = task.value;

    if (tasks.length===0){
        li.textContent= "nothing here plz enter a task!";
    }
    else{
        li.innerHTML = "";
        tasks.forEach(function(task) {
            const element = document.createElement("li"); // create <li>
            element.textContent = task ;                     // set task text
            li.appendChild(element);                     // add to <ol>
        })
    }
    
task.value = "";
}

