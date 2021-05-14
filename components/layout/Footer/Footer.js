import React from "react";
import classes from "./Footer.module.css";
import Button from "../../Welcome/Button";
import Logo from "../../layout/Header/Logo";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.text}>
        <span>
          <h2>Want to get in touch with me?</h2>
          <p>
            If you have any questions or just wanna get in contact with me, hit
            me up and we can work something out!
          </p>
        </span>
        <Button>Contact me</Button>
      </div>
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
    </div>
  );
};

export default Footer;
