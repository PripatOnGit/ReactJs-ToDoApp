import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag.jsx";

const TaskForm = ({ setTasks }) => {
  const [tasksData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, tasksData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  const checkTag = (tag) => {
    return tasksData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (tasksData.tags.some((item) => item === tag)) {
      const filterTags = tasksData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tasksData.task}
          name="task"
          className="task-input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task-form-bottom-line">
          <div>
            <Tag
              tagname="Grocery"
              selectTag={selectTag}
              selected={checkTag("Grocery")}
            />
            <Tag
              tagname="Home"
              selectTag={selectTag}
              selected={checkTag("Home")}
            />
            <Tag
              tagname="Study"
              selectTag={selectTag}
              selected={checkTag("Study")}
            />
            <Tag
              tagname="Health"
              selectTag={selectTag}
              selected={checkTag("Health")}
            />
          </div>
          <div>
            <select
              className="task-status"
              name="status"
              value={tasksData.status}
              onChange={handleChange}
            >
              <option value="todo">TO-DO</option>
              <option value="doing">In-Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task-submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
