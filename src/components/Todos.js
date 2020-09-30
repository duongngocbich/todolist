import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import Todo from "./Todo";
import { saveDataToStore } from "../constant/index";

const Todos = () => {
  const [listTodos, setListTodos] = useContext(TodosContext);

  const onClickStart = (id) => {
    setListTodos((prevState) => {
      const todos = prevState.todos;
      const doing = prevState.doing;
      let newTodos = [
        ...todos.slice(0, id),
        ...todos.slice(id + 1, todos.length),
      ];
      let newDoing = [...doing, { ...todos[id], id: doing.length }];

      let newList = { ...prevState, todos: newTodos, doing: newDoing };
      saveDataToStore(newList);
      return newList;
    });
  };

  return (
    <div className="todos card-list">
      <h2>To Do</h2>
      {listTodos.todos.length ? (
        listTodos.todos.map((todo, index) => (
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

export default Todos;
