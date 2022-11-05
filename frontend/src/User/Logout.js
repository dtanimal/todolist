import React from "react";
import { StateContext } from "../Context";
import { useContext } from "react";

export default function Logout() {
  const { state, dispatch } = useContext(StateContext); // useContext hook to access state/dispatch
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        // setUser("");
      }}
    >
      Logged in as: <b>{state.user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
