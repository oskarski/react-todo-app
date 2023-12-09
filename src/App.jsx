import { useEffect, useState } from "react";
import { listTasks } from "./api/tasks";
import { CreateTaskForm } from "./tasks/CreateTaskForm";
import { TaskList } from "./tasks/TaskList";

export const App = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    listTasks().then(setTasks);
  }, []);

  const refreshTaskList = () => listTasks().then(setTasks);

  return (
    <main className="p-6 pb-16">
      <img
        src="/assets/todo-bg.jpg"
        alt="Logo"
        width={480}
        height={320}
        className="hidden md:block mx-auto mb-6"
      />

      <h1 className="text-4xl font-medium text-gray-900 text-center">
        Do zrobienia
      </h1>

      <CreateTaskForm onTaskAdded={refreshTaskList} />

      {tasks && (
        <div className="px-6 mt-8">
          <TaskList tasks={tasks} />
        </div>
      )}
    </main>
  );
};
