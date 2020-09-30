import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import Todo from "./Todo";
import { saveDataToStore } from "../constant/index";

const TodosDone = () => {
  const [listTodos, setListTodos] = useContext(TodosContext);

  const onClickStart = (id) => {
    setListTodos((prevState) => {
      const done = prevState.done;
      let newDone = [...done.slice(0, id), ...done.slice(id + 1, done.length)];

      let newList = { ...prevState, done: newDone };
      saveDataToStore(newList);
      return newList;
    });
  };

  return (
    <div className="todos-done card-list">
      <h2>Done</h2>
      {listTodos.done.length ? (
        listTodos.done.map((todo, index) => (
          <Todo
            key={todo.id}
            id={index}
            content={todo.content}
            classIcon={"fas fa-trash"}
            onClick={onClickStart}
          />
        ))
      ) : (
        <div className="empty-item">
          <button className="btn">
            {/* <span className="fas fa-check"></span> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default TodosDone;
