const formHeader = document.querySelector('form.header-form');
const formSection = document.querySelector('form.section-form');
const inputTask = document.querySelector('input.input-new-task');
const inputSearch = document.querySelector('input.input-search')
const span = document.querySelector('h3 span');

const taskList = [];

const removeTask = (e) => {
  e.preventDefault();
  const index = e.target.parentNode.dataset.key;
  taskList.splice(index, 1);
  renderList();
  span.textContent = taskList.length;
}

const editTask = (e) => {
  e.preventDefault();
  const btn = e.target
  const style = () => {
    btn.style.backgroundClip = 'text';
    btn.style.webkitBackgroundClip = 'text';
    btn.style.webkitTextFillColor = 'transparent';
  }

  if (btn.textContent === 'Edit') {
    btn.textContent = 'Save';
    btn.style.background = '-webkit-linear-gradient(rgba(238, 238, 238, 0.8078431373), rgba(26, 13, 218, 0.7882352941))';
    style();
  } else if(btn.textContent === 'Save') {
    btn.textContent = 'Edit';
    btn.style.background = '-webkit-linear-gradient(rgba(238, 238, 238, 0.8078431373), rgb(79, 78, 82))';
    style();
  }

}

const addTask = (e) => {
  e.preventDefault();
  const task = inputTask.value;
  if (task === '') return alert('Dear sir/madam add a task !!!');
  const newTask = document.createElement('input');
  newTask.className = 'input-task';
  newTask.value = task;
  newTask.readOnly = "readonly";
  const btnEdit = document.createElement('button');
  btnEdit.textContent = 'Edit';
  btnEdit.className = 'btn-edit';
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete';
  btnDelete.className = 'btn-delete';
  const div = document.createElement('div');
  div.append(newTask, btnEdit, btnDelete);
  taskList.push(div);
  renderList();
  div.querySelector('.btn-delete').addEventListener('click', removeTask);
  div.querySelector('.btn-edit').addEventListener('click', editTask);
  span.textContent = taskList.length;
  inputTask.value = '';
}

const renderList = () => {
  formSection.textContent = '';
  taskList.forEach((task, i) => {
    task.dataset.key = i;
    formSection.appendChild(task);
  })
}

formHeader.addEventListener('submit', addTask)