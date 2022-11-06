import React, { useContext, useEffect } from "react";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";

export default function ToggleTodo({ id, dateCompleted }) {
  const today = new Date();
  const dt = today.toDateString();
  // const [checked, setChecked] = useState(false);
  const { dispatch } = useContext(StateContext);

  const [todo, updateTodo] = useResource(({ id, dateCompleted }) => ({
    url: "/todos/" + id,
    method: "patch",
    data: { id, dateCompleted },
  }));

  useEffect(() => {
    if (todo.isLoading === false && todo.data) {
      dispatch({
        type: "TOGGLE_TODO",
        dateCompleted: todo.data.dateCompleted,
        id: todo.data.id,
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
            id: id,
            dateCompleted: dt,
          });
        }}
      />
    </div>
  );
}
