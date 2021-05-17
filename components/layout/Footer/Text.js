import React from "react";
import classes from "./Text.module.css";
import Button from "../../Welcome/Button";
import Link from "next/link";

const Text = () => {
  return (
    <div className={classes.text}>
      <div>
        <h2>Want to get in touch with me?</h2>
        <p>
          If you have any questions or just wanna get in contact with me, hit me
          up and we can work something out!
        </p>
      </div>
      <div className={classes.button}>
        <Link passHref href="/contact">
          <a>
            <Button>Contact me</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Text;
