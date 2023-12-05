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
    tittleTask.classList.add("task");
    tittleTask.innerHTML = value;
    taskContent.appendChild(tittleTask)
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteBtn());
    list.appendChild(task);
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
  //arrow function o funciones anonimas
  btn.addEventListener('click', createTask);

  const deleteBtn = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask)
    return i 
  }
  const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
  }
})();

//( () => {
  //   const Btn = document.querySelector('[data-form-btn]');
  //   //crear elemento en la lista
  //   const createTask = (e) => {
      
  //     const input = document.querySelector("[data-form-input]");
  //     const value = input.value
  //     const list = document.querySelector('[data-list]');
  //     const task = document.createElement("li");
  //     task.classList.add("card");
  //     const div = document.createElement("div");
  //     const tarea = document.createElement("p")
  //     tarea.classList.add("task");
  //     tarea.innerText = value;
  //     div.appendChild(tarea);
  
  //   }
  
  // })();
  