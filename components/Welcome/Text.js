import React from "react";
import classes from "./Text.module.css";
import Button from "./Button";

const Text = () => {
  return (
    <div className={classes.text}>
      <h1>Hello!</h1>
      <h1>I am Joakim.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        nesciunt reiciendis quos pariatur nobis dicta maxime ullam libero
        corporis? Ducimus!
      </p>
      <Button>See my projects</Button>
    </div>
  );
};

export default Text;
