import { useState, useContext, useEffect } from "react";
import React from "react";
// import { v4 as uuidv4 } from "uuid";
import { StateContext } from "../Context";
import { useResource } from "react-request-hook";

export default function CreateTodo() {
  const today = new Date();
  const dt = today.toDateString();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [dateCompleted] = useState(null);

  // useContext hook to access state/dispatch
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [todo, createTodo] = useResource(
    ({ title, description, dateCreated, author, dateCompleted, id }) => ({
      url: "/todos",
      method: "post",
      data: { title, description, dateCreated, author, dateCompleted, id },
    })
  );

  useEffect(() => {
    if (todo.isLoading === false && todo.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todo.data.title,
        description: todo.data.description,
        author: todo.data.author,
        dateCreated: todo.data.dateCreated,
        dateCompleted: todo.data.dateCompleted,
        id: todo.data.id,
      });
    }
  }, [todo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo({
          title,
          description,
          author: user,
          dateCreated: dt,
          dateCompleted: false,
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
