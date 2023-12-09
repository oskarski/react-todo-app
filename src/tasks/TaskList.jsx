export const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => (
        <li key={task.id} className="p-5 border flex items-center">
          {task.title}
        </li>
      ))}
    </ul>
  );
};
