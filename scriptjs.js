const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const completedCount = document.getElementById("completed-count");
const totalCount = document.getElementById("total-count");

let cc = 0; // Completed tasks count
let tc = 0; // Total tasks count

addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoCard = document.createElement('div');
    todoCard.className = "todocard";
    
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;
    todoSpan.className = "todoSpan";
    todoCard.appendChild(todoSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'yes';
    completeButton.className = "completebutton";
    todoCard.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'no';
    deleteButton.className = "deletebutton";
    todoCard.appendChild(deleteButton);

    todoList.append(todoCard);
    tc++;
    updateTotalCount();
    todoInput.value = '';

    completeButton.addEventListener('click', () => {
      if (!todoCard.classList.contains("completed")) {
        todoCard.classList.add("completed");
        cc++;
        updateCompletedCount();
      } else {
        todoCard.classList.remove("completed");
        cc--;
        updateCompletedCount();
      }
    });

    deleteButton.addEventListener('click', () => {
      if (todoCard.classList.contains("completed")) {
        cc--;
      }
      tc--;
      todoList.removeChild(todoCard);
      updateCompletedCount();
      updateTotalCount();
    });
  }
});

function updateCompletedCount() {
  completedCount.textContent = cc;
}

function updateTotalCount() {
  totalCount.textContent = tc;
}
