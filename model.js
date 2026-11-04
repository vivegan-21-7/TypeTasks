"use strict";
// TypeTasks - Part 1
Object.defineProperty(exports, "__esModule", { value: true });
// Used to give each new task a unique ID
let nextId = 1;
// Add a new task
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
// Mark a task as done using its ID
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id
        ? { ...task, status: "done" }
        : task);
}
// Return only tasks with the selected status
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// Delete a task using its ID
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
//# sourceMappingURL=model.js.map