import React from "react";
import classes from "./Projects.module.css";
import Card from "./Card";
import { projectsData } from "../../data";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h3>PROJECTS</h3>
      <h1>My latest projects</h1>
      <div className={classes.content}>
        {projectsData.map((data, index) => {
          const { title, text, src } = data;
          return <Card key={index} title={title} text={text} src={src} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
