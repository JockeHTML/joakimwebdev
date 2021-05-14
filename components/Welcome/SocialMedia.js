import React from "react";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={classes.socialMedia}>
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

export default SocialMedia;
