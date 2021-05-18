import React from "react";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={classes.socialMedia}>
      <ul>
        <li>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com">
            <i className="fab fa-github-square"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
