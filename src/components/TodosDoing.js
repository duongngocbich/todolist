import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import Todo from "./Todo";
import { saveDataToStore } from "../constant/index";

const TodosDoing = () => {
  const [listTodos, setListTodos] = useContext(TodosContext);

  const onClickStart = (id) => {
    setListTodos((prevState) => {
      const doing = prevState.doing;
      const done = prevState.done;
      let newDoing = [
        ...doing.slice(0, id),
        ...doing.slice(id + 1, doing.length),
      ];
      let newDone = [...done, { ...doing[id], id: done.length }];

      let newList = { ...prevState, doing: newDoing, done: newDone };
      saveDataToStore(newList);
      return newList;
    });
  };

  return (
    <div className="todos-doing card-list">
      <h2>Doing</h2>
      {listTodos.doing.length ? (
        listTodos.doing.map((todo, index) => (
          <Todo
            key={todo.id}
            id={index}
            content={todo.content}
            classIcon={"fas fa-play"}
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

export default TodosDoing;
