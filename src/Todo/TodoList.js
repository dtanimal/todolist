import Todo from "./Todo";
import React from "react";

export default function TodoList({ todos = [] }) {
  return (
    <div>
      {todos.map((t, i) => (
        <Todo {...t} key={t.id} />
      ))}
    </div>
  );
}
