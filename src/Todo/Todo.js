import { useState } from "react";
import React from "react";

export default function Todo({
  title,
  description,
  dateCreated,
  author,
  isChecked,
  dateCompleted,
}) {
  const today = new Date();
  const dt = today.toDateString();
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      <br />
      <div>{description}</div>
      <br />
      <div>
        Complete: {isChecked}
        <input
          name="checked"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(!checked)}
        />
      </div>
      <br />
      <div>Date Completed: {checked === true ? dt : null}</div>
      <br />
      <div>Date Created: {dateCreated}</div>
      <br />
      <i>
        Written by: <b>{author}</b>
      </i>
    </div>
  );
}
