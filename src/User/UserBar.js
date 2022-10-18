import Login from "../User/Login";
import Logout from "../User/Logout";
import Register from "../User/Register";
import React from "react";
// import { useState } from "react";

export default function UserBar({ user, dispatch }) {
  // const [user, setUser] = useState("");
  //   const user = "danny";
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
