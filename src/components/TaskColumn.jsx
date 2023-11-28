import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ colName, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img className="task-column-icon" src={icon} alt="" />
        {colName}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tagz={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
