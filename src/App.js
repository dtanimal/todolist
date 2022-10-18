import UserBar from "./User/UserBar";
import TodoList from "./Todo/TodoList";
import CreateTodo from "./Todo/CreateTodo";
import { useReducer } from "react";
import appReducer from "./Reducers";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function App() {
  // const today = new Date();
  // const dt = today.toDateString();
  // const today = new Date(timeElapsed);
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

  // const [user, setUser] = useState("");
  // const [todos, setTodos] = useState(initialTodos);

  // const [user, dispatchUser] = useReducer(userReducer, "");
  // const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <TodoList todos={state.todos} />
      {state.user && (
        <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
