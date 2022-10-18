import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Header = ({ text }) => {
  const { primaryColor } = useContext(ThemeContext);
  return <h1 style={{ color: primaryColor }}>{text}</h1>;
};

export default Header;
