import React, { useContext } from "react";
import { StateContext } from "../Context";

export default function ToggleTodo({ id, dateCompleted }) {
  const today = new Date();
  const dt = today.toDateString();
  // const [checked, setChecked] = useState(false);
  const { dispatch } = useContext(StateContext);

  return (
    <div>
      Completed: {dateCompleted === true ? dt : "Not Completed"}
      <input
        name="checked"
        type="checkbox"
        onChange={() => {
          dispatch({
            type: "TOGGLE_TODO",
            id: id,
            dateCompleted: dt,
          });
        }}
      />
    </div>
  );
}