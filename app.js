import { addTask, advanceTask, filterByStatus } from "./model.js";
let tasks = [];
let currentFilter = "all";
const titleInput = document.getElementById("title");
const statusInput = document.getElementById("status");
const addButton = document.getElementById("add");
const listElement = document.getElementById("list");
const filterButtons = document.querySelectorAll(".filter");
function render() {
    listElement.innerHTML = "";
    const visibleTasks = currentFilter === "all"
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
        const status = button.dataset.status;
        if (status === "all") {
            currentFilter = "all";
        }
        else {
            currentFilter = status;
        }
        render();
    });
});
render();
