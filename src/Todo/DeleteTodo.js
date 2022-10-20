import React, { useContext } from "react";
import { StateContext } from "../Context";

export default function DeleteTodo({ id }) {
  const { dispatch } = useContext(StateContext);

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          dispatch({
            type: "DELETE_TODO",
            id: id,
          });
        }}
      >
        Delete Todo
      </button>
    </div>
  );
}
