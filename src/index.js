document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
      //Add an event listener for the form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.getElementById('tasks');
        const taskValue = taskInput.ariaValueMax;
        console.log(`Task description: ${taskValue} `)
      })
});
//function createToDo(todo){
//   let p = document.createElement('p');
//   let btn = document.createElement('button');
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = 'x';
//   p.textContent = `${todo}`;
//   p.appendChild(btn);
//   console.log(p);
//   document.querySelector('#create-task-form').appendChild(p);
// }
// function handleDelete(e){
//   e.target.parentNode.remove()
// }

// const form = document.getElementById('create-task-form').addEventListener('submit', () =>
//    submit('Huraay!'));