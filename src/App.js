import UserBar from "./User/UserBar";
import TodoList from "./Todo/TodoList";
import CreateTodo from "./Todo/CreateTodo";
import { useEffect, useReducer, useState } from "react";
import appReducer from "./Reducers";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Header from "./Header";
import { ThemeContext } from "./Context";
import ChangeTheme from "./ChangeTheme";

function App() {
  const initialTodos = [
    {
      title: "Plants",
      description: "Water the plants.",
      author: "Danny",
      isChecked: false,
      dateCreated: "01/25/2020",
      dateCompleted: null,
      id: uuidv4(),
    },

    {
      title: "Bedroom",
      description: "Clean room.",
      author: "Danny",
      isChecked: false,
      dateCreated: "02/17/2019",
      dateCompleted: null,
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });

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

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header text="ToDo App" />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserBar user={state.user} dispatch={dispatch} />
        <TodoList todos={state.todos} />
        {state.user && (
          <CreateTodo
            user={state.user}
            todos={state.todos}
            dispatch={dispatch}
          />
        )}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
