import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
 const { deleteTask, toggleTaskDone } = useTasks();
 const navigate = useNavigate();

 const handleDone = async () => {
    await toggleTaskDone(task.id);
 };

 return (
    <div className="bg-gray-800 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span className={task.done ? "text-green-500" : "text-red-500"}>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDone(task.done)}
        >
          Estado Task
        </button>
      </div>
    </div>
 );
}

export default TaskCard;
