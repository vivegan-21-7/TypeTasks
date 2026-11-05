// TypeTasks - Typed Model
let nextId = 1;
// Add a new task
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo"
    };
    return [...tasks, newTask];
}
// Complete a task
export function completeTask(tasks, id) {
    return tasks.map(task => task.id === id ? { ...task, status: "done" } : task);
}
// Advance task: todo -> in-progress -> done
export function advanceTask(tasks, id) {
    return tasks.map(task => {
        if (task.id !== id)
            return task;
        const nextStatus = task.status === "todo"
            ? "in-progress"
            : task.status === "in-progress"
                ? "done"
                : "done";
        return { ...task, status: nextStatus };
    });
}
// Filter tasks
export function filterByStatus(tasks, status) {
    return tasks.filter(task => task.status === status);
}
// Delete a task
export function deleteTask(tasks, id) {
    return tasks.filter(task => task.id !== id);
}
