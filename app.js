function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const toDoList = document.getElementById('toDoList');
  const newToDoText = document.getElementById('newToDoText');

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteButton = document.createElement('button')

    deleteButton.innerHTML = 'delete';


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.innerHTML = title;

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach deleteButton to the li
    newLi.appendChild(deleteButton);

    //empty the input
    newToDoText.value = '';

    deleteButton.addEventListener ('click', function() {
      newLi.parentNode.removeChild(newLi);
    })
  });
}

window.onload = function() {
  onReady();
}
