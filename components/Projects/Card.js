import React, { useEffect } from "react";
import classes from "./Card.module.css";
import BorderButton from "../ui/BorderButton";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ title, text, src }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.card}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <BorderButton>Live demo</BorderButton>
      </div>
      <div className={classes.image}>
        <img src={src} alt="picture of bars and a checkmark" />
      </div>
    </div>
  );
};

export default Card;
