export const saveDataToStore = (listTodos) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("listTodos", JSON.stringify(listTodos));
  } else {
    console.log("Trình duyệt không hỗ trợ localstorage!");
  }
};

export const getDataFromStore = () => {
  if (typeof Storage !== "undefined") {
    return JSON.parse(localStorage.getItem("listTodos"));
  } else {
    return null;
  }
};
