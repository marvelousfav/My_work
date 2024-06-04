document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
  });
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
  
    taskList.innerHTML = "";
    tasks.forEach(function(task, index) {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.completed) {
        li.classList.add("completed");
      }
      li.onclick = function() {
        toggleTaskCompletion(index);
      };
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    taskInput.value = "";
    loadTasks();
  }
  
  function toggleTaskCompletion(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
  