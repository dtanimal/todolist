import React from "react";

export const ThemeContext = React.createContext({
  primaryColor: "deepskyblue",
  secondaryColor: "coral",
});

export const StateContext = React.createContext({
  state: {}, //can set to null too. set to default to avoid null errors
  dispatch: () => {},
});
