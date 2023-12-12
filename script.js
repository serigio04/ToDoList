(() => {
  const btn = document.querySelector('[data-form-btn]');
  const taskInput = document.querySelector('[data-form-input]');
  const prioritySelect = document.querySelector('[data-form-priority]');
  const taskList = document.querySelector('[data-list]');

  const loadTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    storedTasks.forEach(task => {
      if (!task.completed) {
        const taskElement = createTaskElement(task.value, task.priority);
        taskList.appendChild(taskElement);
      }
    });
  };

  const createTaskElement = (value, priority, completed) => {
    const task = document.createElement("li");
    task.classList.add("card");
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete(completed));
    const tittleTask = document.createElement("span");
    const div_priority = document.createElement("div");
    tittleTask.classList.add("task");
    tittleTask.innerHTML = value;
    taskContent.appendChild(tittleTask);
    task.appendChild(taskContent);
    div_priority.appendChild(addPriority(priority));
    div_priority.appendChild(deleteBtn());
    task.appendChild(div_priority);

    return task;
  };

  const createTask = (e) => {
    e.preventDefault();
    const value = taskInput.value;
    const priority = Number(prioritySelect.value);

    if (value.trim() !== '') {
      const taskElement = createTaskElement(value, priority, false);
      taskList.appendChild(taskElement);
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      storedTasks.push({ value, priority, completed: false });
      localStorage.setItem('tasks', JSON.stringify(storedTasks));

      taskInput.value = "";
    }
  };

  const addPriority = (priority) => {
    const priText = document.createElement("span");
    let level;

    switch (priority) {
      case 1:
        level = "High";
        priText.classList.add("high");
        break;
      case 2:
        level = "Middle";
        priText.classList.add("middle");
        break;
      case 3:
        level = "Low";
        priText.classList.add("low");
        break;
      default:
        level = "un";
        break;
    }

    priText.innerText = level;
    return priText;
  };

  const checkComplete = (completed) => {
    const i = document.createElement("i");
    i.classList.add(completed ? 'fas' : 'far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle('far');
    element.classList.toggle("completeIcon");
    const completElement = element.parentElement.querySelector(".task");
    completElement.classList.toggle("finish__task");
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskValue = completElement.innerText;
    const updatedTasks = storedTasks.map(task => {
      if (task.value === taskValue) {
        task.completed = !task.completed;
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteBtn = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
  };

  const deleteTask = (event) => {
    const liElement = event.currentTarget.closest('.card');
    if (liElement) {
      liElement.remove()
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskValue = liElement.querySelector(".task").innerText;
    const updatedTasks = storedTasks.filter(task => task.value !== taskValue);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
  }

  btn.addEventListener('click', createTask);

  loadTasks();
})();
// ( () => {

//   const btn = document.querySelector('[data-form-btn]');

//   const createTask = (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     const value = input.value;
//     const list = document.querySelector('[data-list]');
//     const task = document.createElement("li");
//     task.classList.add("card");
//     input.value = " ";
//     //backlist
//     const taskContent = document.createElement("div");
//     taskContent.appendChild(checkComplete());
//     const tittleTask = document.createElement("span");
//     const div_priority = document.createElement("div");
//     tittleTask.classList.add("task");
//     tittleTask.innerHTML = value;
//     taskContent.appendChild(tittleTask)
//     task.appendChild(taskContent);
//     div_priority.appendChild(addPriority())
//     div_priority.appendChild(deleteBtn());
//     task.appendChild(div_priority)
//     list.appendChild(task);
//   }
  
//   btn.addEventListener('click', createTask);

//   const addPriority = () =>{
//     const Select_priority = document.querySelector('[data-form-priority]');
//     const priority = Number(Select_priority.value)
//     const priText = document.createElement("span")
//     let level
//     switch (priority){
//       case 1:
//         level = "High"
//         priText.classList.add("high")
//         break
//       case 2:
//         level = "Middle"
//         priText.classList.add("middle")
//         break
//       case 3: 
//         level = "Low"
//         priText.classList.add("low")
//         break
//       default:
//         level = "un"
//         break
//     }
//     priText.innerText = level
//     return priText 
//   }

//   const checkComplete = () => {
//     const i = document.createElement("i");
//     i.classList.add('far', 'fa-check-square', 'icon');
//     i.addEventListener("click", completeTask);
//     return i;
//   }
//   const completeTask = (event) => {
//     const element = event.target;
//     element.classList.toggle("fas");
//     element.classList.toggle('far');
//     element.classList.toggle("completeIcon");
//     const spanElement = element.parentElement.querySelector(".task");
//     spanElement.classList.toggle("finish__task");
//   }

//   const deleteBtn = () => {
//     const i = document.createElement('i');
//     i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
//     i.addEventListener('click', deleteTask)
//     return i 
//   }
//   const deleteTask = (event) => {
//     const parent = event.target.parentElement;
//     parent.remove();
//   }
// })(); 