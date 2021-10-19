import React, { useEffect, useState } from "react";
import { alternateTheme, leftTheme, useStyles } from "./Experience.styles";

import { ThemeProvider } from "@material-ui/core/styles";
import { Timeline } from "@material-ui/lab";
import TimelineCard from "components/TimelineCard";
import { Typography } from "@material-ui/core";
import { experiences } from "./Experience.data";

const Experience = () => {
  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);
  const [isAboveMed, setIsAboveMed] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (width > leftTheme.breakpoints.values.md) {
      setIsAboveMed(true);
    } else {
      setIsAboveMed(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <ThemeProvider theme={isAboveMed ? alternateTheme : leftTheme}>
      <Typography className={classes.title} variant="h4" align="center">
        Experience
      </Typography>
      <Timeline align={isAboveMed ? "alternate" : "left"}>
        {experiences.map((experience) => (
          <TimelineCard
            logoImg={experience.logoImg}
            logoLink={experience.logoLink}
            heading={experience.heading}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

export default Experience;
