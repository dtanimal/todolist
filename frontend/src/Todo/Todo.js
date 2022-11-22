import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../Context";
import ToggleTodo from "./ToggleTodo";
import DeleteTodo from "./DeleteTodo";

function Todo({ title, description, dateCreated, author, dateCompleted, id }) {
  // const today = new Date();
  // const dt = today.toDateString();
  // const [checked, setChecked] = useState(false);

  const { secondaryColor } = useContext(ThemeContext);
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <br />
      <div>{description}</div>
      <br />
      <ToggleTodo id={id} dateCompleted={dateCompleted} />
      <div>Date Created: {dateCreated}</div>
      <br />
      <i>
        Written by: <b>{author}</b>
        <br />
      </i>

      <DeleteTodo id={id} />
      <br />
    </div>
  );
}

export default React.memo(Todo);
