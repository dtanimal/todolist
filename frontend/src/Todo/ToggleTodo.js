import React, { useContext, useEffect } from "react";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";

export default function ToggleTodo({ _id, dateCompleted }) {
  const today = new Date();
  const dt = today.toDateString();
  // const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(StateContext);

  const [todo, updateTodo] = useResource(({ _id, dateCompleted }) => ({
    // url: "/todo/" + id,
    url: `/todo/patch/${_id}`,
    method: "patch",
    headers: { Authorization: `${state.user.access_token}` },
    data: { _id, dateCompleted },
  }));

  useEffect(() => {
    if (todo.isLoading === false && todo.data) {
      dispatch({
        type: "TOGGLE_TODO",
        dateCompleted: todo.data.dateCompleted,
        id: todo.data._id,
      });
    }
  }, [todo]);

  return (
    <div>
      Completed:
      <span style={{ color: "red" }}>
        {dateCompleted === true ? dt : "Not Completed"}
      </span>
      <input
        name="checked"
        type="checkbox"
        onChange={() => {
          updateTodo({
            id: _id,
            dateCompleted: dt,
          });
        }}
      />
    </div>
  );
}
