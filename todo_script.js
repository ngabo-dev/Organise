document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const descriptionInput = document.getElementById('description-input');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      const descriptionText = descriptionInput.value.trim();
      if (taskText !== '') {
        addTask(taskText, descriptionText);
        taskInput.value = '';
        descriptionInput.value = '';
      }
    });
  
    function addTask(taskText, descriptionText) {
      const li = document.createElement('li');
      li.textContent = taskText + " - " + descriptionText;
  
      const assignmentDate = new Date();
      const assignmentDateString = assignmentDate.toDateString();
      const assignmentDateSpan = document.createElement('span');
      assignmentDateSpan.textContent = 'Assigned: ' + assignmentDateString;
      assignmentDateSpan.style.marginLeft = '10px';
      li.appendChild(assignmentDateSpan);
  
      const deadlineDate = new Date();
      deadlineDate.setDate(deadlineDate.getDate() + 10); // Set deadline 10 days from assignment
      const deadlineDateString = deadlineDate.toDateString();
      const deadlineDateSpan = document.createElement('span');
      deadlineDateSpan.textContent = 'Deadline: ' + deadlineDateString;
      deadlineDateSpan.style.marginLeft = '10px';
      li.appendChild(deadlineDateSpan);
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          const completionDate = new Date();
          const completionDateString = completionDate.toDateString();
          const completionDateSpan = document.createElement('span');
          completionDateSpan.textContent = 'Completed: ' + completionDateString;
          completionDateSpan.style.marginLeft = '10px';
          li.appendChild(completionDateSpan);
  
          li.classList.add('completed');
          completedTaskList.appendChild(li);
        } else {
          li.classList.remove('completed');
          taskList.appendChild(li);
        }
      });
  
      li.appendChild(checkbox);
      taskList.appendChild(li);
    }
  });