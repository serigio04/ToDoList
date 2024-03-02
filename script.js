( () => {

  const btn = document.querySelector('[data-form-btn]');
  var taskList = [];

  const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = " ";
    //objeto task
    const objTask = {
      value: value,
      priority: Number(document.querySelector('[data-form-priority]').value)
    };
    addTaskToArray(objTask);

    //backlist
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span");
    const div_priority = document.createElement("div");
    tittleTask.classList.add("task");
    tittleTask.innerHTML = value;
    taskContent.appendChild(tittleTask)
    div_priority.appendChild(addPriority(objTask.priority))
    div_priority.appendChild(deleteBtn());
    task.appendChild(taskContent);
    task.appendChild(div_priority);
    const select_priority = document.querySelector('[data-form-priority]');
    const priority = Number(select_priority.value);
    if (priority == 1){
      list.prepend(task);
    }else{
      list.appendChild(task);
    };
    input.focus()
    console.log(taskList);
  }
  
  btn.addEventListener('click', createTask);

  const addTaskToArray = (objTask) => {
    if (objTask.priority === 1 ){
      taskList.unshift(objTask);
    }else{
      taskList.push(objTask);
    }
  }

  const addPriority = () =>{
    const select_priority = document.querySelector('[data-form-priority]');
    const priority = Number(select_priority.value);
    const priText = document.createElement("span");
    let level
    switch (priority){
      case 1:
        level = "High";
        priText.classList.add("high");
        break
      case 2:
        level = "Middle";
        priText.classList.add("middle");
        break
      case 3: 
        level = "Low";
        priText.classList.add("low");
        break
      default:
        level = "un";
        break
    }
    priText.innerText = level
    return priText 
  }

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
  }
  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle('far');
    element.classList.toggle("completeIcon");
    const spanElement = element.parentElement.querySelector(".task");
    spanElement.classList.toggle("finish__task");
  }

  const deleteBtn = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask)
    return i 
  }

  const deleteTask = (e) => {
    const task = e.target.closest('li');
    if (task) {
      const index = taskList.indexOf(task);
      if (index !== -1){
        taskList.splice(index, 1);
      }
      task.remove();
    }
  }
})();
