import React from "react";
import Todos from "./Todos";
import TodosDoing from "./TodosDoing";
import TodosDone from "./TodosDone";

const ListTodo = () => {
  return (
    <div className="wrap-content">
      <Todos />
      <TodosDoing />
      <TodosDone />
    </div>
  );
};

export default ListTodo;
