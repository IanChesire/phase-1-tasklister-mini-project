document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    if(taskValue !== ''){
      //Create a new list
      const listItem = document.createElement('li');
      listItem.textContent = taskValue;
      //Append the new list of tasks
      tasksList.appendChild(listItem);
      //clear input field
      taskInput.value = '';
    };
  });
});