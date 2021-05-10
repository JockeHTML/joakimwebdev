import React from "react";
import classes from "./What.module.css";

const What = () => {
  return (
    <div className={classes.what}>
      <div className={classes.content}>
        <h1>What I work with</h1>
      </div>
      <div className={classes.content}>
        <div>
          {" "}
          <img src="/html2.png" alt="picture of html logo" />
        </div>
        <div>
          {" "}
          <img src="/css2.png" alt="picture of css logo" />
        </div>
      </div>
    </div>
  );
};

export default What;
