import { Grid, Paper, Typography } from "@material-ui/core";

import ProjectCard from "components/ProjectCard";
import React from "react";
import { projects } from "./Projects.data";
import { useStyles } from "./Projects.styles";

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.root}>
        <Typography variant="h4" align="center" className={classes.title}>
          Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <ProjectCard
              image={project.image}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              github={project.github}
              devpost={project.devpost}
              website={project.website}
            />
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Projects;
