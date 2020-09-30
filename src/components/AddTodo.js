import React, { useState, useContext } from "react";
import { TodosContext } from "./TodosContext";
import { saveDataToStore } from "../constant/index";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [listTodos, setListTodos] = useContext(TodosContext);

  const onChangeInput = (e) => {
    setTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    let newTodo = { id: listTodos.todos.length, content: todo };
    setListTodos((prevState) => {
      let newList = {
        ...prevState,
        todos: [...prevState.todos, newTodo],
      };
      saveDataToStore(newList);
      return newList;
    });
    setTodo("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={addNewTodo}>
        <div className="form-group">
          <input
            type="text"
            value={todo}
            onChange={onChangeInput}
            name="todo"
            placeholder="Add new todo"
          />
          <button type="submit" className="btn">
            <span className="fas fa-plus"></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
