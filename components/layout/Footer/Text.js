import React from "react";
import classes from "./Text.module.css";
import Button from "../../Welcome/Button";

const Text = () => {
  return (
    <div className={classes.text}>
      <span>
        <h2>Want to get in touch with me?</h2>
        <p>
          If you have any questions or just wanna get in contact with me, hit me
          up and we can work something out!
        </p>
      </span>
      <Button>Contact me</Button>
    </div>
  );
};

export default Text;
