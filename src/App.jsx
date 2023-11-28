import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import progress from "./assets/glowing-star.png";
import done from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("Tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log("Tasks", tasks);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <hr></hr>
      <main className="app-main">
        <TaskColumn
          colName="To-Do"
          icon={Todo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          colName="In-Progress"
          icon={progress}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          colName="Done"
          icon={done}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
