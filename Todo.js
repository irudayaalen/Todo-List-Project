// script.js
document.addEventListener("DOMContentLoaded", () => {
   const addButton = document.getElementById("add-task-btn");
   const taskInput = document.getElementById("task-input");
   const taskList = document.getElementById("task-list");

   // Add new task
   addButton.addEventListener("click", () => {
       const taskText = taskInput.value.trim();

       if (taskText !== "") {
           const li = document.createElement("li");

           // Add task text
           li.textContent = taskText;

           // Create a delete button for the task
           const deleteButton = document.createElement("button");
           deleteButton.textContent = "Delete";
           deleteButton.classList.add("delete-btn");
           li.appendChild(deleteButton);

           // Mark task as completed
           li.addEventListener("click", () => {
               li.classList.toggle("completed");
           });

           // Delete task
           deleteButton.addEventListener("click", (e) => {
               e.stopPropagation(); // Prevent marking task as completed when deleting
               li.remove();
           });

           taskList.appendChild(li);
           taskInput.value = ""; // Clear input field
       }
   });

   // Optional: Allow pressing 'Enter' to add a task
   taskInput.addEventListener("keypress", (e) => {
       if (e.key === "Enter") {
           addButton.click();
       }
   });
});
