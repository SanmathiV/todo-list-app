// Get elements from the page
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addBtn.addEventListener('click', function() {

    // Get the text from input box
    const taskText = taskInput.value;

    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = 'red';

    // Delete task when delete button is clicked
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Add delete button to list item
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = '';
});
