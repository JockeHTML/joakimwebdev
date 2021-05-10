import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
