import React, { useContext } from "react";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";

export default function DeleteTodo({ id }) {
  const { dispatch } = useContext(StateContext);
  const [todo, deleteTodo] = useResource(({ id }) => ({
    url: "/todos/" + id,
    method: "delete",
    data: { id },
  }));

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          deleteTodo({ id });
          dispatch({
            type: "DELETE_TODO",
            id: id,
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}
