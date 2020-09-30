import React from "react";
import { TodosProvider } from "./TodosContext";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import "../assets/styles/app.scss";

const App = () => (
  <TodosProvider>
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo />
      <ListTodo />
    </div>
  </TodosProvider>
);

export default App;
