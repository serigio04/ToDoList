( () => {

  const btn = document.querySelector('[data-form-btn]');

  const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = " ";
    //backlist
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span");
    const div_priority = document.createElement("div");
    tittleTask.classList.add("task");
    tittleTask.innerHTML = value;
    taskContent.appendChild(tittleTask)
    task.appendChild(taskContent);
    div_priority.appendChild(addPriority())
    div_priority.appendChild(deleteBtn());
    task.appendChild(div_priority)
    list.appendChild(task);
  }
  
  btn.addEventListener('click', createTask);

  const addPriority = () =>{
    const Select_priority = document.querySelector('[data-form-priority]');
    const priority = Number(Select_priority.value)
    const priText = document.createElement("span")
    let level
    switch (priority){
      case 1:
        level = "High"
        priText.classList.add("high")
        break
      case 2:
        level = "Middle"
        priText.classList.add("middle")
        break
      case 3: 
        level = "Low"
        priText.classList.add("low")
        break
      default:
        level = "un"
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
    const parent = e.target.parentElement;
    parent.remove();
  }
})();
  