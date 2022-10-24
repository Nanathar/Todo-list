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
  const btn = e.target;
  const inputEdit = document.querySelectorAll('.input-task');
  const style = (item) => {
    item.style.backgroundClip = 'text';
    item.style.webkitBackgroundClip = 'text';
    item.style.webkitTextFillColor = 'transparent';
  }

  if (btn.textContent === 'Edit') {
    btn.textContent = 'Save';
    btn.parentNode.classList.add('active')
    btn.style.background = '-webkit-linear-gradient(rgba(238, 238, 238, 0.8078431373), rgba(26, 13, 218, 0.7882352941))';
    style(btn);
  } else if (btn.textContent === 'Save') {
    btn.textContent = 'Edit';
    btn.parentNode.classList.remove('active')
    btn.style.background = '-webkit-linear-gradient(rgba(238, 238, 238, 0.8078431373), rgb(79, 78, 82))';
    style(btn);
  }

  inputEdit.forEach(inputItem => {
    if (btn.textContent === 'Save' && inputItem.parentNode.className === 'active') {
      inputItem.style.color = '#5255e7';
      inputItem.style.fontWeight = 'bold';
      inputItem.readOnly = '';
    } else if (btn.textContent === 'Edit' && inputItem.parentNode.className === '') {
      inputItem.style.color = '#eeeeeece';
      inputItem.style.fontWeight = 'normal';
      inputItem.readOnly = "readonly";
    }
  })

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