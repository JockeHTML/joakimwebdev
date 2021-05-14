import React from "react";
import classes from "./Projects.module.css";
import Card from "./Card";
import { projectsData } from "../../data";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === "/projects"
          ? classes.projectsWhite
          : classes.projects
      }
    >
      <h3>PROJECTS</h3>
      <h1>My latest projects</h1>
      <div className={classes.content}>
        {projectsData.map((data, index) => {
          const { title, text, src, link } = data;
          return (
            <Card link={link} key={index} title={title} text={text} src={src} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
