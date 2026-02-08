const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

window.addEventListener('DOMContentLoaded', loadTasks);

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введіть завдання');
        return;
    }

    createTaskElement(taskText);
    taskInput.value = '';
    saveTasks();
}

function createTaskElement(taskText) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';

    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    let tasks = document.querySelectorAll('#taskList li span');
    let tasksArray = [];
    tasks.forEach(task => tasksArray.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

function loadTasks() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        JSON.parse(savedTasks).forEach(taskText => createTaskElement(taskText));
    }
}