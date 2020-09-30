import React from "react";

const Todo = ({ id, content, classIcon, onClick }) => {
  return (
    <div className="todo-item">
      <p className="content">{content}</p>
      <button className="btn" onClick={() => onClick(id)}>
        <span className={classIcon}></span>
      </button>
    </div>
  );
};

export default Todo;
