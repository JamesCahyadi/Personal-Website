import { Box, Button, Card, CardHeader, CardMedia, Grid, Link, Typography } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";
import React from "react";
import WebIcon from "@material-ui/icons/Web";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    height: 420,
    textAlign: "center",
  },
  media: {
    objectFit: "fill",
  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  description: {
    paddingLeft: 16,
    paddingRight: 5,
  },
  center: {
    textAlign: "center",
  },
  icon: {
    fontSize: "1.25rem",
    marginBottom: 2,
    marginRight: 3,
  },
});

const ProjectCard = ({ image, title, technologies, description, github, website, devpost }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={6}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} component="img" alt="Project Image" height="250" image={image} title={title} />
        <CardHeader title={title} subheader={technologies} className={classes.header} />
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
        <Box mt={2}>
          {github ? (
            <Link href={github} underline="none">
              <Button size="small" color="primary">
                <GitHubIcon className={classes.icon} /> Github
              </Button>
            </Link>
          ) : (
            <div>Please contact for source code</div>
          )}
          {website && (
            <>
              |
              <Link href={website} underline="none">
                <Button size="small" color="primary">
                  <WebIcon className={classes.icon} /> Visit
                </Button>
              </Link>
            </>
          )}
          {devpost && (
            <>
              |
              <Link href={devpost} underline="none">
                <Button size="small" color="primary">
                  <PublicIcon className={classes.icon} /> Devpost
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
