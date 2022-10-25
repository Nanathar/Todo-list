const formAdd = document.querySelector('form.form-add');
const formDelete = document.querySelector('form.form-delete');
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

  if (btn.textContent === 'Edit') {
    btn.textContent = 'Save';
    btn.parentNode.classList.add('active')
  } else if (btn.textContent === 'Save') {
    btn.textContent = 'Edit';
    btn.parentNode.classList.remove('active')
  }

  inputEdit.forEach(inputItem => {
    if (btn.textContent === 'Save' && inputItem.parentNode.className === 'active') {
      inputItem.readOnly = '';
    } else if (btn.textContent === 'Edit' && inputItem.parentNode.className === '') {
      inputItem.readOnly = "readonly";
    }
  })
}

const addTask = (e) => {
  e.preventDefault();
  if (inputTask.value === '') return alert('Dear sir/madam add a task !!!');
  const newTask = document.createElement('input');
  newTask.className = 'input-task';
  newTask.value = inputTask.value;
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

  const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();

    if (searchText === '') {
      renderList();
      return
    } else {
      // formSection.textContent = '';
      const divs = [...document.querySelectorAll('div')];
      divs.forEach((div, index) => {
        console.log(div.firstChild.value.toLowerCase())

      })




      // let tasks = [...document.querySelectorAll('.input-task')];
      // tasks.filter(task => task.value.toLowerCase().includes(searchText));
      // tasks.forEach(task => {
      //   formSection.appendChild(div)
      //   div.append(task, btnEdit, btnDelete)
      // })
    }
  }

  inputSearch.addEventListener('input', searchTask)

}

const renderList = () => {
  formSection.textContent = '';
  taskList.forEach((task, i) => {
    task.dataset.key = i;
    formSection.appendChild(task);
  })
}

formAdd.addEventListener('submit', addTask)

const deleteAllTask = (e) => {
  e.preventDefault();
  taskList.splice(0);
  renderList();
  span.textContent = taskList.length;
}

formDelete.addEventListener('submit', deleteAllTask)

// const searchTask = (e) => {
//   const searchText = e.target.value.toLowerCase();
//   let tasks = [...document.querySelectorAll('.input-task')];
//   tasks.filter(task => task.value.toLowerCase().includes(searchText));
//   formSection.textContent = '';
//   tasks.forEach(task => {
//     formSection.append(task, btnEdit, btnDelete)

//   })
// }

// inputSearch.addEventListener('input', searchTask)

// const searchTask = (e) => {
//   const searchText = e.target.value.toLowerCase();

//   if (searchText === '') {
//     renderList();
//     return
//   } else if (true) {
//     formSection.textContent = '';
//     let tasks = [...document.querySelectorAll('.input-task')];
//     tasks.filter(task => task.value.toLowerCase().includes(searchText));
//     tasks.forEach(task => {
//       formSection.append(task, btnEdit, btnDelete)
//     })
//   }
// }

// inputSearch.addEventListener('input', searchTask)