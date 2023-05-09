import './style.css';
// https://github.com/seoyeon-jung

let addBtn = document.querySelector('#addBtn');
let inputTxt = document.querySelector('.inputTxt');
let todo_list = document.querySelector('.todo-list');
let delTodo = document.querySelectorAll('.delBtn');
let todoList = document.querySelectorAll('.list');
let allBtn = document.querySelector('.btn-all');
let doingBtn = document.querySelector('.btn-doing');
let doneBtn = document.querySelector('.btn-done');
let todoCheck = document.querySelector('.todoCheck');
let allSelectBtn = document.querySelector('.allSelect-btn');
let allDelete = document.querySelector('.allDelete');

// Adding
inputTxt.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    addList();
  }

  checkList();
  delList();
});

// Adding2
addBtn.addEventListener('click', function () {
  addList();
  checkList();
  delList();
});

// inputTxt control function
function addList() {
  if (inputTxt.value !== '') {
    // create list <div> & attribute
    let list = document.createElement('div');
    list.setAttribute('class', 'list');
    list.innerHTML = `<label class="listLb"><input type="checkbox" class="todoCheck">${inputTxt.value}</label><button class="delBtn">x</button>`;

    todo_list.appendChild(list);
    inputTxt.value = '';
    inputTxt.style.borderBottom = '1px solid rgb(163, 155, 155)';
  } else {
    alert('Please input your todoList');
  }
}

// Check List
function checkList() {
  todoCheck = document.querySelectorAll('.todoCheck');
  let listLb = document.querySelectorAll('.listLb');

  todoCheck.forEach((listEl, index) =>
    listEl.addEventListener('click', function () {
      if (listEl.checked === true) {
        listLb[index].style.textDecoration = 'line-through';
      } else {
        listLb[index].style.textDecoration = 'none';
      }

      // listCount();
    })
  );
}

// Delete one
function delList() {
  delTodo = document.querySelectorAll('.delBtn');
  todoList = document.querySelectorAll('.list');

  delTodo.forEach((delEl, index) =>
    delEl.addEventListener('click', function () {
      todoList[index].remove();
    })
  );

  // listCount();
}

// Search All
allBtn.addEventListener('click', function () {
  todoList = document.querySelectorAll('.list');

  todoList.forEach((listEl) => {
    listEl.style.display = '';
  });
});

// Search -ing
doingBtn.addEventListener('click', function () {
  todoList = document.querySelectorAll('.list');

  for (let i = 0; i < todoCheck.length; i++) {
    if (todoCheck[i].checked === true) {
      todoList[i].style.display = 'none';
    } else {
      todoList[i].style.display = '';
    }
  }
});

// 완료
doneBtn.addEventListener('click', function () {
  todoList = document.querySelectorAll('.list');

  for (let i = 0; i < todoCheck.length; i++) {
    if (todoCheck[i].checked === true) {
      todoList[i].style.display = '';
    } else {
      todoList[i].style.display = 'none';
    }
  }
});

// 전체선택
allSelectBtn.addEventListener('click', function () {
  todoCheck = document.querySelectorAll('.todoCheck');
  listLb = document.querySelectorAll('.listLb');

  if (allSelectBtn.checked === true) {
    // 전체선택 클릭 시
    for (let i = 0; i < todoCheck.length; i++) {
      todoCheck[i].checked = true;
      listLb[i].style.textDecoration = 'line-through';
    }
  } else {
    // 전체선택 해제 시
    for (let i = 0; i < todoCheck.length; i++) {
      todoCheck[i].checked = false;
      listLb[i].style.textDecoration = '';
    }
  }
});

// 전체삭제
allDelete.addEventListener('click', function () {
  todo_list.innerHTML = '';
  allSelectBtn.checked = false;
});
