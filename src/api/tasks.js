export const listTasks = () =>
    fetch("http://localhost:3003/tasks").then((res) => res.json());

export const createTask = (dto) =>
    fetch("http://localhost:3003/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dto),
    }).then((res) => res.json());
