import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateTodo({ user, dispatch }) {
  const today = new Date();
  const dt = today.toDateString();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateCompleted] = useState(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          title,
          description,
          author: user,
          isChecked: false,
          dateCreated: dt,
          dateCompleted,
          id: uuidv4(),
        });
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
