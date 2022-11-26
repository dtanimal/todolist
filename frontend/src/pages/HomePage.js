import { React, useContext, useEffect } from "react";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";
import TodoList from "../Todo/TodoList";

export default function Homepage() {
  const { state, dispatch } = useContext(StateContext);

  const [todos, getTodos] = useResource(() => ({
    url: "/todo",
    method: "get",
    headers: { Authorization: `${state?.user?.access_token}` },
  }));

  useEffect(() => {
    getTodos();
  }, [state?.user?.access_token]);

  useEffect(() => {
    if (todos && todos.isLoading === false && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data.todos.reverse() });
    }
  }, [todos]);

  return (
    <>
      {todos?.isLoading && "todo loading..."} <TodoList />
    </>
  );
}
