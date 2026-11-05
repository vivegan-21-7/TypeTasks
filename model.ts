
// TypeTasks - Typed Model

export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// Add a new task
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// Complete a task
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// Advance task: todo -> in-progress -> done
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task => {
    if (task.id !== id) return task;

    const nextStatus: TaskStatus =
      task.status === "todo"
        ? "in-progress"
        : task.status === "in-progress"
          ? "done"
          : "done";

    return { ...task, status: nextStatus };
  });
}

// Filter tasks
export function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter(task => task.status === status);
}

// Delete a task
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter(task => task.id !== id);
}
