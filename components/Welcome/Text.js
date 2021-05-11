import React from "react";
import classes from "./Text.module.css";
import Button from "./Button";

const Text = () => {
  return (
    <div className={classes.text}>
      <h1>Hello!</h1>
      <h1>
        I am <span>Joakim.</span>
      </h1>

      <p>
        Self taught front-end focused web developer. Living and working on my
        programmer skills in Sundsvall, Sweden. Welcome to my portfolio!
      </p>
      <Button>See my projects</Button>
    </div>
  );
};

export default Text;
