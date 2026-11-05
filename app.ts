
import {
    Task,
    TaskStatus,
    addTask,
    advanceTask,
    filterByStatus
} from "./model.js";

let tasks: Task[] = [];
let currentFilter: "all" | TaskStatus = "all";

const titleInput = document.getElementById("title") as HTMLInputElement;
const statusInput = document.getElementById("status") as HTMLSelectElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const listElement = document.getElementById("list") as HTMLUListElement;

const filterButtons = document.querySelectorAll(".filter");

function render(): void {
    listElement.innerHTML = "";

    const visibleTasks =
        currentFilter === "all"
            ? tasks
            : filterByStatus(tasks, currentFilter);

    visibleTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";

        const title = document.createElement("span");
        title.textContent = task.title;

        const status = document.createElement("span");
        status.textContent = task.status;

        const advanceButton = document.createElement("button");
        advanceButton.textContent =
            task.status === "done" ? "Completed" : "Advance";

        advanceButton.disabled = task.status === "done";

        advanceButton.onclick = () => {
            tasks = advanceTask(tasks, task.id);
            render();
        };

        li.appendChild(title);
        li.appendChild(status);
        li.appendChild(advanceButton);

        listElement.appendChild(li);
    });
}

addButton.onclick = () => {
    const title = titleInput.value.trim();

    if (title === "") {
        return;
    }

    tasks = addTask(tasks, title);

    titleInput.value = "";
    render();
};

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const status = (button as HTMLButtonElement).dataset.status;

        if (status === "all") {
            currentFilter = "all";
        } else {
            currentFilter = status as TaskStatus;
        }

        render();
    });
});

render();
