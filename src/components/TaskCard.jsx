import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tagz, handleDelete, index }) => {
  return (
    <article className="task-card">
      <p className="task-text"> {title}</p>
      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tagz.map((tag, index) => (
            <Tag key={index} tagname={tag} selected={true} />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img className="delete-icon" src={deleteIcon} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
