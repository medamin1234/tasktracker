import { useState } from "react";

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEditChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleEditSave = () => {
    editTask(task.id, newTaskName);
    setIsEditing(false);
  };

  return (
    <div className="flex space-x-2 mt-6">
      {isEditing ? (
        <>
          <input type="text" value={newTaskName} onChange={handleEditChange} />
          <button
            className="border border-gray-500 px-4 h-6 rounded  border-[#3DC2EC] bg-[#3DC2EC]"
            onClick={handleEditSave}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => toggleComplete(task.id)}
            className="cursor-pointer"
          >
            {task.name}
          </span>
          <button
            className="border border-gray-500 px-4 h-6 rounded  border-[#3DC2EC] bg-[#3DC2EC]"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
      <button
        className="border border-gray-500 px-4 h-6 rounded  border-[#3DC2EC] bg-[#3DC2EC]"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
