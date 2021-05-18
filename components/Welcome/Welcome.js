import React from "react";
import classes from "./Welcome.module.css";
import Avatar from "./Avatar";
import Text from "./Text";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <div className={classes.content}>
        <Text />
        <Avatar />
      </div>
    </div>
  );
};

export default Welcome;
