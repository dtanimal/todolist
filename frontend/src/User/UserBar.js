import Login from "../User/Login";
// import Logout from "../User/Logout";
import Register from "../User/Register";
import React from "react";
import { StateContext } from "../Context";
import { useContext } from "react";

// import { useState } from "react";
const Logout = React.lazy(() => import("./Logout"));

export default function UserBar() {
  // const [user, setUser] = useState("");
  //   const user = "danny";

  const { state } = useContext(StateContext);
  if (state.user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
