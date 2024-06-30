import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div>
      <div className="flex space-x-6 mt-5 ">
        <button
          className="border border-gray-500 px-4 h-6 rounded border-[#3DC2EC] bg-[#3DC2EC]"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="border border-gray-500 px-4 h-6 rounded border-[#3DC2EC] bg-[#3DC2EC]"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="border border-gray-500 px-4 h-6 rounded border-[#3DC2EC] bg-[#3DC2EC]"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
