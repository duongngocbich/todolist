import React, { useState, useEffect, useMemo, createContext } from "react";
import { getDataFromStore } from "../constant/index";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  let initialList = {
    todos: [],
    doing: [],
    done: [],
  };

  // C1: lấy dữ liệu khi chưa render: componentWillMount
  useMemo(() => {
    let list = getDataFromStore();
    if (list !== null) {
      initialList = Object.assign({}, list);
    }
  }, []);

  const [listTodos, setListTodos] = useState(initialList);

  // C2: lấy dữ liệu sau khi render lần đầu: componentDidMount
  // useEffect(() => {
  //   let list = getDataFromStore();
  //   if (list !== null) {
  //     setListTodos(list);
  //   }
  // }, []);

  return (
    <TodosContext.Provider value={[listTodos, setListTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
