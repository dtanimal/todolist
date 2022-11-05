import UserBar from "./User/UserBar";
import TodoList from "./Todo/TodoList";
import CreateTodo from "./Todo/CreateTodo";
import { useEffect, useReducer, useState } from "react";
import appReducer from "./Reducers";
// import { v4 as uuidv4 } from "uuid";
import React from "react";
import Header from "./Header";
import { ThemeContext, StateContext } from "./Context";
import ChangeTheme from "./ChangeTheme";
import { useResource } from "react-request-hook";

function App() {
  // const initialTodos = [
  //   {
  //     title: "Plants",
  //     description: "Water the plants.",
  //     author: "Danny",
  //     isChecked: false,
  //     dateCreated: "01/25/2020",
  //     dateCompleted: null,
  //     id: uuidv4(),
  //   },

  //   {
  //     title: "Bedroom",
  //     description: "Clean room.",
  //     author: "Danny",
  //     isChecked: false,
  //     dateCreated: "02/17/2019",
  //     dateCompleted: null,
  //     id: uuidv4(),
  //   },
  // ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [], //set it to a empty array so page starts with no Todos
    // todos: initialTodos,
  });

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data });
    }
  }, [todos]);

  // const { user } = state; // destructuring user so you dont need to use state.user
  //effect hook so update Title of page with User's name
  useEffect(() => {
    if (state.user) {
      document.title = `${state.user}'s - ToDo App`;
    } else {
      document.title = `ToDo App`;
    }
  }, [state.user]);

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  // useEffect(() => {
  //   fetch("/api/themes")
  //     .then((result) => result.json())
  //     .then((themes) => setTheme(themes));
  // }, []);

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((result) => result.json())
  //     .then((todos) => dispatch({ type: "FETCH_TODOS", todos }));
  // }, []);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header text="ToDo App" />
          <ChangeTheme theme={theme} setTheme={setTheme} />

          <UserBar />
          <TodoList todos={state.todos} />
          {state.user && <CreateTodo />}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
