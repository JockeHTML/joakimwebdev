import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src="./logo.png" alt="Joakimwebdev logo" />
    </div>
  );
};

export default Logo;
