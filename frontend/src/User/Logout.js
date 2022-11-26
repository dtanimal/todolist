import React from "react";
import { StateContext } from "../Context";
import { useContext } from "react";

export default function Logout() {
  const { state, dispatch } = useContext(StateContext); // useContext hook to access state/dispatch
  const { user } = state;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "CLEAR_TODOS" });
        // setUser("");
      }}
    >
      Logged in as: <b>{user.username}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
