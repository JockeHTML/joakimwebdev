import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.button}>
      {props.children}
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default Button;
