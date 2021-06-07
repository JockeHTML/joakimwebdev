import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo";
import Link from "next/link";
import { linksData } from "../../../data";
import Menu from "./Menu";
import SocialMedia from "../../Welcome/SocialMedia";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <Logo />
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
        <div className={classes.social}>
          <SocialMedia />
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
