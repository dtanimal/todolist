import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserBar from "../User/UserBar";
import Header from "../Header";
import { StateContext } from "../Context";
import { Link } from "react-router-dom";

export default function Layout() {
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <>
      <Header text="ToDo App" />
      <React.Suspense fallback={"Loading..."}>
        <UserBar />
      </React.Suspense>
      <br />
      {user && <Link to="/todo/create">Create New Todo</Link>}

      <Outlet />
    </>
  );
}
