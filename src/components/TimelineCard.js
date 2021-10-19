import { Link, List, Paper, Typography } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";

import Course from "components/Course";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    padding: 10,
    textAlign: "center",
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
}));

const TimelineCard = ({ logoLink, logoImg, heading, date, description }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined">
          <Link href={logoLink}>
            <img src={logoImg} className={classes.dot} alt="" />
          </Link>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5">{heading}</Typography>
          <Typography variant="caption">{date}</Typography>
          {typeof description == "string" ? (
            <Typography variant="body2">{description}</Typography>
          ) : (
            <List>
              {description.map((course) => (
                <Course course={course} />
              ))}
            </List>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
