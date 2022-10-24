const formHeader = document.querySelector('form.header-form');
const formSection = document.querySelector('form.section-form');
const inputTask = document.querySelector('input.input-new-task');
const inputSearch = document.querySelector('input.input-search')
const span = document.querySelector('h3 span');
const taskList = [];



const addTask = (e) => {
  e.preventDefault();
  const task = inputTask.value;
  if (task === '') return alert('Dear sir/madam add a task !!!');
  const newTask = document.createElement('input');
  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');
  btnEdit.textContent = 'Edit';
  btnDelete.textContent = 'Delete';
  newTask.className = 'input-task';
  newTask.value = task;
  newTask.readOnly = "readonly";
  formSection.append(newTask, btnEdit, btnDelete);





  inputTask.value = '';
}

formHeader.addEventListener('submit', addTask)