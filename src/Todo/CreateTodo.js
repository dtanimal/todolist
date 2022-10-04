import { useState } from "react";

export default function CreateTodo({ user, todos, dispatch }) {
  // const timeElapsed = Date.now();
  // const today = new Date(timeElapsed);

  const today = new Date();
  const dt = today.toDateString();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [dateCreated] = useState(dt);
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
