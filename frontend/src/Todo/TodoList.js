import Todo from "./Todo";
import React, { useContext } from "react";
import { StateContext } from "../Context";

export default function TodoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    <div>
      {todos.map((t, i) => (
        <Todo {...t} key={t.id} />
      ))}
    </div>
  );
}