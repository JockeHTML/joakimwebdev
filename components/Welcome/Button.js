import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <a href="#" className={classes.button}>
      {props.children}
      <i className="fas fa-chevron-right"></i>
    </a>
  );
};

export default Button;
