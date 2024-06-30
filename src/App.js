import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTaskName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newTaskName } : task
      )
    );
  };

  return (
    <div className="flex  justify-center h-screen bg-[#402E7A] ">
      <div className="text-center border rounded-xl	my-6 px-10 bg-[#4B70F5]">
        <h1 className="text-4xl text-[#402E7A]">To-Do List</h1>
        <div className="">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
