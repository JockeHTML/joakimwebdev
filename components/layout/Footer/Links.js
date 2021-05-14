import React from "react";
import classes from "./Links.module.css";
import { linksData } from "../../../data";
import Link from "next/link";

const Links = () => {
  return (
    <div className={classes.links}>
      <h3>Navigation</h3>
      <ul>
        {linksData.map((link, index) => {
          const { title, src } = link;
          return (
            <li key={index}>
              <Link href={src}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
