import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (v) => {
    v.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={taskName}
          onChange={(v) => setTaskName(v.target.value)}
        />
        <button
          className="border border-gray-500 px-4 h-6 rounded border-[#3DC2EC] bg-[#3DC2EC]"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
