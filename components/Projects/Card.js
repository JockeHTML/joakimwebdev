import React from "react";
import classes from "./Card.module.css";
import Button from "../Welcome/Button";

const Card = ({ title, text, src }) => {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Live demo</Button>
      </div>
      <div className={classes.image}>
        <img src={src} alt="picture of bars and a checkmark" />
      </div>
    </div>
  );
};

export default Card;
