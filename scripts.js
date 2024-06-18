document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const urgent = document.getElementById('urgent').checked;
    const important = document.getElementById('important').checked;
    
    const task = taskInput.value;
    taskInput.value = '';
    
    if (!task) {
        alert('Please enter a task.');
        return;
    }
    
    let quadrantId;
    if (urgent && important) {
        quadrantId = 'doFirst';
    } else if (important) {
        quadrantId = 'schedule';
    } else if (urgent) {
        quadrantId = 'delegate';
    } else {
        quadrantId = 'eliminate';
    }
    
    const listItem = document.createElement('li');
    listItem.textContent = task;
    
    document.getElementById(quadrantId).querySelector('ul').appendChild(listItem);
});
