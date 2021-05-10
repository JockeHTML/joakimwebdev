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
      <ul>
        <span></span>
        <li>
          <a href="https://www.linkedin.com">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com">
            <i class="fab fa-github-square"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
