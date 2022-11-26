import { useContext } from "react";
import React from "react";
import { StateContext, ThemeContext } from "../Context";
import ToggleTodo from "./ToggleTodo";
import DeleteTodo from "./DeleteTodo";
import { Link } from "react-router-dom";

function Todo({ title, description, dateCreated, author, dateCompleted, _id }) {
  // const today = new Date();
  // const dt = today.toDateString();
  // const [checked, setChecked] = useState(false);
  const { state } = useContext(StateContext);
  const { user } = state;
  const username = user.username;

  const { secondaryColor } = useContext(ThemeContext);
  return (
    <div>
      <Link to={`/todo/${_id}`}>
        <h3 style={{ color: secondaryColor }}>{title}</h3>
      </Link>
      <br />
      <div>{description}</div>
      <br />
      <ToggleTodo _id={_id} dateCompleted={dateCompleted} />
      <div>Date Created: {dateCreated}</div>
      <br />
      <i>
        Written by: <b>{username}</b>
        <br />
      </i>

      <DeleteTodo _id={_id} />
      <br />
    </div>
  );
}

export default React.memo(Todo);
