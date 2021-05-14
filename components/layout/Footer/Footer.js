import React from "react";
import classes from "./Footer.module.css";
import Links from "./Links";
import Text from "./Text";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <Text />
        <Links />
      </div>
      <div className={classes.socialMedia}>
        <ul>
          <span></span>
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
    </div>
  );
};

export default Footer;
