function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;

      const deleteBtn = document.createElement('button')
      deleteBtn.innerHTML = '<span>Delete</span>';

      newLi.innerHTML = toDo.title;

      checkbox.addEventListener('click', function() {
        toDo.complete = checkbox.checked ? true : false;
      });


      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', () => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
