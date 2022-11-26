import React, { useContext, useEffect } from "react";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";

export default function DeleteTodo({ _id }) {
  const { state, dispatch } = useContext(StateContext);

  const [todo, deleteTodo] = useResource(({ _id }) => ({
    // url: "/todo/" + id,
    url: `/todo/delete/${_id}`,
    method: "delete",
    data: { _id },
    headers: { Authorization: `${state.user.access_token}` },
  }));

  useEffect(() => {
    if (todo && todo.isLoading === false && todo.data) {
      dispatch({ type: "DELETE_TODO", _id });
    }
  }, [todo]);

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          deleteTodo({ _id });
          // dispatch({
          //   type: "DELETE_TODO",
          //   id: _id,
          // });
        }}
      >
        Delete
      </button>
    </div>
  );
}
