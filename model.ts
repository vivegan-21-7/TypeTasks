// TypeTasks - Part 1

// A task can only have one of these statuses
type TaskStatus = "todo" | "in-progress" | "done";

// This defines the structure of every task
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
// Used to give each new task a unique ID
let nextId = 1;

// Add a new task
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}
// Mark a task as done using its ID
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}
// Return only tasks with the selected status
function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}
// Delete a task using its ID
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}