// import TodoList from "./Todo/TodoList";
import CreateTodo from "./Todo/CreateTodo";
import { useEffect, useReducer, useState } from "react";
import appReducer from "./Reducers";
import React from "react";
import { ThemeContext, StateContext } from "./Context";
// import { useResource } from "react-request-hook";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  //   }

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [], //set it to a empty array so page starts with no Todos
    // todos: initialTodos,
  });

  // const [todos, getTodos] = useResource(() => ({
  //   url: "/todo",
  //   method: "get",
  //   headers: { Authorization: `${state.user.access_token}` },
  // }));

  // useEffect(() => {
  //   getTodos();
  // }, [state?.user?.access_token]);

  // useEffect(() => {
  //   if (todos && todos.isLoading === false && todos.data) {
  //     dispatch({ type: "FETCH_TODOS", todos: todos.data.todos.reverse() });
  //   }
  // }, [todos]);

  // const { user } = state; // destructuring user so you dont need to use state.user
  //effect hook so update Title of page with User's name
  useEffect(() => {
    if (state.user) {
      document.title = `${state.user.username}'s - ToDo App`;
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/todo" element={<Layout />}>
                <Route path="/todo/create" element={<CreateTodo />} />
                <Route path="/todo/:id" element={<TodoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
