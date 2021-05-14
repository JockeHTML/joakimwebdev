import React from "react";
import classes from "./Button.module.css";

const BorderButton = (props) => {
  return (
    <a href={props.src} className={classes.button}>
      {props.children}
      <i className="fas fa-chevron-right"></i>
    </a>
  );
};

export default BorderButton;
