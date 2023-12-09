import { createTask } from "../api/tasks";

export const CreateTaskForm = ({ onTaskAdded }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title");

    createTask({ title }).then(() => {
      e.target.reset();

      onTaskAdded();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 mt-10 max-w-sm mx-auto">
      <label htmlFor="task-title" className="block mb-2">
        Co trzeba zrobić?
      </label>
      <input
        id="task-title"
        type="text"
        name="title"
        className="border p-3 w-full"
        placeholder="Co trzeba zrobić?"
      />

      <div className="text-center mt-6">
        <button className="bg-indigo-600 text-white text-lg px-4 py-2 disabled:opacity-60">
          Dodaj nowe zadanie
        </button>
      </div>
    </form>
  );
};
