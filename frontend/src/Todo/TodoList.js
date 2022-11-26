import Todo from "./Todo";
import React, { useContext } from "react";
import { StateContext } from "../Context";

export default function TodoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    //     {todos.map((t, i) => (
    //   <Todo {...t} key={t.id} />
    // ))}

    <div>
      {todos.length === 0 && <h2>No todos found.</h2>}
      {todos.length > 0 && todos.map((t, i) => <Todo {...t} key={t._id} />)}
    </div>
  );
}
